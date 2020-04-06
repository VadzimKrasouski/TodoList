import React from 'react';
import TodoListTask from "./TodoListTask";

class TodoListTasks extends React.Component {
//     let data = {title:"jQuery", is Done: false}
// newTask.render();
// let newTask = new TodoListTask(data)
    render = () => {
        let tasksElements = this.props.tasks.map(t => {
            return (<TodoListTask title = {t.title} isDone = {t.isDone} priority = {t.priority}/>
            )
        });

        return (
            <div className="todoList-tasks">
                {tasksElements}
                {/*<TodoListTask title = {this.props.tasks[0].title} isDone = {this.props.tasks[0].isDone}/>*/}
                {/*<TodoListTask title = {this.props.tasks[1].title} isDone = {this.props.tasks[1].isDone}/>*/}
                {/*<TodoListTask title = {this.props.tasks[2].title} isDone = {this.props.tasks[2].isDone}/>*/}
                {/*<TodoListTask title = {this.props.tasks[3].title} isDone = {this.props.tasks[3].isDone}/>*/}
            </div>
        );
    }
}

export default TodoListTasks;

