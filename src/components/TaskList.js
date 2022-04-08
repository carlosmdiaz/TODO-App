import React from 'react'
import FilterControl from './FilterControl'
import Task from './Task'

function TaskList({tasks, setTasks, filterStatus, setFilterStatus, filterTasks, setFilterTasks}) {
    
    const clearCompleted = () => {
        setTasks(tasks.filter((task) => !task.status));
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
                    {`${tasks.length} items left`}
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