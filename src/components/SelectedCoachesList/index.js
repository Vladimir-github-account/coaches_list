import React         from 'react';
import SelectedCoach from '../SelectedCoach';
import styles        from './SelectedCoachesList.module.css';

function SelectedCoachesList(props) {
  const {coaches, clickHandler} = props;
  const componentsArr = [];
  coaches.forEach(
      coach => {
        if (coach.isSelected === true) {
          componentsArr.push(
              <SelectedCoach
                  key={coach.id}
                  clickHandler={clickHandler(coach.id)}
                  firstName={coach.firstName}
                  lastName={coach.lastName}
                  id={coach.id}
              />
          );
        }
      }
  );
  return (
      <ul className={styles.SelectedCoachesList}>
        To: {componentsArr}
      </ul>
  );

}

export default SelectedCoachesList;