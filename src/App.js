import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
    <div> 
      <div> Countdown to my BDAY!</div>
        <div>
        <div>14 days</div>
        <div>30 hrs</div>
        <div>40 minutes</div>
        <div>12 seconds</div>
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