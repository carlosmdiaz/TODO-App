import { setDoc, doc } from 'firebase/firestore';
import React, { useState } from 'react'
import Check from '../images/icon-check.svg';
import db from '../utils/firebase';


function Task({task, tasks, setTasks, userId, filterTasks}) {

    const [mutableTAsk, setMutableTask] = useState(task);

    const checked = mutableTAsk.status ? "checked" : "";
    const checkIcon = mutableTAsk.status ? (<img src={Check} alt="Completed"/>) : ("");

    const markCompleted = () => {
        setMutableTask({...mutableTAsk, status: !mutableTAsk.status});

        // const updatedTasks = tasks.map((item) => 
        // item.id === task.id ? { ...item, status: !item.status} : item);

        // setTasks(updatedTasks);
        // USe setDoc for firebase

        // const docRef = doc(db, "users", `${userId}`);
        // const payload = {text: task.text, status: !task.status, id: task.id};
        // setDoc(docRef, payload);
        const docRef = doc(db, "users", userId);
        let arrayRef = filterTasks;
        const index = arrayRef.indexOf(task);
        if(arrayRef[index].status === true) {
            arrayRef[index].status = false;
        } else {
            arrayRef[index].status = true;
        }

        const payload = {
            status: arrayRef
        }
        setDoc(docRef, payload);
    } 
    
  return (
    <div className='todo-item'>
        <div className='check' onClick={markCompleted}>
             <div className={`check-mark ${checked}`}>
                {checkIcon}
            </div>
        </div>
        <div className={`todo-text ${checked}`}>
            {task.text}
        </div>
    </div>
  )
}

export default Task