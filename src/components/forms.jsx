import React, { useState } from 'react';

const BloodDonationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contactNumber: '',
    bloodType: 'A+',  // Default blood type
    isDonor: false,
    isReceiver: false,
    donationDate: '',
    weight: '',
    hemoglobinCount: '',
    medicalIssues: '',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prevData) => {
      if (type === 'checkbox') {
        return { ...prevData, [name]: checked, isReceiver: !checked, isDonor: !checked };
      }

      return { ...prevData, [name]: value };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/blood_donation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Form submitted successfully');
      } else {
        console.error('Error submitting form');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div id='forms'>
      <center><h2>Blood Donation Form</h2></center>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="contactNumber">Contact Number:</label>
        <input
          type="tel"
          id="contactNumber"
          name="contactNumber"
          value={formData.contactNumber}
          onChange={handleChange}
          required
        />

        <label htmlFor="bloodType">Blood Type:</label>
        <select
          id="bloodType"
          name="bloodType"
          value={formData.bloodType}
          onChange={handleChange}
        >
          
          <option value="A+">A+</option>
          <option value="B+">B+</option>
          <option value="AB+">AB+</option>
          <option value="O+">O+</option>
        </select>

      
        <label htmlFor="type">Type:</label>
        <select
          id="bloodType"
          name="bloodType"
          value={formData.bloodType}
          onChange={handleChange}
        >
          <option value="doner">Donor</option>
          <option value="resipient">Recipient</option>
      
        </select>

        <label htmlFor="donationDate">Donation Date:</label>
        <input
          type="date"
          id="donationDate"
          name="donationDate"
          value={formData.donationDate}
          onChange={handleChange}
          required
        />

        <label htmlFor="weight">Weight (in kg):</label>
        <input
          type="number"
          id="weight"
          name="weight"
          value={formData.weight}
          onChange={handleChange}
        />

        <label htmlFor="hemoglobinCount">Hemoglobin Count:</label>
        <input
          type="text"
          id="hemoglobinCount"
          name="hemoglobinCount"
          value={formData.hemoglobinCount}
          onChange={handleChange}
        />

        <label htmlFor="medicalIssues">Medical Issues:</label>
        <textarea
          id="medicalIssues"
          name="medicalIssues"
          value={formData.medicalIssues}
          onChange={handleChange}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default BloodDonationForm;