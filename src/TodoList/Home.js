import React, { useState } from 'react'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import './Todolist.css'
function Home() {

   let [inputValue, setInput] = useState('')
   let [tasks, setTask] = useState([])
   let [checked , setChecked] = useState([])
   let [Edited , setEdited] = useState(false)


   //State change is asynchronous, i.e., you will always see the change in the next re render. Because state changes happen in batches or in next re render.

   function Handler(e) {
      setInput(e.target.value)
   }

   function SubmitList(e) {
      e.preventDefault()
      // setTask([...tasks, inputValue])
      if(Edited === false){
         setTask([...tasks , inputValue])
      }
      else{
         tasks[Edited] = inputValue
         
      }
      setEdited(false)
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



   function Edit(e,index){
      e.preventDefault()
      setInput(tasks[index])

      console.log(tasks)
      setEdited(index)

   }



   function Check(e,task){
      e.preventDefault()
      setChecked([...checked , task])
   }


   function List() {
      return (
         <ul>
            {
               tasks.map((task, index) => {
                  return (
                     <li key={index} 
                     className={checked.includes(task)?"givenclass" :" "}>
                        {task}
                        <a href='' onClick={(e) => Delete(e, index)} ><DeleteIcon /></a>
                        <a href='' onClick={(e)=>Edit(e,index)} ><EditIcon /></a>
                        <a href='' onClick={(e)=>Check(e,task)} ><CheckBoxIcon /></a>
   
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