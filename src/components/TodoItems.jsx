import React, { Component } from "react";

class TodoItems extends Component {
  constructor(props) {
    super(props);
    this.createTasks = this.createTasks.bind(this);
  }

  createTasks(item) {
    return (
      <li key={item.key} className="mb-4">
        <div className="flex items-center p-3 bg-red-900 rounded-lg">
          <span className="text-white font-bold bg-red-500 py-2 px-4 rounded-lg mr-4">
            {item.text}
          </span>
          <button
            onClick={() => this.delete(item.key)}
            className="bg-black text-white py-2 px-4 rounded-lg hover:bg-red-500 transition-colors"
          >
            Delete
          </button>
        </div>
      </li>
    );
  }

  delete(key) {
    this.props.delete(key);
  }

  render() {
    var todoEntries = this.props.entries;
    var listItems = todoEntries.map(this.createTasks);

    return <ul className="m-2">{listItems}</ul>;
  }
}

export default TodoItems;
