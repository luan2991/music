import { useEffect, useState } from 'react';

export default function useCountdown(initialSeconds = 0) {
 
  const [minutes, setMinutes] = useState(parseInt(Math.floor(initialSeconds / 60)));
  const [seconds, setSeconds] = useState(
    parseInt(initialSeconds - Math.floor(initialSeconds / 60) * 60)
  );

  
  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds <= 0) {
        if (minutes <= 0) {
          clearInterval(interval);
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  });
  return [minutes, seconds];
}
