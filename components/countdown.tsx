import { useEffect, useState } from 'react'
import { TimeDisplay } from './timeDisplay';

type CountdownProps = {
    targetDate: Date;
    pagePath: string;
    linkText: string;
}

export const Countdown = ({ targetDate, pagePath, linkText }: CountdownProps) => {
  const [timeToTarget, setTimeToTarget] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      const currentDate : Date = new Date();
      setTimeToTarget(targetDate.getTime() - currentDate.getTime());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    timeToTarget <= 0 ? <div><a href={pagePath}><h2>{linkText}</h2></a></div> :
    <div>
      <TimeDisplay timeToDisplay={timeToTarget} />
    </div>
  );
};