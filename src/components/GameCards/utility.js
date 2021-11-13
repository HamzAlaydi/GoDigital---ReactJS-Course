import React from "react";

export const renderGameElement = (gameData, isCart, onClick, handleDelete, handleScore) => (
  <div className="g-card" key={gameData.id}>
    <h2 className="title">Title: {gameData.name}</h2>
    <h4 className="subtitle">Genre: {gameData.genre}</h4>
    <h4 className="subtitle">Year: {gameData.year}</h4>
    <h4 className="subtitle">Developer: {gameData.developers}</h4>
    <button onClick={() => onClick(gameData)}>
      {!isCart ? "Add to cart" : "Remove from cart"}
    </button>
    <button onClick={() => handleDelete(gameData.id)}>
      Delete
    </button>
    <button onClick={() => handleScore(gameData.id, 10)}>
      Top Score
    </button>
  </div>
);
