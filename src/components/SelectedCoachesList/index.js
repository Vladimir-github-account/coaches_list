import React         from 'react';
import SelectedCoach from '../SelectedCoach';
import styles        from './SelectedCoachesList.module.css';

function SelectedCoachesList(props) {
  const { coaches, clickHandler } = props;
  const SelectedCoaches = coaches
      .map( (coach, index) => {
              if ( coach.isSelected === true ) {
                return (
                    <SelectedCoach
                        key={index}
                        clickHandler={clickHandler( index )}
                        coach={coach}/>
                );
              }
            }
      );
  return (
      <ul className={styles.SelectedCoachesList}>
        To: {SelectedCoaches}
      </ul>
  );

}

export default SelectedCoachesList;