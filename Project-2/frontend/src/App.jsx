import { useState, useEffect } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);

  // function to get all tasks from backend
  const fetchTasks = async () => {
    try {
      const res = await fetch("http://localhost:5000/tasks");
      const data = await res.json();
      setTasks(data);
    } catch (err) {
      console.log(err);
    }
  };

  // load tasks when the page loads for the first time
  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="app-container">
      <div className="todo-box">
        <h1>To Do List</h1>
        <TaskForm onTaskAdded={fetchTasks} />
        <TaskList tasks={tasks} />
      </div>
    </div>
  );
}

export default App;
