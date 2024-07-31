import React, { useState, useEffect } from 'react';
import styles from '../styles/Header.module.css';

const Header: React.FC = () => {
  const [dateTime, setDateTime] = useState<Date | null>(null);

  useEffect(() => {
    setDateTime(new Date());
    const timer = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!dateTime) {
    return null; // or a loading spinner if preferred
  }

  // Function to format the date in the desired format
  const formatDate = (date: Date) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('es-ES', options);
  };

  const formattedDate = formatDate(dateTime);
  const formattedTime = dateTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true });

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.columnhe1}>
          <img src="/favicon.webp" alt="Logo" className={styles.logo} />
        </div>
        <div className={styles.columnhe2}>
          <span className={styles.title}>INTELLIBET</span>
        </div>
        <div className={styles.columnhe3}>
          <div className={styles.dateTime}>
            <p className={styles.dateText}>{formattedDate}</p>
            <p className={styles.dateTimeText}>{formattedTime}</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
