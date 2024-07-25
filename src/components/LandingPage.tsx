import React from 'react';
import Link from 'next/link';
import styles from '../styles/LandingPage.module.css';

const LandingPage: React.FC = () => {
  return (
    <div className={styles.landingContainer}>
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <h1 className={styles.title}>Predicciones de la Premier League</h1>
        <p className={styles.subtitle}>Para verdaderos aficionados al deporte</p>

      </div>
      <div className={styles.termsContainer}>
        <p className={styles.terms}>Las apuestas gratis se pagan como bonos de apuesta. Las ganancias no incluyen el importe de los bonos de apuesta. Se aplican condiciones, límites de tiempo y exclusiones. El depósito mínimo para las fichas doradas es $1,000. Se aplican premios máximos, restricciones de juego, límites de tiempo y condiciones.</p>
        <p className={styles.terms}> <Link href="/terms" className={styles.link}>Consulte las condiciones importantes y las condiciones completas</Link></p>
      </div>
    </div>
  );
};

export default LandingPage;
