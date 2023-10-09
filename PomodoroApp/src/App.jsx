// App.jsx
import React, { useState } from 'react';
import './App.css';
import Timer from './components/Timer';
import './components/Timer.css'; // Import Timer styles
import TodoList from './components/ToDoList';

function App() {
  const [workMinutes, setWorkMinutes] = useState(25);
  const [breakMinutes, setBreakMinutes] = useState(5);

  return (
    <div className="App">
      <h1>Pomodoro App</h1>
      <div className="timer-container">
        <Timer
          title="Work Timer"
          minutes={workMinutes}
          setMinutes={setWorkMinutes}
          breakTimer={false}
        />
        <Timer
          title="Break Timer"
          minutes={breakMinutes}
          setMinutes={setBreakMinutes}
          breakTimer={true}
        />
      </div>
      <TodoList />
    </div>
  );
}

export default App;