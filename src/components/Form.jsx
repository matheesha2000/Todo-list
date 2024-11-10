import React, { useState } from 'react'

const Form =({createTodo}) =>{
    const [value, setValue] = useState("")

    const handleSubmit = e => {
      e.preventDefault()
      createTodo(value);
      setValue("")
    }

  return (
    <form className=' mb-4 font-primary w-full ' onSubmit ={handleSubmit}>
        <input type="text" className='outline-none bg-transparent border border-gray-500 p-5 w-[300px] 
         text-white mb-8 rounded placeholder:text-gray-300' placeholder='What task do you have today?' />
         <button className='bg-gray-800 border-none p-5 text-white cursor-pointer rounded ml-2 btn:hover:bg-gray-700 '>Add Task</button>

</form>

  )
}

export default Form
