import React, { Component }  from 'react';
import './App.css';
import ListItems from "./ListItems";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import Logo from "./Components/Logo/Logo";
library.add(faTrash);   



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items:[],
      currentItem:{
        text: '',
        key: ''
      }
    }

  this.handleInput = this.handleInput.bind(this);
  this.addItem = this.addItem.bind(this);
  this.deleteItem = this.deleteItem.bind(this);
  this.setUpdate = this.setUpdate.bind(this);
}

addItem(e) {
    e.preventDefault();
    const newItem = this.state.currentItem;
    if(newItem.text !=="") {
      const items = [ ...this.state.items, newItem];
      this.setState({
        items: items,
        currentItem:{
          text: "",
          key: ""
        }
      })
    }
  }

  handleInput(e) {
    this.setState({
      currentItem: {
        text: e.target.value,
        key: Date.now()
      }
    })
  }

  deleteItem(key){
    const filteredItems = this.state.items.filter(item => 
      item.key!==key);
      this.setState({
        items: filteredItems
      })
  }

  setUpdate(text, key) {
    console.log("items: "+this.state.items);
    const items = this.state.items;
    items.map(item =>{
      if(item.key===key){
        console.log(item.key +" "+key);
        item.text=text;
      }
    })
    this.setState({
      items: items
    })
  }

  render() {
    return(
      <div style={{display: "flex"}}>
        <Logo />
      <div className="App">
      <header>
      <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-1 shadow-5 center">
        <main className="pa4 black-80">
        <form id="to-do-form" onSubmit={this.addItem}>
          <input  type="text" placeholder="Enter Text"
          value={this.state.currentItem.text}
          onChange={this.handleInput}
           />
          <button  type="submit">Add</button>
        </form>
        </main>
        </article>
      </header>
      <ListItems items={this.state.items} deleteItem = {this.deleteItem} setUpdate = {this.setUpdate}></ListItems>
      </div>
      </div>
    )
  }
}


export default App;

