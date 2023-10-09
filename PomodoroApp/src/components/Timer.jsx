// Timer.jsx
import React, { useState, useEffect } from 'react';
import './Timer.css';

function Timer({ title, minutes, setMinutes, breakTimer }) {
    const [seconds, setSeconds] = useState(0);
    const [isActive, setIsActive] = useState(false);
  
    useEffect(() => {
      let interval;
  
      if (isActive && (minutes > 0 || seconds > 0)) {
        interval = setInterval(() => {
          if (seconds === 0) {
            if (minutes === 0) {
              setIsActive(false);
  
              if (!breakTimer) {
                // Start the break timer automatically
                setMinutes(5); // Set default break time
                setIsActive(true);
              }
            } else {
              setMinutes((prevMinutes) => prevMinutes - 1); // Decrement minutes
              setSeconds(59); // Reset seconds to 59
            }
          } else {
            setSeconds((prevSeconds) => prevSeconds - 1); // Decrement seconds
          }
        }, 1000);
      } else {
        clearInterval(interval);
      }
  
      return () => clearInterval(interval);
    }, [isActive, seconds, minutes, setMinutes, breakTimer]);

  const toggleTimer = () => {
    setIsActive(!isActive);
  };

  const resetTimer = () => {
    setIsActive(false);
    setMinutes(breakTimer ? 5 : 25); // Set default times for work and break
    setSeconds(0);
  };

  return (
    <div className={`Timer ${breakTimer ? 'break-timer' : 'work-timer'}`}>
      <h2>{title}</h2>
      <div className="timer-input">
        <input
          type="number"
          value={minutes}
          onChange={(e) => setMinutes(e.target.value)}
          min="1"
        />
        <span> minutes</span>
      </div>
      <div className="timer-display">
        {minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}
      </div>
      <div className="timer-buttons">
        <button onClick={toggleTimer}>{isActive ? 'Pause' : 'Start'}</button>
        <button onClick={resetTimer}>Reset</button>
      </div>
    </div>
  );
}

export default Timer;