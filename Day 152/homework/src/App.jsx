import React, {useEffect, useState} from 'react'

export default function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(saved);
  }, []);

  function addTask() {
    const newT = {name: "task2", content: 'lick toes'};
    const total = [...tasks, newT];
    setTasks(total);
    localStorage.setItem('tasks', JSON.stringify(total));
    alert('done');
  }

  return (
    <>
      <h1>Simple To-Do List</h1>
      <button onClick={addTask}>Add Task</button>

      <ul>
        {tasks.map((t, i) => (
          <li key={i}>{t.name} : {t.content}</li>
        ))}
      </ul>
    </>
  )
}