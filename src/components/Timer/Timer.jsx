import React, { useState, useEffect } from "react";

const Timer = () => {
  const [time, setTime] = useState(0);
  const [timerOn, setTimerOn] = useState(false);

  useEffect(() => {
    let interval = null;

    if (timerOn) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else if (!timerOn) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [timerOn]);

  return (
    <div className="container-fluid mt-5">
      <div>
        <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)} : </span>
        <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)} : </span>
        <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
      </div>

      <div className="container-fluid mt-5">
        {!timerOn && time === 0 && (
          <button
            className="btn btn-outline-info my-2 mx-4 px-4"
            onClick={() => setTimerOn(true)}
          >
            Start
          </button>
        )}
        {timerOn && (
          <button
            className="btn btn-outline-info my-2 mx-4 px-4"
            onClick={() => setTimerOn(false)}
          >
            Stop
          </button>
        )}
        {!timerOn && time > 0 && (
          <button
            className="btn btn-outline-info my-2 mx-4 px-4"
            onClick={() => setTime(0)}
          >
            Reset
          </button>
        )}
        {!timerOn && time > 0 && (
          <button
            className="btn btn-outline-info my-2 mx-4 px-4"
            onClick={() => setTimerOn(true)}
          >
            Resume
          </button>
        )}
      </div>
    </div>
  );
};

export default Timer;

// <div className="container-fluid">
// <div className="row mt-5">
//   <span>Time goes Here!</span>
// </div>
// <div className="row mt-5">
//   <div className="col-md-12">
//     <button className="btn btn-outline-info mx-4 px-4">Start</button>
//     <button className="btn btn-outline-info mx-4 px-4">Stop</button>
//     <button className="btn btn-outline-info mx-4 px-4">Resume</button>
//     <button className="btn btn-outline-info mx-4 px-4">Reset</button>
//   </div>
// </div>
// </div>
