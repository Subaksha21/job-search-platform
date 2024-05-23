// frontend/src/components/JobList.js

import React from 'react';
import Job from './Job';

function JobList({ jobs, setEditingJob, deleteJob }) {
  return (
    <div>
      <h2>Job List</h2>
      {jobs.map((job) => (
        <Job key={job.id} job={job} setEditingJob={setEditingJob} deleteJob={deleteJob} />
      ))}
    </div>
  );
}

export default JobList;
