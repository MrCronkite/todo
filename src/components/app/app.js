import React from "react";

import AppHeader from "../app-header/app-header";
import SearchPanel from "../search-panel/search-panel";
import TodoList from "../todo-list/todo-list";
import ItemStatusFilter from "../item-status-filter/item-status-filter"

import "./app.css"

const App = () =>{
    
     const TodoData = [
         {lable:"Drink Cofe", important: false, id: 1},
         {lable:"Make Awesome React", important: true, id: 2},
         {lable:"Drink Vodka", important: true, id: 3} 
     ]
  
    return(

    <div className="todo-app">
        <AppHeader toDo={1} done={3}/>
      
    <div className="top-panel d-flex">
        <SearchPanel/>
        <ItemStatusFilter/>
    </div>
        
        <TodoList todos = {TodoData}/>
    </div>
   )

}


export default App;