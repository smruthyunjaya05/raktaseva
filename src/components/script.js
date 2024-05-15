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
        // Reset form data if needed
        setFormData({
          name: '',
          email: '',
          contactNumber: '',
          bloodType: 'select',
          donationDate: '',
          isDonor: false,
          isReceiver: false,
          weight: '',
          hemoglobinCount: '',
          medicalIssues: '',
        });
      } else {
        console.error('Failed to submit form');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };
  