import React, { Component } from 'react';
import './App.css';


class App extends Component {
  render() {
    return (
    <div className='App'> 
      <div className='App-title'> Countdown to my BDAY!</div>
        <div>
        <div className='Clock-days'> 14 days</div>
        <div className='Clock-hours'> 30 hrs</div>
        <div className='Clock-minutes'> 40 minutes</div>
        <div className='Clock-seconds'> 12 seconds</div>
        </div>
        <div>
          <input placeholder='new date' />
          <button>Submit</button>
        </div>
        
    </div>
    )
  }
}

export default App;