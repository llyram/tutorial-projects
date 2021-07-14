import React from "react";

// main function of the Form component

const Form = ({ inputText, setInputText, todos, setTodos, setStatus }) => {
  //Here is the javascript
  // arrow function for input text field
  const inputTextHandler = (e) => {
    //console.logs the current string in the text input field
    //console.log(e.target.value);
    //setInputText changes the value of the inputText variable to e.target.value
    setInputText(e.target.value);
  };

  //arrow funciton for the buttons
  const submitTodoHandler = (e) => {
    //prevents the default action of refreshing the page every time the button is clicked
    e.preventDefault();
    setTodos([
      ...todos, { text: inputText, completed: false, id: Math.random() * 1000 }
    ])
    setInputText("");
  }

  const statusHandler = (e) =>{
    setStatus(e.target.value);
  }
  return (
    <form>
      <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" />
      <button onClick={submitTodoHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
}

export default Form;