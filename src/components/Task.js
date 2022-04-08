import React from 'react'

function Task({text}) {
    
  return (
    <div className='todo-item'>
                <div className='check'>
                    <div className='check-mark'>

                    </div>
                </div>
                <div className='todo-text'>
                    {text}
                </div>
            </div>
  )
}

export default Task