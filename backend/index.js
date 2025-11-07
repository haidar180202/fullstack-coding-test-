const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

let todos = [];
let currentId = 1;

// POST /todos → create a new todo
app.post('/todos', (req, res) => {
  const { task } = req.body;
  if (!task) {
    return res.status(400).json({ error: 'Task is required' });
  }
  const newTodo = { id: currentId++, task, completed: false };
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

// GET /todos → list all todos
app.get('/todos', (req, res) => {
  res.json(todos);
});

// PATCH /todos/:id → update specific fields
app.patch('/todos/:id', (req, res) => {
  const todo = todos.find(t => t.id === parseInt(req.params.id));
  if (!todo) {
    return res.status(404).json({ error: 'Todo not found' });
  }

  const { task, completed } = req.body;
  if (task !== undefined) {
    todo.task = task;
  }
  if (completed !== undefined) {
    todo.completed = completed;
  }

  res.json(todo);
});

// DELETE /todos/:id → delete a todo
app.delete('/todos/:id', (req, res) => {
  const todoIndex = todos.findIndex(t => t.id === parseInt(req.params.id));
  if (todoIndex === -1) {
    return res.status(404).json({ error: 'Todo not found' });
  }

  todos.splice(todoIndex, 1);
  res.status(204).send();
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});