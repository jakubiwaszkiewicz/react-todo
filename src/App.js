import {Forms, ToDoList} from './components/export.js'
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
          <h1>Jakub's ToDo List</h1>
          <Forms/>
          <ToDoList/>
      </header>
    </div>
  );
}

export default App;
