// IMPORT DEPENDENCIES
const express = require('express');
// USE DEPENDENCIES
const server = express();
server.listen(3000);
server.use(express.json());

// DATA PROJECTS
const projects = [];

// MIDDLEWARES GLOBAL
server.use((req, res, next) => {
  console.count("Requisições");
  return next();
});

// LOCAL  MIDDLEWARES
function checkProjectExist(req, res, next){
  const { id } = req.params;
  const project = projects.find(element => element.id == id);
  if ( !project ) {
    res.status(404).send("Projeto não encontrado.");
  }
  return next();
};

// READ Projects
server.get('/projects', (req, res) => {
  return res.json(projects);
});

// CREATE a Project
server.post('/projects',  (req, res) => {
  const { id, title } = req.body;
  // SINGLE PROJECT
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
server.put('/projects/:id', checkProjectExist,  (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  // O método find() retorna o valor do primeiro elemento do array que satisfizer a função de teste provida.
  const project = projects.find(element => element.id == id);
  // ATUALIZANDO O TÍTULO DO PROJETO
  project.title = title;
  return res.json(project);
});

// DELETE the project
server.delete('/projects/:id', checkProjectExist, (req, res) => {
  const { id } = req.params;
  // O método find() retorna o valor do primeiro elemento do array que satisfizer a função de teste provida.
  const project = projects.find(element => element.id == id);
  projects.splice(project, 1);
  return res.status(200).send("Projeto deletado");
});

// CREATE project's tasks
server.post('/projects/:id/tasks', checkProjectExist, (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  const project = projects.find(element => element.id == id);
  // THE TITLE INSIDE THE BODY IS THE TASK'S NAME
  project.task.push(title);
  return res.json(project);
});