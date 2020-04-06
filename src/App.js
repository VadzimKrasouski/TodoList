import React from 'react';
import './App.css';
import TodoListHeader from "./TodoListHeader";
import TodoListFooter from "./TodoListFooter";
import TodoListTasks from "./TodoListTasks";

class App extends React.Component {
    tasks =[
        {title :"CSS", isDone:true, priority: "low"},
        {title :"JQuery", isDone:false, priority: "high"},
        {title :"JavaScript", isDone:true, priority: "medium"},
        {title :"HTML", isDone:false, priority: "low"}
    ];

    filterValue = "Completed";
    render = () => {
        return (
            <div className="App">
                <div className="todoList">
                    <TodoListHeader />
                    <TodoListTasks tasks = {this.tasks}/>
                    <TodoListFooter filterValue = {this.filterValue}/>
                </div>
            </div>
        );
    }
}

export default App;

