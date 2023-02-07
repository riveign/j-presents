import { useEffect, useState } from 'react'
import { TimeDisplay } from './timeDisplay';

type CountdownProps = {
    targetDate: Date;
}

export const Countdown = ({ targetDate }: CountdownProps) => {
  const [timeToTarget, setTimeToTarget] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      const currentDate : Date = new Date();
      setTimeToTarget(targetDate.getTime() - currentDate.getTime());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <TimeDisplay timeToDisplay={timeToTarget} />
    </div>
  );
};