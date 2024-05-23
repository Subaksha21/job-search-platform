// frontend/src/components/Job.js

import React from 'react';

function Job({ job, setEditingJob, deleteJob }) {
  return (
    <div className="job">
      <h3>{job.title}</h3>
      <p>{job.company}</p>
      <p>{job.description}</p>
      <button onClick={() => setEditingJob(job)}>Edit</button>
      <button onClick={() => deleteJob(job.id)}>Delete</button>
    </div>
  );
}

export default Job;
