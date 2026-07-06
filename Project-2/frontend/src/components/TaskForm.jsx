import { useState } from "react";

// this component just has the input box and the add button
function TaskForm({ onTaskAdded }) {
  const [task, setTask] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (task.trim() === "") {
      alert("Please enter a task");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ task: task }),
      });

      const data = await res.json();
      console.log(data.message);

      setTask(""); // clear input after adding
      onTaskAdded(); // tell parent to refresh the list
    } catch (err) {
      console.log(err);
      alert("Something went wrong while adding task");
    }
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter a task..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button type="submit">Add Task</button>
    </form>
  );
}

export default TaskForm;
