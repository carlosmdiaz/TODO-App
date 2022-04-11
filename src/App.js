import React from 'react';
import './App.css';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import { useState, useEffect } from 'react';
import { onSnapshot, collection, doc } from 'firebase/firestore';
import db from './utils/firebase';

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
  
  const [filterStatus, setFilterStatus] = useState("all");

  const [filterTasks, setFilterTasks] = useState(tasks);

  // useEffect(() => {
  //   const handleFilter = () => {
  //     if (filterStatus === "active") {
  //       setFilterTasks(tasks.filter((task) => !task.status));
  //     } else if (filterStatus == "completed") {
  //       setFilterTasks(tasks.filter((task) => task.status));

  //     } else {
  //       setFilterTasks(tasks);
  //     }
  //   }
  //   handleFilter();
  // }, [tasks, filterStatus])

  useEffect(() => {
    const unsub = onSnapshot(collection(db, "tasks"), (snapshot) => {
     let todos = snapshot.docs.map((doc) => ({...doc.data(), id: doc.id}));
     const handleFilter = () => {
        if (filterStatus === "active") {
          return setFilterTasks(todos.filter((task) => !task.status));
        } else if (filterStatus == "completed") {
          return setFilterTasks(todos.filter((task) => task.status));
        } else {
          return setFilterTasks(todos);
        }
      }
      handleFilter();
    });
    return unsub;
  }, [tasks, filterStatus]);

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
        <TaskInput 
        tasks={tasks} 
        setTasks={setTasks}/>
        <TaskList 
        tasks={tasks} 
        setTasks={setTasks} 
        filterStatus={filterStatus} 
        setFilterStatus={setFilterStatus}
        filterTasks={filterTasks}
        setFilterTasks={setFilterTasks}
        />
      </div>
    </div>
  );
}

export default App;
