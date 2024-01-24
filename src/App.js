import { useState } from 'react';

import { Header } from './components/Header';
import { AddTask } from './components/AddTask';
import { ShowTask } from './components/ShowTask';
import './App.css';


function App() {

  const [tasks, setTasks] = useState([]);
  const [eachTask, setEachTask] = useState({})

  return (
    <div className="App">
      <Header />
      <AddTask tasks={tasks} setTasks={setTasks} eachTask={eachTask} setEachTask={setEachTask} />
      <ShowTask tasks={tasks} setTasks={setTasks} eachTask={eachTask} setEachTask={setEachTask} />
    </div>
  );
}

export default App;
