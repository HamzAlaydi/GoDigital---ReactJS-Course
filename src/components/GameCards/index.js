import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";

import { renderGameElement } from "./utility";
import generateStyles from "./styles";
import Hello from "../Hello";
import { deleteById, updateById } from "../../services/games";

import "./styles.css";

function GameCards(props) {
  const dispatch = useDispatch();
  const styles = generateStyles({ bgColor: "lightgray" });

  const handleAddToCart = data => {
    dispatch({ type: "ADD_TO_CART", payload: data });
    alert("successfully added the game to your cart");
  };

  const handleGameDelete = async id => {
    try {
      await deleteById(id);
      dispatch({ type: "REMOVE_GAME", payload: id });
    } catch (error) {
      console.error(error);
    }
  };

  const handleGameScore = async (id, score) => {
    try {
      await updateById({id, meta: {score}});
    } catch (error) {
      console.error(error);
    }
  };

  const gamesDataJSX = props.gamesData.map(game =>
    renderGameElement(game, false, handleAddToCart, handleGameDelete, handleGameScore)
  );

  return (
    <div id="game-cards" style={styles.container}>
      {gamesDataJSX}
      <Hello />
    </div>
  );
}

GameCards.defaultProps = {
  gamesData: []
};

GameCards.propTypes = {
  gamesData: PropTypes.array
};

export default GameCards;
