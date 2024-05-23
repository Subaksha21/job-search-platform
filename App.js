// frontend/src/App.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import JobTable from './Components/JobTable';
import AddJob from './Components/AddJob';
import EditJob from './Components/EditJob';
import './App.css';

function App() {
  const [jobs, setJobs] = useState([]);
  const [editingJob, setEditingJob] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    const response = await axios.get('http://localhost:5002/api/jobs');
    setJobs(response.data);
  };

  const addJob = async (job) => {
    const response = await axios.post('http://localhost:5002/api/jobs', job);
    setJobs([...jobs, response.data]);
  };

  const updateJob = async (id, updatedJob) => {
    const response = await axios.put(`http://localhost:5002/api/jobs/${id}`, updatedJob);
    setJobs(jobs.map((job) => (job.id === id ? response.data : job)));
    setEditingJob(null);
  };

  const deleteJob = async (id) => {
    await axios.delete(`http://localhost:5002/api/jobs/${id}`);
    setJobs(jobs.filter((job) => job.id !== id));
  };

  const filteredJobs = jobs.filter(
    job =>
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      <h1>Job Search Platform</h1>
      <input
        type="text"
        placeholder="Search for jobs"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <AddJob addJob={addJob} />
      {editingJob && <EditJob editingJob={editingJob} updateJob={updateJob} />}
      <JobTable jobs={filteredJobs} setEditingJob={setEditingJob} deleteJob={deleteJob} />
    </div>
  );
}

export default App;
