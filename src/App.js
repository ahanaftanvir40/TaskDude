import { useState } from 'react';

import { Header } from './components/Header';
import { AddTask } from './components/AddTask';
import { ShowTask } from './components/ShowTask';
import './App.css';


function App() {

  const [tasks, setTasks] = useState([]);

  return (
    <div className="App">
      <Header />
      <AddTask tasks={tasks} setTasks={setTasks} />
      <ShowTask tasks={tasks} setTasks={setTasks} />
    </div>
  );
}

export default App;
