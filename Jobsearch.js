import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './jobsearch.css';

const JobSearch = () => {
  const [jobs, setJobs] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const response = await axios.get('http://localhost:5000/jobs');
      setJobs(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleCreateJob = async () => {
    try {
      await axios.post('http://localhost:5000/jobs', { title, description });
      fetchJobs();
      setTitle('');
      setDescription('');
      alert('Job created successfully');
    } catch (error) {
      console.error(error);
      alert('Failed to create job');
    }
  };

  // Other functions for edit, update, and delete

  return (
    <div className="job-search-container">
      {/* Job search JSX */}
    </div>
  );
};

export default JobSearch;
