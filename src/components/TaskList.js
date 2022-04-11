import React from 'react'
import FilterControl from './FilterControl'
import Task from './Task'
import { deleteDoc,doc } from 'firebase/firestore'
import db from '../utils/firebase'

function TaskList({tasks, setTasks, filterStatus, setFilterStatus, filterTasks, setFilterTasks}) {
    
    const clearCompleted = () => {
       // setTasks(tasks.filter((task) => !task.status));
       filterTasks.map(async (item)=> {
        if(item.status === true) {
           await deleteDoc(doc(db,"tasks", item.id))
        }
    })
    }


  return (
    <div className='todo-items-wrapper'>
        <div className='todo-items'>
            {/* PUT TODO COMPONENTS HERE */}
            {filterTasks.map((task) => {
                return <Task 
                        task = {task} 
                        tasks={tasks} 
                        setTasks={setTasks}/>
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