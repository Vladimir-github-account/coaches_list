import React, {Component} from 'react';
import Coach              from '../Coach';
import styles             from './CoachesList.module.css';

class CoachesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coaches: [],

    };
  }

  loadData = () => {
    fetch('./coaches.json')
        .then(response => response.json())
        .then(coaches => {
          this.setState({
                          coaches: [...this.state.coaches, ...coaches]
                        });
        });
  };

  componentDidMount() {
    this.loadData();
  }

  coachCheckboxClickHandler =(e)=> {
    console.log('log', this.state, e.currentTarget.state);
  };

  render() {
    const {coaches} = this.state;
    const coachesComponents = coaches.map(
        coach => (
            <Coach key={coach.id}
                   coach={coach}
                   clickHandler={this.coachCheckboxClickHandler}>
              {coach.id}
            </Coach>
        )
    );
    return (
        <ul className={styles.coachList}>{coachesComponents}</ul>
    );
  }
}

export default CoachesList;