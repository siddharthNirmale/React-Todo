import TaskItem from './TaskItem';

function TaskGroup({ type, tasks, onToggle }) {
  return (
    <section className="task-group" data-type={type}>
      <h3 className="section-title">
        {type.charAt(0).toUpperCase() + type.slice(1)}
      </h3>
      <ul className="task-list">
        {tasks.map((task, index) => (
          <TaskItem
            key={index}
            task={task}
            onToggle={() => onToggle(type, index)}
          />
        ))}
      </ul>
    </section>
  );
}

export default TaskGroup;
