interface Todo {
  name?: string;
  isCompleted?: boolean;
  description?: string;
}

function renderTodo(todo: Partial<Todo> = {}) {
  if (todo.name) console.log('name = ', todo.name);
  if (todo.isCompleted) console.log('isCompleted = ', todo.isCompleted);
  if (todo.description) console.log('description = ', todo.description);
}

renderTodo({ name: 'todo name' });
