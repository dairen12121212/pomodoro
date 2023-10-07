import "./Timer.css";
import { useState, useEffect } from "react";

export const Timer = ({ minutes }) => {
  const initialTime = minutes * 60;
  const [seconds, setSeconds] = useState(initialTime);

  useEffect(() => {
    const timer = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      } else {
        clearInterval(timer);
      }
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [seconds]);

  function formatTime(timeInSeconds) {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;
    return `${formattedMinutes}:${formattedSeconds}`;
  }
  return <div className="timer">{formatTime(seconds)}</div>;
};
