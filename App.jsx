// src/App.js
import React, { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  const removeTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };



  return (
    <div className="container">

      <h1 className="text-2xl font-bold mb-4">To-Do List</h1>

      <div className="flex mb-4">
        <input type="text" className="input" placeholder="Enter a new task" value={newTask} onChange={(e) => setNewTask(e.target.value)}/>
        <button className="button hover:bg-sky-700" onClick={addTask}>Add Task</button>
      </div>

      <ul>
        {tasks.map((task, index) => (
          <li key={index} className="mb-2 flex items-center">
            <span>{task}</span>
            <button className="ml-2 text-red-500" onClick={() => removeTask(index)}> Remove </button>
          </li>
        ))}
      </ul>

    </div>
  );
}

export default App;
