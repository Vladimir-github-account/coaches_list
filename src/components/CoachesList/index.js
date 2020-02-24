import React, { Component } from 'react';
import Coach                from '../Coach';
import styles               from './CoachesList.module.css';

class CoachesList extends Component {
  constructor(props) {
    super( props );
    this.state = {
      coaches: [],
      isUpdated: false,
    };
  }

  loadData = () => {
    fetch( './coaches.json' )
        .then( response => response.json() )
        .then( coaches => {
          this.setState( {
            coaches: [
              ...this.state.coaches,
              ...coaches.map( (coach) => {
                coach.isSelected = false;
                return coach;
              } )
            ]
          } );
        } );
  };

  componentDidMount() {
    this.loadData();
  }

  coachCheckboxClickHandler = (index) => {
      return (e) => {
        const newCoaches = this.state.coaches;
        newCoaches[index].isSelected = !newCoaches[index].isSelected;
        this.setState( {
          coaches: newCoaches
        } );
      };
  };

  render() {
    const { coaches } = this.state;
    const selectedCoaches = coaches.filter(
        coach => coach.isSelected === true );
    console.log( selectedCoaches );
    const selectedComponents = selectedCoaches.map((coach, index) => (<div key={index}>{coach.firstName || coach.lastName || coach.id}</div>));
    const coachesComponents = coaches.map(
        (coach, index) => (
            <Coach key={coach.id}
                   coach={coach}
                   clickHandler={this.coachCheckboxClickHandler( index )}/>
        )
    );
    return (
        <div>
          <ul className={styles.coachList}>{coachesComponents}</ul>
          {selectedComponents}
        </div>
    );
  }
}

export default CoachesList;