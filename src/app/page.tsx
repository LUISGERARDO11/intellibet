"use client";

import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Header from '@/components/Header';
import ImaginaryPrediction from '@/components/ImaginaryPrediction';
import Footer from '@/components/Footer';
import RetrainModel from '@/components/RetrainModel ';
import Predictions from '@/components/Predictions';
import MatchdayPrediction from '@/components/MatchdayPrediction';
import MovingTextContainer from '@/components/MovingTextContainer';
import LandingPage from '@/components/LandingPage';
import { MdInfoOutline } from 'react-icons/md';

const Page: React.FC = () => {
  const [infoVisible, setInfoVisible] = useState<string | null>(null);

  useEffect(() => {
    const checkNetworkConnection = () => {
      if (!navigator.onLine) {
        alert('No tienes conexión a internet. Por favor, verifica tu conexión.');
      }
    };

    // Verificar la conexión al cargar la página
    checkNetworkConnection();

    // Escuchar cambios en el estado de la conexión
    window.addEventListener('online', checkNetworkConnection);
    window.addEventListener('offline', checkNetworkConnection);

    // Limpiar event listeners cuando el componente se desmonte
    return () => {
      window.removeEventListener('online', checkNetworkConnection);
      window.removeEventListener('offline', checkNetworkConnection);
    };
  }, []);

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const section = document.querySelector(hash);
      if (section) {
        const yOffset = -150; // Ajusta este valor según la altura de tu encabezado
        const y = section.getBoundingClientRect().top + window.scrollY + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }
  }, []);

  const handleMouseEnter = (section: string) => {
    setInfoVisible(section);
  };

  const handleMouseLeave = () => {
    setInfoVisible(null);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Intellibet</title>
      </Head>
     
      <Header />
        
      <div className={styles.mainContent}>
        <MovingTextContainer/>
        <LandingPage/>
        <section id="predictions" className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Próximo Partido</h2>
            <div
              className={styles.infoIcon}
              onMouseEnter={() => handleMouseEnter('predictions')}
              onMouseLeave={handleMouseLeave}
            >
              <MdInfoOutline size={24} />
              {infoVisible === 'predictions' && (
                <div className={styles.infoModal}>
                  Aquí puedes ver el próximo partido que se jugará en la liga.
                </div>
              )}
            </div>
          </div>
          <Predictions/>
        </section>
        <section id="imaginary-prediction" className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Predicción Personalizada</h2>
            <div
              className={styles.infoIcon}
              onMouseEnter={() => handleMouseEnter('imaginary-prediction')}
              onMouseLeave={handleMouseLeave}
            >
              <MdInfoOutline size={24} />
              {infoVisible === 'imaginary-prediction' && (
                <div className={styles.infoModal}>
                  Elige dos equipos y haz una predicción del resultado.
                </div>
              )}
            </div>
          </div>
          <ImaginaryPrediction/>
        </section>
        <section id="matchday-prediction" className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Predicción de Partidos Programados</h2>
            <div
              className={styles.infoIcon}
              onMouseEnter={() => handleMouseEnter('matchday-prediction')}
              onMouseLeave={handleMouseLeave}
            >
              <MdInfoOutline size={24} />
              {infoVisible === 'matchday-prediction' && (
                <div className={styles.infoModal}>
                  Selecciona partidos programados y haz una predicción del resultado.
                </div>
              )}
            </div>
          </div>
          <MatchdayPrediction/>
        </section>
        <section id="retrain-model" className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Reentrenar Modelo de Predicciones</h2>
            <div
              className={styles.infoIcon}
              onMouseEnter={() => handleMouseEnter('retrain-model')}
              onMouseLeave={handleMouseLeave}
            >
              <MdInfoOutline size={24} />
              {infoVisible === 'retrain-model' && (
                <div className={styles.infoModal}>
                  Sube nuevos datos para reentrenar el modelo de predicciones.
                </div>
              )}
            </div>
          </div>
          <RetrainModel/>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Page;
