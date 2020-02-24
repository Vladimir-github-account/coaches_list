import React     from 'react';
import Avatar    from '../Avatar';
import CoachInfo from '../CoachInfo';
import CheckBox  from '../CheckBox';
import styles    from './Coach.module.css';

function Coach(props) {
  const {firstName, lastName, imageSrc, level, isSelected} = props.coach;
  const {clickHandler} = props;
  return (
      <li className={styles.coach}>
        <Avatar src={imageSrc}
                alt="gg"
                firstName={firstName}
                lastName={lastName}/>
        <CoachInfo level={level}
                   firstName={firstName}
                   lastName={lastName}/>
        <CheckBox isSelected={isSelected} clickHandler={clickHandler}/>
      </li>
  );
}

export default Coach;