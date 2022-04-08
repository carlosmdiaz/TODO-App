import React, { useState } from 'react'
import Check from '../images/icon-check.svg';

function Task({task, tasks, setTasks}) {

    const [mutableTAsk, setMutableTask] = useState(task);

    const checked = mutableTAsk.status ? "checked" : "";
    const checkIcon = mutableTAsk.status ? (<img src={Check} alt="Completed"/>) : ("");

    const markCompleted = () => {
        setMutableTask({...mutableTAsk, status: !mutableTAsk.status});

        const updatedTasks = tasks.map((item) => 
        item.id === task.id ? {...item, status: !item.status} : item);

        setTasks(updatedTasks);
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