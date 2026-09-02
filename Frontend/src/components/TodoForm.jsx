import { useRef } from "react";

const TodoForm = () => {
  const taskInput = useRef();
  const dateInput = useRef();

  const handleButtonClick = (event) => {
    event.preventDefault();
    const task = taskInput.current.value;
    const date = dateInput.current.value;
    taskInput.current.value = "";
    dateInput.current.value = "";
    console.log({ task, date });
  };

  return (
    <div className="mt-10 w-full max-w-2xl px-4">
      <form
        onSubmit={handleButtonClick}
        className="flex flex-row items-center gap-3 bg-white p-4 rounded-2xl shadow-md border border-gray-100"
      >
        <input
          type="text"
          placeholder="Add Task"
          ref={taskInput}
          className="flex-1 min-w-0 px-4 py-2 rounded-lg border border-gray-200 text-gray-700 focus:outline-none focus:ring-2 focus:ring-emerald-400"
        />
        <input
          type="date"
          ref={dateInput}
          className="px-4 py-2 rounded-lg border border-gray-200 text-gray-700 focus:outline-none focus:ring-2 focus:ring-emerald-400"
        />
        <button className="bg-gradient-to-r from-emerald-500 to-green-600 text-white font-semibold px-5 py-2 rounded-lg hover:opacity-90 transition whitespace-nowrap">
          Add Task
        </button>
      </form>
    </div>
  );
};

export default TodoForm;