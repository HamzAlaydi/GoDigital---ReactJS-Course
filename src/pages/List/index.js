import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import GameForm from "../../components/GameForm/";
import GameCards from "../../components/GameCards/";

import * as gamesService from "../../services/games";

class List extends React.Component {
  getMyGamesList = async () => {
    try {
      const games = await gamesService.getAll();
      const list = [];

      for (let i = 0; i < games.length; i++) {
        const {_id, ...game} = games[i];

        list.push({
          id: _id,
          ...game
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
