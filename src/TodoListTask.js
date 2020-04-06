import React from 'react';

class TodoListTask extends React.Component {
    // constructor(attributes)
    //super(attributes)
    //this.props = {}
    //this.props.title = attributes.title
    //this.props.isDone = attributes.true
    render = () => {
        return (
                <div className="todoList-task">
                    <input type="checkbox" checked={this.props.isDone}/>
                    <span>{this.props.title} - {this.props.priority}</span>
                </div>
        );
    }
}

export default TodoListTask;

