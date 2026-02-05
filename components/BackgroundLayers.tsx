"use client";

import React from 'react';
import styles from './BackgroundLayers.module.css';

const BackgroundLayers = () => {
  return (
    <>
      <div className={styles.fixedBg} />
      <div className={styles.glassDepth} />
    </>
  );
};

export default BackgroundLayers;
