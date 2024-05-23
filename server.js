// backend/server.js

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const PORT = 5002; // Changed port

app.use(cors());
app.use(bodyParser.json());

let jobs = [
  { id: 1, title: 'Software Engineer', company: 'Tech Corp', description: 'Develop and maintain software applications.' },
  { id: 2, title: 'Product Manager', company: 'Business Inc', description: 'Oversee product development from start to finish.' },
  { id: 3, title: 'Data Analyst', company: 'Data Solutions', description: 'Analyze data and generate business insights.' },
  { id: 4, title: 'Graphic Designer', company: 'Creative Agency', description: 'Create visual content for digital platforms.' },
  { id: 5, title: 'Marketing Specialist', company: 'Marketing Experts', description: 'Develop and execute marketing strategies.' }
];
let id = 6; // Start IDs from 6 since we have 5 default jobs

app.get('/api/jobs', (req, res) => {
  res.json(jobs);
});

app.post('/api/jobs', (req, res) => {
  const job = { id: id++, ...req.body };
  jobs.push(job);
  res.json(job);
});

app.put('/api/jobs/:id', (req, res) => {
  const jobId = parseInt(req.params.id);
  const jobIndex = jobs.findIndex((job) => job.id === jobId);
  if (jobIndex >= 0) {
    jobs[jobIndex] = { ...jobs[jobIndex], ...req.body };
    res.json(jobs[jobIndex]);
  } else {
    res.status(404).send('Job not found');
  }
});

app.delete('/api/jobs/:id', (req, res) => {
  const jobId = parseInt(req.params.id);
  jobs = jobs.filter((job) => job.id !== jobId);
  res.status(204).send();
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

