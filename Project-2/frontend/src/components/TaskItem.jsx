// simple component to show one task in the list
function TaskItem({ task }) {
  return (
    <li className="task-item">
      <span>{task.task}</span>
    </li>
  );
}

export default TaskItem;
