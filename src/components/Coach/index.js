import React, {Component} from 'react';
import Avatar             from '../Avatar';
import CoachInfo from '../CoachInfo';
import CheckBox  from '../CheckBox';
import styles    from './Coach.module.css';

class Coach extends Component {
  constructor(props) {
    super(props);
    this.firstName =  props.coach.firstName || 'Coach';
    this.lastName = props.coach.lastName || '';
    this.level = props.coach.level || '';
    this.imageSrc =  props.coach.imageSrc;
    this.clickHandler = props.clickHandler;
    console.log(this.clickHandler);
   /* this.state = {
      firstName: null,
      lastName: null,
      level: null,
      imageSrc: null
    };*/
  }


  render() {
    return (
        <li className={styles.coach}>
          <Avatar src={this.imageSrc}
                  alt="gg"
                  firstName={this.firstName}
                  lastName={this.lastName}/>
          <CoachInfo level={this.level}
                     firstName={this.firstName}
                     lastName={this.lastName}/>
          <CheckBox clickHandler={this.clickHandler}/>
        </li>
    );
  }
}

export default Coach;