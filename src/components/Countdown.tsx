import React, { useState, useEffect } from 'react';
import styles from '../styles/Countdown.module.css';

interface CountdownProps {
  utcDate: string;
}

const Countdown: React.FC<CountdownProps> = ({ utcDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(utcDate) - +new Date();
    let timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [utcDate]);

  return (
    <div className={styles.countdownContainer}>
      <div className={styles.countdownText}>Faltan</div>
      <div className={styles.countdown}>
        <div className={styles.timeSection}>
          <span className={styles.time}>{String(timeLeft.days).padStart(2, '0')}</span>
          <span className={styles.label}>Días</span>
        </div>
        <span className={styles.separator}>:</span>
        <div className={styles.timeSection}>
          <span className={styles.time}>{String(timeLeft.hours).padStart(2, '0')}</span>
          <span className={styles.label}>Horas</span>
        </div>
        <span className={styles.separator}>:</span>
        <div className={styles.timeSection}>
          <span className={styles.time}>{String(timeLeft.minutes).padStart(2, '0')}</span>
          <span className={styles.label}>Minutos</span>
        </div>
      </div>
    </div>
  );
};

export default Countdown;
