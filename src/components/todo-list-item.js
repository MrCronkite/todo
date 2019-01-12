import React from "react";

const TodoListItem =({lable, important = false})=>{
const  spanStyle = {
    color: important ? "red" : "black"
}

    return <span style={spanStyle}>{lable}</span>
}

export default TodoListItem;