// frontend/src/components/EditJob.js

import React, { useState, useEffect } from 'react';

function EditJob({ editingJob, updateJob }) {
  const [job, setJob] = useState(editingJob);

  useEffect(() => {
    setJob(editingJob);
  }, [editingJob]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setJob({ ...job, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateJob(job.id, job);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Edit Job</h2>
      <input name="title" placeholder="Job Title" value={job.title} onChange={handleChange} required />
      <input name="company" placeholder="Company" value={job.company} onChange={handleChange} required />
      <textarea name="description" placeholder="Job Description" value={job.description} onChange={handleChange} required />
      <button type="submit">Update Job</button>
    </form>
  );
}

export default EditJob;
