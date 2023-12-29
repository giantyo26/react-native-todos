const BASE_URL = "https://dummyjson.com/todos";

export interface Todo {
  id?: string;
  todo: string;
  completed: boolean;
  userId: number;
}
export const getTodos = async () => {
  const response = await fetch(BASE_URL);
  return response.json();
};

export const addTodos = async (todo: Todo) => {
  const response = await fetch(BASE_URL, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      todo: todo.todo,
      completed: todo.completed,
      userId: 1,
    }),
  });

  return response.json();
};

export const updateTodos = async (id: number, todo: Todo): Promise<Todo> => {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      todo: todo.todo,
      completed: todo.completed,
      userId: 1,
    }),
  });

  return response.json();
};

export const deleteTodos = async (id: number) => {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
  });
  return response.json();
};
