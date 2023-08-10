import { useState } from "react";

interface Props {
  setFilter: (text: string) => void;
  addTodo: (text: string) => void;
  filter: string;
  deleteAll: () => void;
}
const Navbar: React.FC<Props> = ({ setFilter, addTodo, deleteAll, filter }) => {
  const [text, setText] = useState("");

  const handleSubmitNewTodo = (e: React.FormEvent) => {
    e.preventDefault();
    addTodo(text);
    setText("");
  };

  return (
    <nav className="w-full mb-16 max-w-[600px]">
      <h1 className="text-center font-semibold text-5xl mb-6">
        My Todo App - Typescript
      </h1>
      <form onSubmit={handleSubmitNewTodo} className="flex items-center ">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="w-full rounded-lg border-2 text-lg mr-4 border-gray-300 px-4 py-2 ring-0 text-gray-600 focus:ring-0 focus:outline-none"
          type="text"
          placeholder="Text Todo"
        />
        <button
          type="submit"
          className="text-lg w-full py-2 rounded-lg font-bold border-2 border-gray-300"
        >
          Add todo
        </button>
      </form>
      <div className="flex items-center mt-5">
        <input
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="w-full rounded-lg border-2 text-lg mr-4 border-gray-300 px-4 py-2 ring-0 text-gray-600 focus:ring-0 focus:outline-none"
          type="text"
          placeholder="Filter some results"
        />
        <button
          onClick={() => setFilter("")}
          className="text-2xl font-bold text-red-400"
        >
          x
        </button>
      </div>
      <div className="flex items-center mt-5 ">
        <ul className="flex justify-between [&>li]:w-full [&>li]:border-[1px] [&>li]:py-1 [&>li]:cursor-pointer text-center w-full">
          <li>All</li>
          <li>Done</li>
          <li>Not started</li>
          <li className="text-red-300" onClick={() => deleteAll()}>
            Delete All
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
