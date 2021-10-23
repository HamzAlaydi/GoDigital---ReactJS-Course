import React from "react";
import PropTypes from "prop-types";
// import { useSelector } from "react-redux";
import { useRecoilState } from "recoil";
import { counterState } from "../../recoil/atoms/counterAtoms";

import { renderGameElement } from "./utility";
import generateStyles from "./styles";
import Hello from "../Hello";

import "./styles.css";

function GameCards(props) {
  // const counter = useSelector((state) => state.cr.counter);

  const [counter, _] = useRecoilState(counterState);

  const styles = generateStyles({ bgColor: "lightgray" });

  const gamesDataJSX = props.gamesData.map(renderGameElement);

  return (
    <>
      <h1>Counter: {counter}</h1>
      <div id="game-cards" style={styles.container}>
        {gamesDataJSX}
        <Hello />
      </div>
    </>
  );
}

GameCards.defaultProps = {
  gamesData: [],
};

GameCards.propTypes = {
  gamesData: PropTypes.array,
};

export default GameCards;
