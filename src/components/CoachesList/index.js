import React, {Component}  from 'react';
import Coach               from '../Coach';
import styles              from './CoachesList.module.css';
import SelectedCoachesList from '../SelectedCoachesList';

class CoachesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coaches: new Map(),
      isUpdated: false,
    };
  }

  loadData = () => {
    fetch('./coaches.json')
        .then(response => response.json())
        .then(coachesArr => {
          const coaches = this.state.coaches;
          coachesArr.map((coach) => {
            coach.isSelected = false;
            coaches.set(coach.id, coach);
            return coach;
          });
          this.setState({
                          coaches
                        });
        });
  };

  componentDidMount() {
    this.loadData();
  }

  coachClickHandler = (id) => {
    return (e) => {
      const coaches = this.state.coaches;
      const coach = coaches.get(id);
      coach.isSelected = !coach.isSelected;
      coaches.set(id, coach);
      this.setState({
                      coaches
                    });
      console.log('2', coaches);
    };
  };

  render() {
    const {coaches} = this.state;
    const coachesComponents = [];
    coaches.forEach(
        coach => (
            coachesComponents.push(
                <Coach key={coach.id}
                       coach={coach}
                       clickHandler={this.coachClickHandler(coach.id)}/>
            )
        )
    );
    return (
        <>
          <ul className={styles.coachList}>
            {<SelectedCoachesList
                coaches={coaches}
                clickHandler={this.coachClickHandler}
            />}
            {coachesComponents}
          </ul>
        </>
    );
  }
}

export default CoachesList;