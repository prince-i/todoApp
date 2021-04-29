import React from 'react';
import './App.css';
import TaskList from "./Components/taskList";
import Header from "./Components/Header";
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';

function App() {
  return (
    <div className="App">
      <Header/>
      <TaskList/>
    </div>
  );
}

export default App;
