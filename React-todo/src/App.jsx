import { useState } from 'react';
import './App.css';
import TaskGroup from './components/TaskGroup';
import AddTask from './components/AddTask';

function App() {
  const [tasks, setTasks] = useState({
    Learn: [],
    development: [],
    personal: [],
  });

  const handleAddTask = (text, category) => {
    const newTask = { text, completed: false };
    setTasks((prev) => ({
      ...prev,
      [category]: [...prev[category], newTask],
    }));
  };

  const handleToggle = (section, index) => {
    const updated = [...tasks[section]];
    updated[index].completed = !updated[index].completed;
    setTasks((prev) => ({
      ...prev,
      [section]: updated,
    }));
  };

  return (
    <div className="container">
      <h1 className="main-title">TO-DO LIST</h1>
      {['Learn', 'development', 'personal'].map((type) => (
        <TaskGroup
          key={type}
          type={type}
          tasks={tasks[type]}
          onToggle={handleToggle}
        />
      ))}
      <AddTask onAdd={handleAddTask} />
    </div>
  );
}

export default App;
