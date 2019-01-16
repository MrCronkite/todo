import React, {Component} from "react";
import "./todo-list-item.css"


export default class TodoListItem extends Component {
  
  state ={
    done: false,
    important: false
  } 

  onLableClick = () => {
        this.setState(({done})=>{
          return {done: !done}
        }
        )
  }

  onMarkImportant = () =>{
    this.setState(({important})=>{
      return{important: !important}
    })
  }
  
  render(){
    
  const { lable } = this.props;
  const { done, important } = this.state;
  
  let classNames = "todo-list-item";
  if(done){
    classNames += " done";
  }

  if(important){
    classNames+= " important";
  }


    return (
        <span className={classNames}>
      <span
        className="todo-list-item-label"
        onClick={this.onLableClick}>
        {lable}
       
      </span>

      <button type="button"
              className="btn btn-outline-success btn-sm float-right"
              onClick={this.onMarkImportant}
              >
        <i className="fa fa-exclamation" />
      </button>

      <button type="button"
              className="btn btn-outline-danger btn-sm float-right"
              onClick={this.props.onDeleted}>
        <i className="fa fa-trash-o" />
      </button>
    </span>
         
    )
     };
}
