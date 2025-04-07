import React, { useState } from 'react';

const StudentForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    course: '',
    gender: '',
    studentId: '',
    dob: '',
    gradeLevel: '',
    gpa: '',
    enrollmentStatus: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // You can also send the formData to a server or perform validation here
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
    marginBottom: '5px',
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
            <label htmlFor="firstName" style={labelStyle}>First Name:</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              style={inputStyle}
              required
            />
          </div>

          <div>
            <label htmlFor="lastName" style={labelStyle}>Last Name:</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
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
            <label htmlFor="gradeLevel" style={labelStyle}>Grade Level:</label>
            <select
              id="gradeLevel"
              name="gradeLevel"
              value={formData.gradeLevel}
              onChange={handleChange}
              style={inputStyle}
              required
            >
              <option value="">Select Grade Level</option>
              <option value="Freshman">Freshman</option>
              <option value="Sophomore">Sophomore</option>
              <option value="Junior">Junior</option>
              <option value="Senior">Senior</option>
            </select>
          </div>

          <div>
            <label htmlFor="gpa" style={labelStyle}>GPA (Grade Point Average):</label>
            <input
              type="number"
              id="gpa"
              name="gpa"
              step="0.01"
              min="0"
              max="4"
              value={formData.gpa}
              onChange={handleChange}
              style={inputStyle}
              required
            />
          </div>

          <div>
            <label htmlFor="enrollmentStatus" style={labelStyle}>Enrollment Status:</label>
            <select
              id="enrollmentStatus"
              name="enrollmentStatus"
              value={formData.enrollmentStatus}
              onChange={handleChange}
              style={inputStyle}
              required
            >
              <option value="">Select Enrollment Status</option>
              <option value="Full-Time">Full-Time</option>
              <option value="Part-Time">Part-Time</option>
              <option value="Leave of Absence">Leave of Absence</option>
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
