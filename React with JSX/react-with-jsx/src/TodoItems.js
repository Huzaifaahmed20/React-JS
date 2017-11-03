import React, { Component } from 'react';

class TodoItems extends Component {
    constructor(props, context) {
        super(props, context)
        this.createTask = this.createTask.bind(this);

    }
    createTask(item) {
        return <li className="list-group-item" key={item.key}>{item.text}</li>
    }

    render() {
        var todoEntries = this.props.entries;
        var listItem = todoEntries.map(this.createTask)
        return (
            <div className="row">
            <div className="col-md-4"></div>
            <div className="col-md-4">
                <ul className="list-group">
                    {listItem}
                </ul>
            </div>
            <div className="col-md-4"></div>
          </div>
         
        );
    }

}

export default TodoItems;