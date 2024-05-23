// frontend/src/components/AddJob.js

import React, { useState } from 'react';

function AddJob({ addJob }) {
  const [job, setJob] = useState({ title: '', company: '', description: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setJob({ ...job, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addJob(job);
    setJob({ title: '', company: '', description: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Job</h2>
      <input name="title" placeholder="Job Title" value={job.title} onChange={handleChange} required />
      <input name="company" placeholder="Company" value={job.company} onChange={handleChange} required />
      <textarea name="description" placeholder="Job Description" value={job.description} onChange={handleChange} required />
      <button type="submit">Add Job</button>
    </form>
  );
}

export default AddJob;
