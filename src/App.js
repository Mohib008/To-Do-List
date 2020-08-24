import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items:[],
      currentItem:{
        text: "",
        key: ""
      }
    }
  }

  handleInput(input) {
    this.setState({
      currentItem:{
        text: input.target.value,
        key: Date.now()
      }
    })
  }

  addItem(input) {
    input.preventDefault();
  }
  render() {
    return(
      <div className="App">
      <header>
        <form id="to-do-form" onSubmit={this.addItem}>
          <input  type="text" placeholder="Enter Text"
          value={this.state.currentItem.text}
          onChange={this.handleInput}
           />
          <button  type="submit">Add</button>
        </form>
      </header>
      </div>
    )
  }
}


export default App;

