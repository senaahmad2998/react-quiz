import { useEffect, useState } from "react";

const INTERVAL_TIME = 100;

export default function QuestionTimer({ timeout, onTimeout, mode }) {
  const [remainingTime, setRemainingTime] = useState(timeout);

  useEffect(() => {
    console.log("TIMER");
    const timeoutVar = setTimeout(onTimeout, timeout);

    return () => {
      clearTimeout(timeoutVar);
    };
  }, [timeout, onTimeout]);

  useEffect(() => {
    console.log("INTERVAL");
    const intervalVar = setInterval(() => {
      setRemainingTime(
        (prevRemainingTime) => prevRemainingTime - INTERVAL_TIME
      );
    }, INTERVAL_TIME);

    return () => {
      clearInterval(intervalVar);
    };
  }, []);

  return (
    <progress
      id="question-time"
      max={timeout}
      value={remainingTime}
      className={mode}
    />
  );
}
