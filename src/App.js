import React, { useState,useRef,useEffect } from "react";
import { useTodoLayerValue } from "./context/TodoContext";
import TodoList from "./components/TodoList";
import "./App.css";

const App = () => {
  const [{ todos }, dispatch] = useTodoLayerValue();
  const [content, setContent] = useState("");

  const inputRef =useRef(null)
  useEffect(()=>{
    inputRef.current.focus();
  },[])

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!content && content.length<1 ) return;

    const newTodo = {
      id: Math.floor(Math.random() * 1000),
      content,
      isCompleted: false,
    };

    dispatch({
      type: "ADD_TODO",
      payload: newTodo,
    });

    setContent("");
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="todo-form">
        <input
          type="text"
          className="todo-input"
          onChange={(event) => setContent(event.target.value)}
          value={content}
          ref={inputRef}
        />
        <button className="todo-button">Add</button>
      </form>

      {/* Todo List */}
      <TodoList todos={todos} />
    </div>
  );
};

export default App;
