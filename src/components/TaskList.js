import React from 'react'
import Task from './Task'

function TaskList({tasks, setTasks}) {
    
  return (
    <div className='todo-items-wrapper'>
        <div className='todo-items'>
            {/* PUT TODO COMPONENTS HERE */}
            {tasks.map((task) => {
                return <Task text = {task.text}/>
            })}
            {/*CAN BE ITS OWN COMPONENT */}
            <div className='todo-items-info'>
                <div className='items-left'>
                    {`${tasks.length} items left`}
                </div>
                <div className='items-statuses'>
                    <span>All</span>
                    <span>Active</span>
                    <span>Complete</span>

                </div>
                <div className='items-clear'>
                    <span>Clear Completed</span>
                </div>
            </div>
        </div>
    <div>

        </div>
    </div>
  )
}

export default TaskList