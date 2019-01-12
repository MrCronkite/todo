import React from "react";
import TodoListItem from "./todo-list-item"

const TodoList = ()=>{
    return(<ul>
        <li><TodoListItem lable="Drink vodka"/></li>
        <li><TodoListItem lable="Eat bird"
            important
        /></li>
        <li><TodoListItem lable="Hear voice"/></li>
    </ul>)
}

export default TodoList;