import {Form, ToDoList} from './components/export.js'
import './App.css';
import React, { useState } from 'react'

function App() {
    const [inputText, setInputText] = useState("")
  return (
    <div className="App">
      <header>
          <h1>Jakub's ToDo List</h1>
      </header>
      <Form
          setInputText={setInputText}
      />
      <ToDoList/>
    </div>
  );
}

export default App;
