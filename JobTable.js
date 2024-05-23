// frontend/src/components/JobTable.js

import React from 'react';

function JobTable({ jobs, setEditingJob, deleteJob }) {
  return (
    <div className='Table'>
      <h2>Job List</h2>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Company</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {jobs.map((job) => (
            <tr key={job.id}>
              <td>{job.title}</td>
              <td>{job.company}</td>
              <td>{job.description}</td>
              <td>
                <button onClick={() => setEditingJob(job)}>Edit</button>
                <button onClick={() => deleteJob(job.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default JobTable;
