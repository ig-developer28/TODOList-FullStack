import {useRef} from "react";
import {useNavigate} from "react-router-dom"
import axios from "axios"
export default function Signup(){
    let username=useRef('')
    let password=useRef('')
    const navigate=useNavigate()
    async function handleSubmit(event){
        event.preventDefault();
        const data={
            name:username.current.value,
            password:password.current.value
        }
        try{
        const response=await axios.post("http://localhost:8000/signup",data)
        if(response.status==200){
            navigate("/")
        }
        else{
            console.log("there was an error in submission.")
        }
        username.current.value=''
        password.current.value=''
    }
    catch(err){
        console.log("error");
    }
    }
    return(
        <>
        <form action="submit" onSubmit={handleSubmit}>
  <div className="mb-3">
    <label for="exampleInputname" className="form-label">Enter your Name: </label>
    <input type="textbox" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" ref={username}/>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Enter your Password:</label>
    <input type="password" className="form-control" id="exampleInputPassword1" ref={password}/>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
  </form>
        </>
    )
}