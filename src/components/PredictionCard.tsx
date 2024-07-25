// PredictionCard.tsx
import React from 'react';
import Countdown from './Countdown';
import ColumnHeaders from './ColumnHeaders';
import styles from '../styles/Prediction.module.css';

interface Team {
  name: string;
  shortName: string;
  crest: string;
}

interface AdditionalData {
  matchday: number;
  stage: string;
  group: string | null;
  utcDate: string;
  homeTeam: Team;
  awayTeam: Team;
}

interface Prediction {
  prediction: string;
  additional_data: AdditionalData;
}

const PredictionCard: React.FC<{ predictionData: Prediction | null }> = ({ predictionData }) => {
  if (!predictionData) {
    return <p>No prediction data available.</p>;
  }

  const { prediction, additional_data } = predictionData;

  if (!additional_data) {
    return <p>Additional data not available.</p>;
  }

  const dateObj = new Date(additional_data.utcDate);
  const date = dateObj.toLocaleDateString('en-GB').replace(/\//g, '-'); // Format date as 16-08-2024
  const time = dateObj.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit', hour12: true }).replace('AM', 'a.m.').replace('PM', 'p.m.'); // Format time as 1:00 p.m.
  const formattedStage = additional_data.stage.replace(/_/g, ' ').toLowerCase().replace(/\b\w/g, char => char.toUpperCase());

  return (
    <div className={styles.card}>
      <ColumnHeaders/>
      <div className={styles.row}>
        <div className={styles.columnpc1}>
          <p className={styles.date}><strong>{date}</strong>. {time}</p>
          <p className={styles.league}>{formattedStage}</p>
          <p className={styles.league}> Jornada {additional_data.matchday}</p>
        </div>
        <div className={styles.column}>
          <div className={styles.teamContainer}>
            <p className={styles.league}>Local</p>
            <p>{additional_data.homeTeam.name}</p>
            <img src={additional_data.homeTeam.crest} alt={`${additional_data.homeTeam.name} logo`} className={styles.logo} />
          </div>
        </div>
        <div className={styles.columnv}>
          <p className={styles.vs}>vs</p>
        </div>
        <div className={styles.column}>
          <div className={styles.teamContainer}>
            <p className={styles.league}>Visitante</p>
            <p>{additional_data.awayTeam.name}</p>
            <img src={additional_data.awayTeam.crest} alt={`${additional_data.awayTeam.name} logo`} className={styles.logo} />
          </div>
        </div>
        <div className={styles.column}>
          <p>{prediction}</p>
        </div>
      </div>
      <Countdown utcDate={additional_data.utcDate} />
    </div>
  );
};

export default PredictionCard;
