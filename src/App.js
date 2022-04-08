import React from 'react';
import './App.css';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import { useState } from 'react';

const data = [
  {id: 1, text: "Finish contacts hw", status: true},
  {id: 2, text: "Study React Hooks", status: false},
  {id: 3, text: "Finish Clever Programmer Challege", status: false},
  {id: 4, text: "Run 1 mile", status: false},
  {id: 5, text: "Finish Errands", status: false},
  {id: 6, text: "Complete Todo App", status: false},
];

function App() {

  const [tasks, setTasks] = useState(data);
  console.log(tasks);

  return (
    <div className="App">
      <div className='container'>
        <div className='header'>
          <div className='title'>
            TODO
          </div>
          <div className='theme'>
            <img src='./images/icon-sun.svg' alt='theme'/>
          </div>
        </div>
        <TaskInput tasks={tasks} setTasks={setTasks}/>
        <TaskList tasks={tasks} setTasks={setTasks}/>
      </div>
    </div>
  );
}

export default App;
