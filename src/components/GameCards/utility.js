import React from "react";

export const renderGameElement = (gameData, isCart, onClick) => (
  <div className="g-card" key={gameData.id}>
    <h2 className="title">Title: {gameData.name}</h2>
    <h4 className="subtitle">Genre: {gameData.genre}</h4>
    <h4 className="subtitle">Year: {gameData.year}</h4>
    <h4 className="subtitle">Developer: {gameData.developer}</h4>
    <button onClick={() => onClick(gameData)}>
      {!isCart ? "Add to cart" : "Remove from cart"}
    </button>
  </div>
);
