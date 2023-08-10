import React from "react";
import { type ListOfTodos, type Todo as TodoType } from "../types/types.ts";

interface Props {
  todos: ListOfTodos;
  deleteTodo: (id: number) => void;
  toggleComplete: (id: number) => void;
  filter: string;
}

const ListTodos: React.FC<Props> = ({
  todos,
  deleteTodo,
  toggleComplete,
  filter,
}) => {
  const todosToShow =
    filter === ""
      ? todos
      : todos.filter((todos) =>
          todos.title.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
        );
  return (
    <section className="w-full max-w-[600px]">
      {todosToShow.length === 0 && <p className="text-center">No todos 🙃</p>}
      {todosToShow.map((todo: TodoType) => {
        return (
          <div
            id="todo"
            key={todo.id}
            className="flex w-full items-center justify-between my-4 p-4 border-2 border-gray-300 rounded-lg"
          >
            <button
              onClick={() => toggleComplete(todo.id)}
              className="mr-4 text-2xl"
            >
              {todo.completed ? "🟢" : "🔴"}
            </button>
            <span className="text-lg text-left w-full font-bold">
              {todo.title}
            </span>
            <button
              onClick={() => deleteTodo(todo.id)}
              className=" font-bold text-red-400"
            >
              delete
            </button>
          </div>
        );
      })}
    </section>
  );
};

export default ListTodos;
