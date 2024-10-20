import express  from "express";
import { addTodo,getAllTodos,toggleTodoDone,updateTodo,deleteTodo } from "../controller/Controller.js";
import { handleSignup,handlelogin } from "../controller/user.js";
const Routes = express.Router();

Routes.post('/todos', addTodo)
Routes.get('/todos',getAllTodos)
Routes.get('/todos/:id',toggleTodoDone)
Routes.put('/todos/:id',updateTodo)
Routes.delete('/todos/:id',deleteTodo)
Routes.post('/signup',handleSignup);
Routes.post('/login',handlelogin);

export default Routes;