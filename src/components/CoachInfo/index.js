import React, { Component } from 'react';
import styles               from './CoachInfo.module.css';

class CoachInfo extends Component {
  constructor(props) {
    super( props );
    this.firstName = props.firstName || 'User';
    this.lastName = props.lastName || '';
    this.level = props.level || '';
  }

  render() {
    return (
        <div className={styles.coachInfo}>
          <h1 className={styles.name}>{`${this.firstName} ${this.lastName}`}</h1>
          <h2 className={styles.level}>{`Level ${this.level}`}</h2>
        </div>
    );
  }
}

export default CoachInfo;