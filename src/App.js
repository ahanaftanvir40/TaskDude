import { useEffect, useState } from 'react';

import { Header } from './components/Header';
import { AddTask } from './components/AddTask';
import { ShowTask } from './components/ShowTask';
import './App.css';
import { Pomodoro } from './components/Pomodoro';


function App() {
  // we need tp parse while  getting
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("tasks")) || []); //if getitem doesn't exists it will show empty []
  const [eachTask, setEachTask] = useState({})

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks)) //we need to stringify while set 
  }, [tasks])

  return (
    <div className="App">
      <Header />
      <Pomodoro />
      <AddTask tasks={tasks} setTasks={setTasks} eachTask={eachTask} setEachTask={setEachTask} />
      <ShowTask tasks={tasks} setTasks={setTasks} eachTask={eachTask} setEachTask={setEachTask} />
    </div>
  );
}

export default App;
