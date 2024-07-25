"use client"; // Asegúrate de que esta línea esté al principio del archivo

import React, { useState, useEffect } from 'react';
import ColumnHeaders from '@/components/ColumnHeaders';
import PredictionCard from '../components/PredictionCard';
import styles from '../styles/Home.module.css';

const Predictions: React.FC = () => {
  const [prediction, setPrediction] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchPrediction = async (retries = 2) => {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 segundos de timeout

    try {
      //const response = await fetch('https://predictfutbol-api.onrender.com/api/predict/', {
      const response = await fetch('http://127.0.0.1:8000/api/predict/', {
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      if (response.ok) {
        const data = await response.json();
        setPrediction(data); // Asume que la respuesta contiene directamente la predicción
      } else {
        console.error('Failed to fetch prediction.');
        setError('Failed to fetch prediction.');
      }
    } catch (error) {
      if (retries > 0) {
        fetchPrediction(retries - 1);
      } else {
        console.error('Error fetching prediction:', error);
        setError('An error occurred while fetching prediction.');
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPrediction();
  }, []);

  return (
    <div>
      <div className={styles.predictions}>
        {loading ? (
          <p>Cargando...</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          <PredictionCard predictionData={prediction} />
        )}
      </div>
    </div>
  );
};

export default Predictions;
