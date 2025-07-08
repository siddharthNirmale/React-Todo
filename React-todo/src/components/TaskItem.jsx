function TaskItem({ task, onToggle }) {
  return (
    <li className="task-item">
      <label className="task-label">
        <input
          type="checkbox"
          className="input"
          checked={task.completed}
          onChange={onToggle}
        />
        <span className="custom-checkbox"></span>
        <span className={`task-text ${task.completed ? 'completed' : ''}`}>
          {task.text}
        </span>
      </label>
    </li>
  );
}

export default TaskItem;
