import logo from "./logo.svg";
import "./App.css";

import HeaderApp from "./MyComponents/HeaderApp";
import Todos from "./MyComponents/Todos";
import Footer from "./MyComponents/Footer";
import { AddTodo } from "./MyComponents/AddTodo";
import {About} from "./MyComponents/About"
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router,Switch,Route } from "react-router-dom";

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete = (todo) => {
    console.log("I am on delete of ", todo.sno);
    // Deleteing this way doesnt work in react
    // let index = todos.indexOf(todo);
    // todos.splice(index,1)

    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const addTodo = (title, desc) => {
    console.log("I am adding this todo", title, desc);
    let sno;
    if (todos.length == 0) {
      sno = 1;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    };
    setTodos([...todos, myTodo]);
    console.log(myTodo);
  };
  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

  return (
    <>
    <Router>
      <HeaderApp title="My Todo List" />
        <Switch>
          <Route exact path="/" render={()=>{
            return(
              <>
                <AddTodo addTodo={addTodo} />
                <Todos todos={todos} onDelete={onDelete} />
              </>
            )
          }}>
          </Route>
          <Route exact path="/about" render={()=>{
            console.log("chandan")
            return(
              
                <About />
              
            )
          }}>
          </Route>
        </Switch>
      <Footer />
      </Router>
    </>
  );
}

export default App;
