import { useState } from "react"
import { addNewTodo } from "../Redux/actions"
import { useDispatch } from "react-redux"

// Redux is a databse for frontend 

const ToDoForm = ({Username}) => {

    const dispatch = useDispatch();

    // we are using state to store the value of input field  

    const[text,setText] = useState("")

    // we use onformsubmit to handle page refresh 

    const onFormSubmit = (e) =>{
        e.preventDefault();
        dispatch(addNewTodo({text,Username}))
        setText("")
    }

    // we used onInputChange to find out the value written inn input field 

    const onInputChange = (e) => {
        // console.log(e.target.value)
        setText(e.target.value)
    }


    return(
        <form action="submit" className="form" onSubmit={onFormSubmit}>
            <input type="text" placeholder="Enter your todo...." className="input" onChange={onInputChange} value={text}/>
            <button type="submit" value="submit" className="btn btn-primary" > Submit </button>
        </form>
    )
}

export default ToDoForm;
