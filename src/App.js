import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends React.Component {
  render() {
    return(
      <div className="App">
      <header className="">
        <form className="measure center">
          <input className="pa2 input-rest ba bg-transparent hover-bg-black hover-white w-100" type="text" placeholder="Enter Text" />
          <button className="f4 fw6 ph0 mh0" type="submit">add</button>
        </form>
      </header>
      </div>
    )
  }
}


export default App;

