import AppName from "./components/AppName";
import TodoForm from "./components/TodoForm";
import TodoItems from "./components/TodoItems"
import { useState } from "react";
function App() {
  const [todos,setTodos]=useState([]);
  const [editingTodoId,setEditingTodoId]=useState(null);
  const addTodo=(task,date)=>{
    const newTodos={
      id:Date.now(),
      task:task,
      date:date,
      completed:false
    };
    setTodos((prevTodos) => [...prevTodos, newTodos]);
  }
  const deleteTodo=(id)=>{
    const updatedTodos=todos.filter((todo)=>todo.id !== id);
    setTodos(updatedTodos);
  }
  const editTodoItems=(newTask,newDate,id)=>{
    setTodos((prevTodos)=>(
      prevTodos.map(todo=>(
        todo.id === id ? {...todo,task:newTask,date:newDate}:todo
      ))
    ))
  }
  const toggleTodo=(id)=>{
    setTodos((prevTodos)=>(
      prevTodos.map(todo=>(
        todo.id === id ? {...todo,completed:!todo.completed}:todo
      ))
    ));
  }
  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-50">
      <AppName />
      <TodoForm onTodo={addTodo}/>
      <TodoItems todos={todos} onDelete={deleteTodo} onToggleTodo={toggleTodo} editingTodoId={editingTodoId} onEdit={setEditingTodoId} onCancelEditing={()=>setEditingTodoId(null)} onSaveChanges={editTodoItems}/>
    </div>
  );
}

export default App;