import React, {useState} from "react"

const TodoForm = ({addTodo}) =>{
  const [value, setValue] = useState('');

const handleSubmit = (e) => {
        e.preventDefault();
        if (value){
          console.warn(value)
          addTodo(value);
          setValue('');
        }

}
return(
<div>
      <form onSubmit={handleSubmit} className="TodoForm">
    <input type="text" value={value} onChange={(e) => setValue(e.target.value)}  placeholder='What is the task today?' />
    <button type="submit" className='todo-btn'>Add Task</button>
  </form>
  
</div>
)
}

export default TodoForm