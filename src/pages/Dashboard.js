import React from 'react';
import TaskInput from '../components/TaskInput';
import TaskList from '../components/TaskList';
import { useState, useEffect } from 'react';
import { onSnapshot, doc } from 'firebase/firestore';
import db, { auth } from '../utils/firebase';
import { signOut } from 'firebase/auth';

const data = [];

  

function Dashboard() {

const [tasks, setTasks] = useState(data);
  
const [filterStatus, setFilterStatus] = useState("all");

const [filterTasks, setFilterTasks] = useState(tasks);

const [user, setUser] = useState({});

const logout = async () => {
  await signOut(auth);
  window.location = "/";
}

// useEffect(() => {
//     const unsub = onSnapshot(collection(db, "tasks"), (snapshot) => {
//      let todos = snapshot.docs.map((doc) => ({...doc.data(), id: doc.id}));
//      const handleFilter = () => {
//         if (filterStatus === "active") {
//           return setFilterTasks(todos.filter((task) => !task.status));
//         } else if (filterStatus == "completed") {
//           return setFilterTasks(todos.filter((task) => task.status));
//         } else {
//           return setFilterTasks(todos);
//         }
//       }
//       handleFilter();
//     });
//     return unsub;
//   }, [tasks, filterStatus]);

useEffect(() => {
  auth.onAuthStateChanged((currentUser) => {
    if (currentUser.uid) {
      setUser(currentUser.uid);
    } else {
      console.log("Please sign in!!");
    }
  })
  // snapshot.data().tasks.map((task, id) => ({...task, id: id}))
  const unsub = onSnapshot(doc(db, "users", `${user}`), (snapshot) => {
    console.log(snapshot.data())
    let todos = snapshot.data().tasks.map((task, id) => ({...task, id: id}));
    const handleFilter = () => {
      if (filterStatus === "active") {
        return setFilterTasks(todos.filter((task) => !task.status));
      } else if (filterStatus == "completed") {
        return setFilterTasks(todos.filter((task) => task.status));
      } else {
        return setFilterTasks(todos);
      }
    }
    handleFilter(todos);
  });
  return unsub;
}, [user, tasks,filterStatus]);

  return (
    <div className='Dashboard'>
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
                setTasks={setTasks}
                filterTasks={filterTasks}
                setFilterTasks={setFilterTasks}
                userId = {user}
            />
            <TaskList 
                tasks={tasks} 
                setTasks={setTasks} 
                filterStatus={filterStatus} 
                setFilterStatus={setFilterStatus}
                filterTasks={filterTasks}
                setFilterTasks={setFilterTasks}
                userId = {user}
            />
        </div>
        <h3 className='logout' onClick={logout}>Logout</h3>
    </div>
  )
}

export default Dashboard