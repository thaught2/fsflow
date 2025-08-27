// src/pages/form.jsx
import React, { useState } from 'react';

export default function AdminRequestForm() {
  const [formData, setFormData] = useState({
    requesterName: '',
    requestType: '',
    jobTitle: '',
    instructions: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    // In future: POST to Supabase
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Submit Admin Request</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Requester Name:
          <input name="requesterName" value={formData.requesterName} onChange={handleChange} required />
        </label>
        <br /><br />

        <label>
          Request Type:
          <select name="requestType" value={formData.requestType} onChange={handleChange} required>
            <option value="">-- Select --</option>
            <option value="Document Processing">Document Processing</option>
            <option value="Meeting Coordination">Meeting Coordination</option>
            <option value="Travel">Travel</option>
            <option value="Time Entry">Time Entry</option>
            <option value="Shipping">Shipping</option>
          </select>
        </label>
        <br /><br />

        <label>
          Job Title:
          <input name="jobTitle" value={formData.jobTitle} onChange={handleChange} />
        </label>
        <br /><br />

        <label>
          Instructions:
          <textarea name="instructions" value={formData.instructions} onChange={handleChange} rows={4} />
        </label>
        <br /><br />

        <button type="submit">Submit Request</button>
      </form>
    </div>
  );
}
