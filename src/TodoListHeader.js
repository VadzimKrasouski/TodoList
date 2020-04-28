import React from 'react';

class TodoListHeader extends React.Component {

    state = {
        error: false,
        title: "",
    }


   // newTaskTitleRef = React.createRef();

    onAddTaskClick = () => {
        // let newTask = this.newTaskTitleRef.current.value;
        let newTask = this.state.title.trim();
        // this.newTaskTitleRef.current.value = '';
        if (newTask === "") {
            this.setState({error: true});
        } else {
            this.props.addTask(newTask);
            this.setState({error: false,
            title: '',
            });
        }

    }

    onTitleChanged = (e) => {
        this.setState({error: false,
        title: e.currentTarget.value
        });
    }

    onKeyPress = (e) => {
        if(e.key === 'Enter') {
            this.onAddTaskClick();
        }
    }

    render = () => {
        let inputError = this.state.error ? "error" : "";
        return (
            <div className="todoList-header">
                <h3 className="todoList-header__title">What to Learn</h3>
                <div className="todoList-newTaskForm">
                    <input onKeyPress={this.onKeyPress}
                           className={inputError}
                           //ref={this.newTaskTitleRef}
                           onChange={this.onTitleChanged}
                           type="text" placeholder="New task name"
                           value={this.state.title}/>
                    <button onClick={this.onAddTaskClick}>Add</button>
                </div>
            </div>
        );
    }
}

export default TodoListHeader;

