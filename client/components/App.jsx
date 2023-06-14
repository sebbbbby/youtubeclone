import React, { useEffect, useState } from "react";

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch("/api/tasks")
      .then((res) => res.json())
      .then((tasks) => {
        setTasks(tasks);
      });
  }, []);

  return (
    <main>
      <h1>WELCOME TO FEC</h1>
      {tasks.map((task) => (
        <span className="task" key={task.id}>
          {task.description}
        </span>
      ))}
      <footer>Heyo</footer>
    </main>
  );
};

export default App;
