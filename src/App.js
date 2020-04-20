import React from 'react';
import './App.css';
import TodoListHeader from "./TodoListHeader";
import TodoListFooter from "./TodoListFooter";
import TodoListTasks from "./TodoListTasks";

class App extends React.Component {

    state = {
        tasks: [
            {title :"CSS", isDone:true, priority: "low"},
            {title :"JQuery", isDone:false, priority: "high"},
            {title :"JavaScript", isDone:true, priority: "medium"},
            {title :"HTML", isDone:false, priority: "low"}
        ],

        filterValue: "All"
    };

    addTask = (newTitle) => {
        let newTask = {
            title: newTitle,
            isDone: false,
            priority: 'low'
        };
        let newTasks = [newTask, ...this.state.tasks];
        this.setState( {tasks: newTasks});
    }

    changeFilter = (newFilterValue) => {
        this.setState({filterValue: newFilterValue});
    }

    changeStatus = (task, isDone) => {
        let newTask = this.state.tasks.map( t => {
            if (t === task) {
                return {...t, isDone: isDone}
            }
        return t;
    })
        this.setState({tasks: newTask})
    }

    render = () => {
        return (
            <div className="App">
                <div className="todoList">
                    <TodoListHeader addTask={this.addTask}/>
                    <TodoListTasks tasks = {this.state.tasks.filter(t => {
                        switch (this.state.filterValue) {
                            case 'Active':
                                return t.isDone === false;
                            case 'Completed':
                                return t.isDone === true;
                            default:
                                return true;
                        }
                    })}
                    changeStatus={this.changeStatus}/>
                    <TodoListFooter filterValue = {this.state.filterValue}
                                    changeFilter = {this.changeFilter}/>
                </div>
            </div>
        );
    }
}

export default App;

