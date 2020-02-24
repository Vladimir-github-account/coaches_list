import React  from 'react';
import styles from './CoachInfo.module.css';

function CoachInfo(props) {
  const { firstName, lastName, level } = props;
  return (
      <div className={styles.coachInfo}>
        <h1 className={styles.name}>{`${firstName || 'Coach'} ${lastName || ''}`}</h1>
        <h2 className={styles.level}>{`Level ${level || ''}`}</h2>
      </div>
  );
}

export default CoachInfo;