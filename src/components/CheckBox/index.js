import React      from 'react';
import styles     from './CheckBox.module.css';
import Icon       from '@mdi/react';
import {mdiCheck} from '@mdi/js';

function CheckBox(props) {
  const backgroundColor = props.isSelected ? '#48C1C2' : '#DBE0E6';
  return (
      <div className={styles.checkBox}
           style={{backgroundColor}}
           onClick={props.clickHandler}>
        <Icon path={mdiCheck}
              size="21px"
              color="white"/>
      </div>
  );
}

export default CheckBox;