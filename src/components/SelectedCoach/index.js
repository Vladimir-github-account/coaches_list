import React  from 'react';
import styles from './SelectedCoach.module.css';

function SelectedCoach(props) {
  const {
    clickHandler,
    firstName, lastName, id
  } = props;
  return (
      <li className={styles.selectedCoach}
          onClick={clickHandler}>
        {`${firstName || ''} ${lastName || id}, `}
      </li>
  );
}

export default SelectedCoach;