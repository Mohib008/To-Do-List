import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends React.Component {
  render() {
    return(
      <div className="App">
      <header className="">
        <form className="measure center">
          <input className="b pa2 input-rest ba bg-transparent hover-bg-black hover-white w-100" type="text" placeholder="Enter Text" />
          <button className="b pa2 input-rest ba bg-transparent hover-bg-black hover-white" type="submit">Add</button>
        </form>
      </header>
      </div>
    )
  }
}


export default App;

