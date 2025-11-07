let todos = [];
let currentId = 1;

exports.createTodo = (req, res) => {
  const { task } = req.body;
  if (!task) {
    return res.status(400).json({ error: 'Task is required' });
  }
  const newTodo = { id: currentId++, task, completed: false };
  todos.push(newTodo);
  res.status(201).json(newTodo);
};

exports.getAllTodos = (req, res) => {
  res.json(todos);
};

exports.updateTodo = (req, res) => {
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
};

exports.deleteTodo = (req, res) => {
  const todoIndex = todos.findIndex(t => t.id === parseInt(req.params.id));
  if (todoIndex === -1) {
    return res.status(404).json({ error: 'Todo not found' });
  }

  todos.splice(todoIndex, 1);
  res.status(204).send();
};