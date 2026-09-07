import { useRef } from "react";
const formatDate = (dateStr) => {
  if (!dateStr) return "";
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};

const TodoItems = ({
  todos,
  onDelete,
  onToggleTodo,
  editingTodoId,
  onEdit,
  onCancelEditing,
  onSaveChanges,
}) => {
  const editedTask = useRef();
  const editedDate = useRef();
  const handleEditing = (event) => {
    event.preventDefault();
    onSaveChanges(editedTask.current.value,editedDate.current.value,editingTodoId);
    onCancelEditing();
  };
  return (
    <div className="mt-6 w-full max-w-2xl px-4 flex flex-col gap-3">
      {todos.map((todo) => {
        const isEditing = todo.id === editingTodoId;

        return isEditing ? (
          <form key={todo.id} onSubmit={handleEditing}>
            <div
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
              <input
                type="text"
                defaultValue={todo.task}
                ref={editedTask}
                className="flex-1 min-w-0 font-medium text-gray-800 border-b border-emerald-300 focus:outline-none"
                autoFocus
              />
              <input
                type="date"
                defaultValue={todo.date}
                ref={editedDate}
                className="px-4 py-2 rounded-lg border border-gray-200 text-gray-700 focus:outline-none focus:ring-2 focus:ring-emerald-400"
              />
              <button className="text-emerald-600 hover:text-emerald-700 font-medium text-sm transition">
                Save
              </button>
              <button
                type="button"
                className="text-red-500 hover:text-red-600 font-medium text-sm transition"
                onClick={() => onCancelEditing(null)}
              >
                Cancel
              </button>
            </div>
          </form>
        ) : (
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
            <button
              className="text-emerald-600 hover:text-emerald-700 font-medium text-sm transition"
              onClick={() => onEdit(todo.id)}
            >
              Edit
            </button>
            <button
              className="text-red-500 hover:text-red-600 font-medium text-sm transition"
              onClick={() => onDelete(todo.id)}
            >
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default TodoItems;