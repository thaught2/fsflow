// components/TaskForm.tsx
import React, { useState } from 'react';

const TaskForm = () => {
  const [title, setTitle] = useState('');
  const [dueDate, setDueDate] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Submitting:', { title, dueDate });
    // Integration with Supabase will go here later
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Task Title:
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </label>
      <br />
      <label>
        Due Date:
        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />
      </label>
      <br />
      <button type="submit">Create Task</button>
    </form>
  );
};

export default TaskForm;
