import React, {Component} from "react";
import "./todo-list-item.css"


export default class TodoListItem extends Component {
  
  state ={
    done: false
  } 

  onLableClick = () => {
        this.setState({
          done: true
        }
        )
  }
  
  render(){
    
  const { lable , important= false} = this.props;
  const spanStyle = {
    color: important ? 'steelblue' : 'black',
    fontWeight: important ? 'bold' : 'normal'
  };
  const { done } = this.state;
  let classNames = "todo-list-item";
  if(done){
    classNames += " done";
  }


    return (
        <span className={classNames}>
      <span
        className="todo-list-item-label"
        style={spanStyle}
        onClick={this.onLableClick}>
        {lable}
       
      </span>

      <button type="button"
              className="btn btn-outline-success btn-sm float-right">
        <i className="fa fa-exclamation" />
      </button>

      <button type="button"
              className="btn btn-outline-danger btn-sm float-right">
        <i className="fa fa-trash-o" />
      </button>
    </span>
         
    )
     };
}
