import { type Status, type Todo, type UpdateTodo } from './types';
const todos: Todo[] = [
  {
    id: 0.55435204890881,
    title: 'Buy milk',
    status: 'PENDING'
  },
  {
    id: 0.55435204890882,
    title: 'Go to gym',
    status: 'PENDING'
  },
  {
    id: 0.55435204890883,
    title: 'Wake Up Early',
    status: 'PENDING'
  }
];

function addTodo(todoTitle: string) {
  const todo: Todo = { id: Math.random(), title: todoTitle, status: 'PENDING' };
  todos.push(todo);
}

function deleteTodo(todoId: number) {
  const idx = todos.findIndex(todo => todo.id === todoId);
  todos.splice(idx, 1);
}

function updateTodo(todoId: number, newTodo: UpdateTodo) {
  const idx = todos.findIndex(todo => todo.id === todoId);
  const todo = todos[idx]; // HM_0004

  todo.title = newTodo.title || todo.title;
  todo.status = newTodo.status || todo.status;
}

function clearTodo() {
  todos.splice(0, todos.length);
}

function filterTodos(status?: Status) {
  if (!status) return todos;

  const filteredTodos = todos.filter(todo => todo.status === status);
  return filteredTodos;
}

function init() {
  updateTodo(todos[0].id, { status: 'COMPLETED' });
  updateTodo(todos[1].id, { status: 'COMPLETED' });

  console.log(filterTodos());
  console.log(filterTodos('PENDING'));
  console.log(filterTodos('COMPLETED'));
}

init();
