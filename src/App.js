import React from 'react';

// import GameForm from './components/GameForm/';
import GameCards from './components/GameCards/';
import Hello from './components/Hello';

class App extends React.Component {
  render() {
    return (
      <div id="App">
        {/* <GameForm /> */}
        <GameCards />
        <Hello></Hello>
      </div>
    );
  }
}

export default App;
