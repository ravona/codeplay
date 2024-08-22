import { FC, useRef, useState, useCallback } from "react";

interface Time {
  minutes: number;
  seconds: number;
  milliseconds: number;
}

const EnhancedStopwatch: FC = () => {
  const [time, setTime] = useState<Time>({
    minutes: 0,
    seconds: 0,
    milliseconds: 0,
  });
  const intervalRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);

  const updateTime = useCallback(() => {
    if (startTimeRef.current === null) return;

    const elapsedTime = Date.now() - startTimeRef.current;
    const minutes = Math.floor(elapsedTime / 60000);
    const seconds = Math.floor((elapsedTime % 60000) / 1000);
    const milliseconds = Math.floor((elapsedTime % 1000) / 10);

    setTime({ minutes, seconds, milliseconds });
  }, []);

  const startTimer = () => {
    if (intervalRef.current !== null) return;
    startTimeRef.current =
      Date.now() -
      (time.minutes * 60000 + time.seconds * 1000 + time.milliseconds * 10);
    intervalRef.current = window.setInterval(updateTime, 10);
  };

  const stopTimer = () => {
    if (intervalRef.current === null) return;
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  const resetTimer = () => {
    stopTimer();
    setTime({ minutes: 0, seconds: 0, milliseconds: 0 });
    startTimeRef.current = null;
  };

  const formatTime = (n: number): string => n.toString().padStart(2, "0");

  return (
    <div>
      <p>
        Time: {formatTime(time.minutes)}:{formatTime(time.seconds)}:
        {formatTime(time.milliseconds)} (mm:ss:ms)
      </p>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
};

export default EnhancedStopwatch;
