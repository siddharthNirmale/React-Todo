import { useState } from 'react';

function AddTask({ onAdd }) {
  const [input, setInput] = useState('');
  const [category, setCategory] = useState('Learn');

  const handleAdd = () => {
    const trimmed = input.trim();
    if (trimmed) {
      onAdd(trimmed, category);
      setInput('');
    }
  };

  return (
    <div className="add-task">
      <div className="task-input-wrapper">
        <input
          type="text"
          className="task-input"
          placeholder="Write a task..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <select
          className="task-type"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="Learn">Learn</option>
          <option value="development">Development</option>
          <option value="personal">Personal</option>
        </select>
      </div>
      <button className="add-button" onClick={handleAdd}>
        Add
      </button>
    </div>
  );
}

export default AddTask;
