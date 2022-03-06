import React, { useState } from "react";
import Todo from "./Todo";

function App() {
  const [inputText, setinputText] = useState("");
  const [items, setItems] = useState([]);
  function handleChange(event) {
    const value = event.target.value;
    setinputText(value);
  }
  function addItem() {
    setItems((prevItems) => {
      return [...prevItems, inputText];
    });
    setinputText("");
  }
  function deleteItem(id) {
    setItems((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={inputText} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((todoItem, index) => (
            <Todo
              id={index}
              key={index}
              text={todoItem}
              onChecked={deleteItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
