import React from 'react';
import './App.css';
import TodoListHeader from "./TodoListHeader";
import TodoListFooter from "./TodoListFooter";
import TodoListTasks from "./TodoListTasks";

class App extends React.Component {

    newTaskTitleRef = React.createRef();

    state = {
        tasks: [
            {title :"CSS", isDone:true, priority: "low"},
            {title :"JQuery", isDone:false, priority: "high"},
            {title :"JavaScript", isDone:true, priority: "medium"},
            {title :"HTML", isDone:false, priority: "low"}
        ],

        filterValue: "Completed"
    };

    onAddTaskClick = () => {
        let newText = this.newTaskTitleRef.current.value;
        let newTask = {
            title: newText,
            isDone: false,
            priority: 'low'
        };
        let newTasks = [newTask, ...this.state.tasks];
        this.setState( {tasks: newTasks});
        this.newTaskTitleRef.current.value = "";
    }

    render = () => {
        return (
            <div className="App">
                <div className="todoList">
                    <div className="todoList-header">
                        <h3 className="todoList-header__title">What to Learn</h3>
                        <div className="todoList-newTaskForm">
                            <input ref={this.newTaskTitleRef} type="text" placeholder="New task name"/>
                            <button onClick={this.onAddTaskClick}>Add</button>
                        </div>
                    </div>
                    {/*<TodoListHeader />*/}
                    <TodoListTasks tasks = {this.state.tasks}/>
                    <TodoListFooter filterValue = {this.state.filterValue}/>
                </div>
            </div>
        );
    }
}

export default App;

