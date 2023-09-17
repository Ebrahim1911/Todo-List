import { useState } from 'react';
import './App.css';
import ToDoForm from './Components/ToDoForm';
import Todo from './Components/Todo';

function App() {
  let [todos,setTodos]=useState([]);
  const [todoToShow,setTodoToshow]=useState("all");
  const [toggleAllComplete,setToggleAllComplete]=useState(true)
  const addTodo=(todo)=>{
    setTodos([todo,...todos])
  }
  const handelDelete=(id)=>{
    setTodos(todos.filter((todo)=>todo.id!==id))
  }
  const updateToDoToShow=(s)=>{
    setTodoToshow(s)
  }
  const toggleComplete=(id)=>{
    setTodos(
      todos.map((todo)=>{
        if(todo.id===id){
          return{
            ...todo,
            complete:!todo.complete
          };
        }else{
          return todo;
        }
      })
    )
  }
  if(todoToShow==="active"){
    todos=todos.filter((todo)=>!todo.complete)
  }else if(todoToShow==="complete"){
    todos=todos.filter((todo)=>todo.complete)
  }
  const removeAllTodosThatAreComplete=()=>{
    setTodos(todos.filter((todo)=>!todo.complete))
  }
  return (
    <div className="container">
     <ToDoForm onSubmit={addTodo}/> 
     {
      todos.map((todo)=>
     <Todo key={todo.id} todo={todo} onDelete={()=>handelDelete(todo.id)} toggleComplete={()=>toggleComplete(todo.id)}/>
      )
     }
     <div className='all-btn'>
      <button className="update-btn btn" onClick={()=> updateToDoToShow("all")}>ALL</button>
      <button className="update-btn btn" onClick={()=> updateToDoToShow("active")}>Active</button>
      <button className="update-btn btn" onClick={()=> updateToDoToShow("complete")}>Complete</button>
     </div>
     {todos.some((todo)=>todo.complete) ? <button className='btn' onClick={removeAllTodosThatAreComplete}>Removes All Complete Todos</button>:null} 
     <button className='btn'onClick={()=>{
      setTodos(todos.map((todo)=>({
        ...todo,
        complete:toggleAllComplete,
      })))
        setToggleAllComplete(!toggleAllComplete)
     }}>Toggle All Complete: {`${toggleAllComplete}`}</button>
    </div>
  );
}

export default App;
