import React, {Component} from "react";

import "./item-status-filter.css"

export default class ItemStatusFilter extends Component{ 

buttons =  [
        {name: "all", label: "All"},
        {name: "activ", label: "Activ"},
        {name: "done", label: "Done"}
]

render(){

   const {filter, onFilter}= this.props;     

   const buttons = this.buttons.map(({name, label})=>{
        //filter button
        const activBtn = filter===name;
        const class_ = activBtn ? "btn-info" : "btn-outline-secondary"
           return(
                <button type="button"
                className={`btn ${class_}`}
                key = {name}
                onClick={()=>onFilter(name)}
                >{label}</button>
           )
   }) 
        
   return(
    <div className="btn-group">
    {buttons}
  </div>
   )
}
}

