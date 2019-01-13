import React from "react";
import "./todo-list-item.css"

const TodoListItem =({lable, important = false})=>{
const  spanStyle = {
    color: important ? "red" : "black"
}

    return <span style={spanStyle}>{lable}</span>
}

export default TodoListItem;