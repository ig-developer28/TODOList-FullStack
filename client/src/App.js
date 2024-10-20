import './App.css';
import Header from './Components/Header';
import Login from './Components/login';
import Signup from './Components/signup';
import ToDoForm from './Components/ToDoForm';
import Todos from './Components/Todos';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {useState} from "react";

function App() {
  const [username,setUsername]=useState('');
  return (
    <Router>
      <Routes>
        <Route path="/" element={username!='' ? <> <Header/>
        <ToDoForm Username={username}/>
        <Todos Username={username}/></> : <Login setusername={setUsername}/>} />
        <Route path="/signup" element={<Signup />} />
    </Routes>
    </Router>
  );
}

export default App;
