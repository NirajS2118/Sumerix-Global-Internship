import TaskItem from "./TaskItem";

// this component just loops through tasks and renders TaskItem for each
function TaskList({ tasks }) {
  if (tasks.length === 0) {
    return <p className="no-tasks">No tasks added yet</p>;
  }

  return (
    <ul className="task-list">
      {tasks.map((t) => (
        <TaskItem key={t._id} task={t} />
      ))}
    </ul>
  );
}

export default TaskList;
