"use client";

import { useState } from "react";

export default function TaskForm() {
  const [title, setTitle] = useState("");
  const [assignedTo, setAssignedTo] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const taskData = { title, assigned_to: assignedTo, due_date: dueDate };

    const res = await fetch("/api/create-task", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(taskData),
    });

    if (res.ok) {
      alert("Task created!");
      setTitle("");
      setAssignedTo("");
      setDueDate("");
    } else {
      alert("Error creating task");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4 border rounded">
      <div>
        <label>Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border p-2 w-full"
        />
      </div>
      <div>
        <label>Assigned To (user ID):</label>
        <input
          type="text"
          value={assignedTo}
          onChange={(e) => setAssignedTo(e.target.value)}
          className="border p-2 w-full"
        />
      </div>
      <div>
        <label>Due Date:</label>
        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          className="border p-2 w-full"
        />
      </div>
      <button type="submit" className="bg-blue-600 text-white p-2 rounded">
        Create Task
      </button>
    </form>
  );
}
