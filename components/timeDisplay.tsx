import styles from '@/styles/timeDisplay.module.css';
type TimeDisplayProps = {
    timeToDisplay: number;
}
export const parseTime = (time: number) => {
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((time % (1000 * 60)) / 1000);
    return `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

export const TimeDisplay = ({ timeToDisplay }: TimeDisplayProps) => {
    return (
        <div>
            <p className={styles.timer}>{parseTime(timeToDisplay)}</p>
        </div>
    );
}
