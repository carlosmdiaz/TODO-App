import React from 'react'
import FilterControl from './FilterControl'
import Task from './Task'
import { deleteDoc, doc, setDoc } from 'firebase/firestore'
import db from '../utils/firebase'

function TaskList({tasks, setTasks, filterStatus, setFilterStatus, filterTasks, setFilterTasks, userId}) {
    
    const clearCompleted = () => {
    //    // setTasks(tasks.filter((task) => !task.status));
    //    filterTasks.map(async (item)=> {
    //     if(item.status === true) {
    //        await deleteDoc(doc(db,"users", item.id))
    //     }
    // })
        const docRef = doc(db, "users", `${userId}`);
        let arrayRef = filterTasks.filter((task) => task === false);
        const payload = {
            tasks: arrayRef
        }
        setDoc(docRef, payload);
    }


  return (
    <div className='todo-items-wrapper'>
        <div className='todo-items'>
            {/* PUT TODO COMPONENTS HERE */}
            {filterTasks.map((task) => {
                return <Task 
                        task = {task} 
                        tasks={tasks} 
                        setTasks={setTasks}
                        userId={userId}
                        filterTasks = {filterTasks}
                        />
            })}
            {/*CAN BE ITS OWN COMPONENT */}
            <div className='todo-items-info'>
                <div className='items-left'>
                    {`${filterTasks.length} items left`}
                </div>
                <FilterControl 
                filterStatus={filterStatus} 
                setFilterStatus={setFilterStatus}
                filterTasks={filterTasks}
                setFilterTasks={setFilterTasks}
                />
                <div className='items-clear'>
                    <span onClick={clearCompleted}>Clear Completed</span>
                </div>
            </div>
        </div>
    <div>

        </div>
    </div>
  )
}

export default TaskList