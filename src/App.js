import React, { Component } from 'react';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deadline: "December 25, 2018",
      newDeadline: ''
    }
  }

  changeDeadline() {
    this.setState({ deadline: "November 1, 2021" })
  }

  render() {
    return (
      <div className='App'> 
        <div className='App-title'> 
          Countdown to {this.state.deadline}</div>
        <div>
          <div className='Clock-days'> 14 days</div>
          <div className='Clock-hours'> 30 hrs</div>
          <div className='Clock-minutes'> 40 minutes</div>
          <div className='Clock-seconds'> 12 seconds</div>
        </div>
        <div>
          <input 
          placeholder='new date' 
          onChange={ event => console.log('event >', event)}
          />
          <button onClick={ () => this.changeDeadline() }>
          Submit
          </button>
        </div> 
      </div>
    )
  }
}

export default App;