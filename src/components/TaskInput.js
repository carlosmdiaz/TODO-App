import React, { useState } from 'react';
import  { addDoc, collection, setDoc, doc } from 'firebase/firestore';
import db from '../utils/firebase';

function TaskInput({tasks, setTasks, userId, setUser, filterTasks, setFilterTasks}) {

  const createId = (array) => {
    const ids = array.map((item) => item.id);
    return Math.max(...ids) + 1;
  }

  // Save What I wrote un the input field into a state?
  const [input, setInput] = useState('');
  //When I type a function should run that saves the states of the input
  const handleChange = (e) => {
    setInput(e.target.value)
  }

  // I need a function that runs when I submit
  const handleForm =  async (e) => {
    e.preventDefault();
    // ADD what I put in input to the tasks array
    // ONLY CREATE OBJECT IF THERE IS AN INPUT?
    // Create an object with whatever I wrote in input as the text
    
    if (input) {
      // const newTask = {
      //   id: createId(tasks), 
      //   text: input.trim(), 
      //   status: false,
      // }
      // ADD a new task to the state
      // setTasks([newTask, ...tasks])
      // // Reset Input
      // setInput('');
      // const collectionRef = collection(db, "users");
      // const payload = {
      //   text: input.trim(),
      //   status: false
      // }
      // await addDoc(collectionRef, payload);
      // setInput('');
      const docRef = doc(db, "users", `${userId}`);
      console.log(userId);
      const newTask = {
        text: input.trim(),
        status: false,
      };
      let tasksRef = filterTasks;
      tasksRef.push(newTask);
      const payload = {
        tasks: tasksRef
      }
      setDoc(docRef, payload);
      setInput("");
    }
  }
  return ( 
    <div className='new-todo'>
        <div className='check'>
            <div className='check-mark'>
               
            </div>
        </div>
        <div className='new-todo-input'>
            <form onSubmit={handleForm}>
                <input value={input} onChange={handleChange} type="text" placeholder="Create a new todo..."></input>
            </form>
        </div> 
    </div>
  )
}

export default TaskInput