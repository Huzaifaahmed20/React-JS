import React, { Component } from 'react';
import TodoItems from './TodoItems';
import './App.css';

class Todo extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      items: []
    }
    this.additem = this.additem.bind(this);
  }
  additem(e) {
    var itemArray = this.state.items;
    if (this.inputElem.value !== "") {
      itemArray.unshift(
        {
          text: this.inputElem.value,
          key: Date.now()
        }
      );
      this.setState({
        items: itemArray,
      });
      this.inputElem.value = "";
    }
    console.log(itemArray)
    e.preventDefault();
  }
  render() {
    return (
      <div className="container-fluid">
      <div className="row">
        <div className="col-md-4"></div>
        <div className="col-md-4">
          <div className="input-group">
            <form onSubmit={this.additem}>
              <input className="form-control" placeholder="Enter Task ToDo" ref={(a) => this.inputElem = a}></input>
            </form>
            <span className="input-group-btn">
              <button className="btn btn-primary" type="submit">ADD</button>
            </span>
          </div>
        </div>
        <div className="col-md-4"></div>
      </div>
     
        <TodoItems entries={this.state.items} />

      </div>
    );
  }
}

export default Todo;
