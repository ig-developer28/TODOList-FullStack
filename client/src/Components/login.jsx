import axios from "axios";
import {useRef} from "react";
import {Link} from "react-router-dom"
export default function Login({setusername}){
    const username=useRef('');
    const password=useRef('');
    async function handleSubmit(event){
        event.preventDefault();
        const data={
          name:username.current.value,
          password:password.current.value
        }
        const response=await axios.post("http://localhost:8000/login",data)
        if(response.status==200){
           setusername(username.current.value);
        }
        else{
          console.log("err")
        }
        username.current.value=''
        password.current.value=''
    }
    return(
        <>
        <div>
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
  <Link to="/signup">New User? Signup</Link>
  </div>
        </>
    )
}