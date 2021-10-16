import { Component } from 'react';

import gamesData from "./data.json";
import { renderGameElement } from "./utility";
import generateStyles from "./styles";
import Hello from "../Hello";

import "./styles.css";

class GameCards extends Component {
  render() {
    const styles = generateStyles({ bgColor: "lightgray" });
    
    const gamesDataJSX = gamesData.map(renderGameElement);

    return (
      <div id="game-cards" style={styles.container}>
        {gamesDataJSX}
        <Hello />
      </div>
    );
  }
}

export default GameCards;