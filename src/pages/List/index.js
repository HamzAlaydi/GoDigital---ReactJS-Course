import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import GameForm from "../../components/GameForm/";
import GameCards from "../../components/GameCards/";

import * as gamesService from "../../services/games";

class List extends React.Component {
  getMyGamesList = async () => {
    try {
      const response = await gamesService.getAll(5);
      const json = await response.json();
      const list = [];

      for (let i = 0; i < json.results.length; i++) {
        const game = json.results[i];
        list.push({
          id: i,
          name: game.title,
          genre: game.producer,
          year: game.releaseDate,
          developer: game.director,
        });
      }

      this.props.setGames(list);
    } catch (error) {
      console.log(error);
    }
  };

  updateMyGamesList = (newList) => {
    this.props.setGames(newList);
  };

  componentDidMount() {
    this.getMyGamesList();
  }

  componentDidUpdate() {
    console.log(`We have ${this.props.games.length} games now.`);
  }

  render() {
    return (
      <>
        <div id="list">
          <GameForm
            gamesData={this.props.games}
            onSubmit={this.updateMyGamesList}
          />
          <GameCards gamesData={this.props.games} />
        </div>
      </>
    );
  }
}

const stateToProps = (state) => {
  return {
    games: state.gr.games,
  };
};

const dispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      setGames: (gamesList) => {
        return { type: "SET_GAMES", payload: gamesList };
      },
    },
    dispatch
  );
};

export default connect(stateToProps, dispatchToProps)(List);
