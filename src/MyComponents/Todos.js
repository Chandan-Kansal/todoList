import React from 'react'
import TodoItems from "./TodoItems";
export default function Todos(props) {
    let myStyle = {
            minHeight: "70vh"
    };
    return(
        <>
        <div className="container my-3" style={myStyle}> 
            <h3 className="my-3">Todos List</h3>
            {props.todos.length===0? "No todos to Display":
            props.todos.map((todo)=>{
                return (
                <TodoItems todo = {todo} key={todo.sno} onDelete={props.onDelete}/>
                )
            })}
            {/* <TodoItems todo = {props.todos[0]}/> */}
        </div>
        </>
    )
}
