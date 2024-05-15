from flask import Flask, request, jsonify
import pymysql
from flask_cors import CORS

app = Flask(__name__)
CORS(app, resources={r"/blood_donation": {"origins": "*"}})

# MySQL Configuration
mysql_config = {
    'host': 'localhost',
    'user': 'root',
    'password': '',
    'database': 'blood_donation',
}

# Function to establish database connection
def get_db_connection():
    return pymysql.connect(**mysql_config)

# Create blood_donors table if not exists
def create_table():
    conn = get_db_connection()
    with conn.cursor() as cursor:
        cursor.execute("""
            CREATE TABLE IF NOT EXISTS blood_donors (
                id INT AUTO_INCREMENT PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                email VARCHAR(255) NOT NULL,
                contact_number VARCHAR(20) NOT NULL,
                blood_type VARCHAR(5) NOT NULL,
                is_donor BOOLEAN NOT NULL,
                is_receiver BOOLEAN NOT NULL,
                donation_date DATE NOT NULL,
                weight FLOAT,
                hemoglobin_count VARCHAR(10),
                medical_issues TEXT
            )
        """)
        conn.commit()
    conn.close()

create_table()  # Create table on application startup

# Blood Donation Form Endpoint
@app.route('/blood_donation', methods=['GET', 'POST'])
def blood_donation_form():
    if request.method == 'POST':
        try:
            conn = get_db_connection()
            data = request.json

            with conn.cursor() as cursor:
                cursor.execute("""
                    INSERT INTO blood_donors 
                    (name, email, contact_number, blood_type, is_donor, is_receiver, donation_date, weight, hemoglobin_count, medical_issues)
                    VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s)
                """, (
                    data['name'], data['email'], data['contactNumber'], data['bloodType'],
                    data['isDonor'], data['isReceiver'], data['donationDate'],
                    data['weight'], data['hemoglobinCount'], data['medicalIssues']
                ))
                conn.commit()

            conn.close()
            return jsonify({'message': 'Blood donation form submitted successfully'}), 201

        except Exception as e:
            return jsonify({'error': 'Database connection error'}), 500

    elif request.method == 'GET':
        return jsonify({'message': 'Welcome to the blood donation form API'})

    
if __name__ == '__main__':
    app.run(debug=True)
