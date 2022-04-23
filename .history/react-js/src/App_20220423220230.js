import React, { useState } from 'react';
import './App.css';

function App() { const[todos, setTodos] = useState(['take dogs for walk','take the rubbish out',])
const[input,setInput] =useState('');

const addTodo =(event) => {
console.log('i am working!!!');
setTodos([...todos,input]);
}

  return (
    <div className="App">
      <h1>hello clever programmers!</h1>
      <input value= {input} onChange={event => setInput(event.target.value)}/>
      <button onClick={addTodo}>add Todo</button>
      <ul>
      {todos.map(todo=>(
          <li>{todo}</li>
        ))}
      </ul>

    </div>
  );
}

export default App;

