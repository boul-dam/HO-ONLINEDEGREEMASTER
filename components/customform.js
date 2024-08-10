"use client";
// components/CustomForm.js

import { useState } from 'react';

const CustomForm = () => {
  const [formData, setFormData] = useState({
    fullname: '',
    phone: '',
    email: '',
    subject: '',
    country: '',
  });

  const [file, setFile] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const googleFormActionUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSfvPOwwiHhRUq-q27kAmnsQEr0BBVFKQA39tM4fckabRD9_2w/formResponse';

    const submissionData = new FormData();
    submissionData.append('entry.877086558', formData.fullname); // Replace with actual entry ID
    submissionData.append('entry.1498135098', formData.phone); // Replace with actual entry ID
    submissionData.append('entry.1424661284', formData.email); // Replace with actual entry ID
    submissionData.append('entry.2606285', formData.subject); // Replace with actual entry ID
    submissionData.append('entry.1410922965', formData.country); // Replace with actual entry ID
    if (file) {
      submissionData.append('file', file); // File handling if needed
    }

    try {
      const response = await fetch(googleFormActionUrl, {
        method: 'POST',
        mode: 'no-cors', // Use no-cors mode
        body: submissionData,
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({
          fullname: '',
          phone: '',
          email: '',
          subject: '',
          country: '',
        });
        setFile(null);
        document.getElementById('fileInput').value = '';

        // Hide the success message after 3 seconds
        setTimeout(() => {
          setIsSubmitted(false);
        }, 3000);
      } else {
        throw new Error('Error submitting form');
      }
    } catch (error) {
      setError('Error submitting form');
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} method="POST">
      <div>
        <label htmlFor="fullname">Full Name:</label>
        <input
          type="text"
          id="fullname"
          name="fullname"
          value={formData.fullname}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="phone">Phone:</label>
        <input
          type="text"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="subject">Subject:</label>
        <select
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
        >
          <option value="" disabled>Select your subject</option>
          <option value="MBA">MBA</option>
          <option value="BBA">BBA</option>
          <option value="BCOM">BCOM</option>
        </select>
      </div>
      <div>
        <label htmlFor="country">Country:</label>
        <input
          type="text"
          id="country"
          name="country"
          value={formData.country}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="fileInput">Upload File:</label>
        <input
          type="file"
          id="fileInput"
          name="file"
          onChange={handleFileChange}
        />
      </div>
      <button type="submit">Submit</button>
      {isSubmitted && <p className="success-message">Form submitted successfully!</p>}
      {error && <p className="error-message">{error}</p>}
    </form>
  );
};

export default CustomForm;
