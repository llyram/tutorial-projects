//Importing react and useState is the very first step
import React, { useState, useEffect } from "react";
//Importing CSS for the webpage
import './App.css';
//Importing components - provide the relative path of the component files without the .js extension
import Form from "./components/Form";
import TodoList from "./components/TodoList";

//main function of the app
function App() {
  //creating states which is what makes the website work
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  //Run once on startup
  useEffect(() => {
    getLocalTodos();
  }, [])

  //UseEffect
  useEffect(() => {
    saveToLocal();
    filterHandler();
  }, [todos, status]);

  const filterHandler = () => {
    switch (status) {
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true));
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  }

  //Save todos to local storage
  const saveToLocal = () => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }

  const getLocalTodos = () => {
    if(localStorage.getItem('todos') === null){
      localStorage.setItem('todos', JSON.stringify([]))
    }else{
      let todoLocal = JSON.parse(localStorage.getItem('todos'))
      setTodos(todoLocal)
    }
  }

  return (
    <div className="App">
      <header>
        My todo list
      </header>
      {/* Using the components in the webpage
          To pass the parameters to the component function we use the syntax
          variable_name_in_the_function = {state_variable/state_function} */}
      <Form
        todos={todos}
        setTodos={setTodos} 
        inputText={inputText} 
        setInputText={setInputText} 
        setStatus={setStatus}
      />
      <TodoList 
        setTodos={setTodos} 
        todos={todos} 
        filteredTodos={filteredTodos}
      />
    </div>
  );
}

export default App;
