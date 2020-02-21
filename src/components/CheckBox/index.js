import React, { Component } from 'react';
import styles               from './CheckBox.module.css';
import Icon                 from '@mdi/react';
import { mdiCheck }         from '@mdi/js';

class CheckBox extends Component {
  constructor(props) {
    super( props );
    this.clickHandler = props.clickHandler(this);
    this.state = {
      isSelected: this.props.isSelected,
    };
  }


  render() {

    const backgroundColor = this.state.isSelected ? '#48C1C2' : '#DBE0E6';
    return (
        <div className={styles.checkBox}
             style={{ backgroundColor }}
            onClick={this.clickHandler}>
          <Icon path={mdiCheck}
                size="21px"
                color="white"/>
        </div>
    );
  }
}

export default CheckBox;