const express = require('express');
const server = express();
server.listen(3000);
server.use(express.json());

// DATA PROJECTS
const projects = [];

// function checkProjectExist(req, res, next){
//   const { id } = req.body;
//   console.log(id);
//   return next();
// };

// READ Projects
server.get('/projects', (req, res) => {
  return res.json(projects);
});
// CREATE a Project
server.post('/projects',  (req, res) => {
  const { id, title } = req.body;
  // SINGLE PROJECT IN JSON FORMAT
  const project = {
    id : id,
    title : title,
    task : []
  };
  // ADD A SINGLE PROJECT INSIDE A ARRAY PROJECTS
  projects.push(project);
  return res.json(projects);
});

// UPDATE the project's title
server.put('/projects/:id', (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  const project = projects.find(element => element.id == id);
  project.title = title;
  return res.json(project);
});

// DELETE the project
server.delete('/projects/:id', (req, res) => {
  const { id } = req.params;
  const project = projects.find(element => element.id == id);
  projects.splice(project, 1);
  return res.json(projects);
});

// CREATE project's tasks
server.post('/projects/:id/tasks', (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  const project = projects.find(element => element.id == id);
  // THE TITLE INSIDE THE BODY IS THE TASK'S NAME
  project.task.push(title);
  return res.json(project);
});