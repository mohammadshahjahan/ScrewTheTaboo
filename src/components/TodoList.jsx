import React, { Component } from "react";
import TodoItems from "./TodoItems";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = { items: [] };
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }
  addItem(e) {
    if (this._inputElement.value !== "") {
      var newItem = {
        text: this._inputElement.value,
        key: Date.now(),
      };

      this.setState((prevState) => {
        return {
          items: prevState.items.concat(newItem),
        };
      });

      this._inputElement.value = "";
    }
    console.log(this.state.items);
    e.preventDefault();
  }
  deleteItem(key) {
    var filteredItems = this.state.items.filter(function (item) {
      return item.key !== key;
    });

    this.setState({
      items: filteredItems,
    });
  }
  render() {
    return (
      <div className="p-20 bg-black">
        <div className=" className='flex md:flex-row flex-col  items-center justify-between  bg-red-600 p-20 h-fit  m-2 rounded-2xl shadow-red-500 shadow-xl  border-black outline'" >
          <form onSubmit={this.addItem } className="flex justify-around">
            <input
              ref={(a) => (this._inputElement = a)}
              placeholder="What's on your mind?" className="rounded-xl w-full mr-5 p-2"
            ></input>
            <button type="submit" className="bg-black rounded-lg text-white p-3">ADD</button>
          </form>
          <TodoItems entries={this.state.items} delete={this.deleteItem} />
        </div>
      </div>
    );
  }
}

export default TodoList;
