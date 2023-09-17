import {useState} from "react";
import shortid from "shortid";

const ToDoForm = (props) => {
    const [text,setText]=useState("");
    const handelSumbit= (e)=> 
    {e.preventDefault();
        props.onSubmit({
            id:shortid.generate(),
            text:text,
            complete:false,
        })
        setText("")
    }
    
  return (
    <div>
      <form onSubmit={handelSumbit}>
        <input className='input-field' type="text" onChange={(e)=> setText(e.target.value)} value={text}/>
        <button className="btn" onChange={handelSumbit}>Add ToDo</button>
      </form>
    </div>
  )
}

export default ToDoForm
