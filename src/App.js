import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Listitem from './listitem';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

library.add(faTrash);

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      item:[],
      currentitem:{
        text:'',
        key:''
      }
    }
    this.handleChange = this.handleChange.bind(this);
    this.additem=this.additem.bind(this);
    this.deleteitem = this.deleteitem.bind(this);
    this.setUpdate = this.setUpdate.bind(this);
  }
  handleChange(e){
    console.log('Error Log', { text: e.target.value, key: Date.now()});
    this.setState({
      currentitem:{
        text: e.target.value,
        key:Date.now()
      }
    })
  }
  additem(e){
      e.preventDefault();
      const newitem=this.state.currentitem;
    console.log(newitem.text);
      if(newitem.text!==""){
        const newitems=[...this.state.item, newitem];
        console.log(newitems);
        this.setState({
          item:newitems,
          currentitem:{
            text:'',
            key:''
          }
        })

      }
  }
  deleteitem(key){
    const filtereditems=this.state.item.filter(items => 
      items.key!==key);
      this.setState({
        item:filtereditems
      })
  }
  setUpdate(text,key){
    const items=this.state.item;
    items.map(item =>{
      if(item.key===key){
        item.text=text;
      }
      this.setState({
        item:items
      })

    })


  }
  render() {
    return (
      
          <div className="App">
            <header>
              <form id="to-do-form" onSubmit={this.additem}>
                <input type="text" placeholder='enter text' 
                value={this.state.currentitem.text}
                  onChange={this.handleChange} />
                <button type='submit'>Add</button>
              </form>
            </header>
            <Listitem items={this.state.item}
            deleteitem = {this.deleteitem}
          setUpdate={this.setUpdate}></Listitem>
          
      </div>
    );
  }
}

export default App;

