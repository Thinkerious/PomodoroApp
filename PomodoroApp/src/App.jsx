// App.jsx
import React, { useState } from 'react';
import './App.css';
import Timer from './components/Timer';
import TodoList from './components/ToDoList';

function App() {
  const [workMinutes, setWorkMinutes] = useState(25);
  const [breakMinutes, setBreakMinutes] = useState(5);

  return (
    <div className="App">
      <h1>Pomodoro App</h1>
      <Timer workMinutes={workMinutes} breakMinutes={breakMinutes} />
      <TodoList />
    </div>
  );
}

export default App;