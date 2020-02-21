import React, {Component} from 'react';
import styles             from './CheckBox.module.css';
import Icon               from '@mdi/react';
import {mdiCheck}         from '@mdi/js';

class CheckBox extends Component {
  constructor(props) {
    super(props);
    this.clickHandler = props.clickHandler/*.bind(this)*/;
    console.log(this.clickHandler);
    this.state = {
      isChecked: false,
    };
  }

  render() {
    const backgroundColor = this.state.isChecked ? '#48C1C2' : '#DBE0E6';
    return (
        <div className={styles.checkBox}
             style={{backgroundColor}}
            onClick={() => this.setState({
                                           isChecked: !this.state.isChecked
                                         })}
             /*onClick={this.clickHandler}*/>
          <Icon path={mdiCheck}
                size="21px"
                color="white"/>
        </div>
    );
  }
}

export default CheckBox;