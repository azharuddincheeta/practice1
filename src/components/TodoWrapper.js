import { useState } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";

function TodoWrapper(){
   const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
        setTodos([...todos, {task: todo, completed: false}]);
  }
//   console.log(todos)
return(
<div>
    <h1>Todo List</h1>
     <TodoForm addTodo={addTodo} />
    {todos.map((todo)=> <Todo task={todo}/> )}
      
   
</div>
)

}

export default TodoWrapper;