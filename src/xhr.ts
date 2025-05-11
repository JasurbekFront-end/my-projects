interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

function getTodo() {
  const xhr = new XMLHttpRequest();

  console.log(xhr.readyState);
  xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos', true);
  console.log(xhr.readyState);
  xhr.send();

  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4) {
      const todo = JSON.parse(xhr.responseText) as Todo;
      console.log(todo);
    }
  };
}

getTodo();
