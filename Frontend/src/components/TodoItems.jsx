const formatDate = (dateStr) => {
  if (!dateStr) return "";
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};

const TodoItems = ({ todos, onDelete, onToggleTodo }) => {
  return (
    <div className="mt-6 w-full max-w-2xl px-4 flex flex-col gap-3">
      {todos.map((todo) => (
        <div
          key={todo.id}
          className={`flex items-center gap-4 p-4 rounded-2xl shadow-md border transition-colors ${
            todo.completed
              ? "bg-emerald-50 border-emerald-200"
              : "bg-white border-gray-100"
          }`}
        >
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => onToggleTodo(todo.id)}
            className="w-5 h-5 accent-emerald-500 cursor-pointer"
          />
          <p
            className={`flex-1 min-w-0 truncate font-medium ${
              todo.completed ? "line-through text-gray-400" : "text-gray-800"
            }`}
          >
            {todo.task}
          </p>
          <p className="text-sm text-gray-500 whitespace-nowrap">
            {formatDate(todo.date)}
          </p>
          <button className="text-emerald-600 hover:text-emerald-700 font-medium text-sm transition">
            Edit
          </button>
          <button
            className="text-red-500 hover:text-red-600 font-medium text-sm transition"
            onClick={() => onDelete(todo.id)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default TodoItems;