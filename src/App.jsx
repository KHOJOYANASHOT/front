import UpdateTask from "./tasks/update";
import Registration from "./register/register";
import TaskList from "./tasks/list";
import AddTask from "./tasks/add";
import Task from "./tasks/task";
import Nav from "./navigation/nav";
import {Routes, Route} from "react-router";
import Login from "./login/login";
import React from "react";
import './App.css';

function App() {
    return (
        <div className="App">
            <Nav/>

            <Routes>
                <Route path={"/registration"} element={<Registration/>}/>
                <Route path={"/updateTask/:id"} element={<UpdateTask/>}/>
                <Route path={"/"} element={<Login/>}/>
                <Route path={"/task-list"} element={<TaskList/>}/>
                <Route path={"/add-task"} element={<AddTask/>}/>
                <Route path={"/task/:id"} element={<Task/>}/>
            </Routes>
            
        </div>
    );
}

export default App;
