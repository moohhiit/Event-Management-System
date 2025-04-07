import React, { useState } from 'react';

const StudentForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    course: '',
    gender: '',
    studentId: '',
    dob: '',
  });

  

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle Summit Form
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
   
    console.log('Form submitted:', formData);
  };

  // Inline CSS Styles
  const containerStyle = {
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f4f4f9',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    margin: 0,
  };

  const formStyle = {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    width: '100%',
    maxWidth: '500px',
  };

  const headingStyle = {
    textAlign: 'center',
    color: '#333',
  };

  const labelStyle = {
    display: 'block',
    fontWeight: 'bold',
    margin:"10px"
  };

  const inputStyle = {
    width: '100%',
    padding: '8px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    boxSizing: 'border-box',
  };

  const buttonStyle = {
    width: '100%',
    padding: '10px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    fontSize: '16px',
    cursor: 'pointer',
    margin:'10px'
  };

  const preStyle = {
    backgroundColor: '#e9ecef',
    padding: '15px',
    borderRadius: '8px',
    fontSize: '14px',
    color: '#333',
    wordWrap: 'break-word',
    whiteSpace: 'pre-wrap',
  };

  return (
    <div style={containerStyle}>
      <div style={formStyle}>
        <h1 style={headingStyle}>Student Form</h1>
        <form onSubmit={handleSubmit}>
          {/* Personal Information Fields */}
          <div>
            <label htmlFor="firstName" style={labelStyle}>Full Name</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              style={inputStyle}
              required
            />
          </div>
          <div>
            <label htmlFor="email" style={labelStyle}>Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              style={inputStyle}
              required
            />
          </div>

          {/* Academic Information Fields */}
          <div>
            <label htmlFor="studentId" style={labelStyle}>Student ID:</label>
            <input
              type="text"
              id="studentId"
              name="studentId"
              value={formData.studentId}
              onChange={handleChange}
              style={inputStyle}
              required
            />
          </div>

          <div>
            <label htmlFor="dob" style={labelStyle}>Date of Birth:</label>
            <input
              type="date"
              id="dob"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              style={inputStyle}
              required
            />
          </div>

          <div>
            <label htmlFor="gradeLevel" style={labelStyle}>Year:</label>
            <select
              id="year"
              name="year"
              value={formData.Year}
              onChange={handleChange}
              style={inputStyle}
              required
            >
              <option value="">Select Year</option>
              <option value="1">1st Year</option>
              <option value="2">2nd Year</option>
              <option value="3">3rd Year</option>
              <option value="4">4th Year</option>
            </select>
          </div>

          

          <div>
            <label htmlFor="enrollmentStatus" style={labelStyle}>Semester :</label>
            <select
              id="semester"
              name="semester"
              value={formData.semester }
              onChange={handleChange}
              style={inputStyle}
              required
            >
              <option value="">Select Semester</option>
              <option value="1" >1st</option>
              <option value="2">2nd</option>
              <option value="3">3rd</option>
              <option value="4">4th</option>
              <option value="5">5th</option>
              <option value="6">6th</option>
              <option value="7">7th</option>
              <option value="8">8th</option>
            </select>
          </div>

          {/* Gender Field */}
          <div>
            <label style={labelStyle}>Gender:</label>
            <div>
              <label htmlFor="male">
                <input
                  type="radio"
                  id="male"
                  name="gender"
                  value="Male"
                  checked={formData.gender === 'Male'}
                  onChange={handleChange}
                />
                Male
              </label>
              <label htmlFor="female">
                <input
                  type="radio"
                  id="female"
                  name="gender"
                  value="Female"
                  checked={formData.gender === 'Female'}
                  onChange={handleChange}
                />
                Female
              </label>
              <label htmlFor="other">
                <input
                  type="radio"
                  id="other"
                  name="gender"
                  value="Other"
                  checked={formData.gender === 'Other'}
                  onChange={handleChange}
                />
                Other
              </label>
            </div>
          </div>

          <button type="submit" style={buttonStyle}>Submit</button>
        </form>

        {submitted && (
          <div>
            <h2 style={{ textAlign: 'center', color: '#28a745' }}>Form Submitted</h2>
            <pre style={preStyle}>{JSON.stringify(formData, null, 2)}</pre>
          </div>
        )}
      </div>
    </div>
  );
};

export default StudentForm;
