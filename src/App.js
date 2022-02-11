import './App.css';

import { useState } from 'react';

const App = () => {
  const [items, setItems] = useState([]);
  const [inputText, setInputText] = useState('');

  const addHandler = (event) =>{
      event.preventDefault();
      let storedItems = [...items];
      storedItems.push(inputText)
      setItems(storedItems)
  };
  const removeHandler = (index) =>{
      let storedItems = [...items];
      storedItems.splice(index, 1)
      setItems(storedItems);
  };

  return(
      <div class = "to-do">
          <h1>To-do list</h1>
          <form>
          <input type = "text" required value ={inputText} placeholder={"item"} onChange ={(event) => setInputText(event.target.value)}/>
          <button onClick = {addHandler}>Add Item</button>
          </form>
          <h4>(click items to remove)</h4>
          <p>
          {items.map((item,index) =>{
              return <h1 onClick={() => removeHandler(index)} key ={index}>{item}</h1>
          })}
          </p>
      </div>
  )
};


export default App;
