import React, { useState } from 'react'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

function Home() {

   let [inputValue, setInput] = useState('')
   let [tasks, setTask] = useState([])
   let [checked , setChecked] = useState([])


   //State change is asynchronous, i.e., you will always see the change in the next re render. Because state changes happen in batches or in next re render.

   function Handler(e) {
      setInput(e.target.value)
   }

   function SubmitList(e) {
      e.preventDefault()
      setTask([...tasks, inputValue])
      setInput('')
   }


   function Delete(e, index){
      e.preventDefault()
      setTask(
         tasks.filter((tab,id)=>{
           return(
             index !== id
             )
         })
      ) 
   }



   function Edit(e){
      e.preventDefault()

   }



   function Check(e,index){
      e.preventDefault()
      setChecked([...checked , inputValue])
     

   }

   function List() {
      return (
         <ul>
            {
               tasks.map((task, index) => {
                  return (
                     <li key={index}>
                        {task}
                        <a href='' onClick={(e) => Delete(e, index)} ><DeleteIcon /></a>
                        <a href='' onClick={(e)=>Edit(e,index)} ><EditIcon /></a>
                        <a href='' onClick={(e)=>Check(e,index)} ><CheckBoxIcon /></a>
                     </li>
                  )
               })
            }

         </ul>
      )

   }

   return (
      <div className='Todo'>
         <h1>To Do List</h1>
         <form onSubmit={SubmitList}>
            <input
               type='text'
               placeholder='Enter the task'
               value={inputValue}
               onChange={Handler}
            />
            <button type='submit'>
               Add Task
            </button>
         </form>
         <List />
      </div>
   )
}

export default Home