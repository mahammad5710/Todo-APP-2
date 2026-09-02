import AppName from "./components/AppName";
import TodoForm from "./components/TodoForm";

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-50">
      <AppName />
      <TodoForm />
    </div>
  );
}

export default App;