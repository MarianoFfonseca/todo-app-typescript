import { useState, useEffect } from "react";
import ListTodos from "./components/ListTodos";
import Navbar from "./components/Navbar";
import { type Todo as TodoType, type ListOfTodos } from "./types/types.ts";

const App = () => {
  const [todos, setTodos] = useState<ListOfTodos | []>([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    const localTodos = JSON.parse(localStorage.getItem("todos") || "[]");
    setTodos(localTodos);
  }, []);

  useEffect(() => {
    if (todos.length === 0) return;
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  function addTodo(text: string) {
    if (text === "") return alert("Please enter a todo");
    const newTodos: TodoType = {
      id: todos.length + 1,
      title: text,
      completed: false,
    };
    setTodos([...todos, newTodos]);
  }

  function deleteTodo(id: number) {
    const newTodos = todos.filter((todo: TodoType) => todo.id !== id);
    if (newTodos.length === 0) localStorage.removeItem("todos");
    setTodos(newTodos);
  }
  function toggleComplete(id: number) {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }
      return todo;
    });
    setTodos(newTodos);
  }
  function deleteAll() {
    setTodos([]);
  }

  return (
    <div className="grid place-items-center items-start pt-24 px-8">
      <Navbar
        addTodo={addTodo}
        deleteAll={deleteAll}
        setFilter={setFilter}
        filter={filter}
      />
      <ListTodos
        todos={todos}
        toggleComplete={toggleComplete}
        deleteTodo={deleteTodo}
        filter={filter}
      />
      <footer></footer>
    </div>
  );
};

export default App;
