import React, {Component} from "react";

import AppHeader from "../app-header/app-header";
import SearchPanel from "../search-panel/search-panel";
import TodoList from "../todo-list/todo-list";
import ItemStatusFilter from "../item-status-filter/item-status-filter";
import ItemAddForm from "../item-add-form/item-add-form"

import "./app.css"

export default class App extends Component{
    
    maxId = 100;

    state = {
        TodoData: [
            {lable:"Drink Cofe", important: false, id: 1},
            {lable:"Make Awesome React", important: true, id: 2},
            {lable:"Drink Vodka", important: true, id: 3} 
        ]
    }

    deleteItem = (id)=>{
        this.setState(({TodoData})=>{
            const idx = TodoData.findIndex((el)=>el.id ===id)
            
            const newArray = [ ...TodoData.slice(0, idx), ...TodoData.slice(idx+1)];
              return {
                  TodoData: newArray
              }

            })
        }

    addItem = (text) =>{
        const newItem ={
            lable: text,
            important: false,
            id: this.maxId++
        };
        
        this.setState(({TodoData})=>{
        
           
            const newArr = [
               ...TodoData,
               newItem
           ]
           return{
               TodoData: newArr
           }
        })


    }    
    

    render() {
    return(

    <div className="todo-app">
        <AppHeader toDo={1} done={3}/>
      
    <div className="top-panel d-flex">
        <SearchPanel/>
        <ItemStatusFilter/>
    </div>
        
        <TodoList todos = {this.state.TodoData}
            onDeleted = {this.deleteItem}
        />
        <ItemAddForm
        onAddForm = {this.addItem}
        />
    </div>
   )

    }
}

