import React from 'react';

import GameForm from '../../components/GameForm/';
import GameCards from '../../components/GameCards/';

import * as gamesService from "../../services/games";

class List extends React.Component {
  state = {
    games: [],
  };

  getMyGamesList = async () => {
    try {
      const response = await gamesService.getAll(5);
      const json = await response.json();
      const list = [];

      for (let i = 0; i < json.results.length; i++) {
        const game = json.results[i];
        list.push({
          name: game.title,
          genre: game.producer,
          year: game.releaseDate,
          developer: game.director,
        });
      }

      this.setState({ games: list });
    } catch (error) {
      console.log(error);
    }
  };

  updateMyGamesList = (newList) => {
    this.setState({ games: newList });
  };

  componentDidMount() {
    this.getMyGamesList();
  }

  componentDidUpdate() {
    console.log(`We have ${this.state.games.length} games now.`);
  }

  render() {
    return (
      <div id="list">
        <GameForm
          gamesData={this.state.games}
          onSubmit={this.updateMyGamesList}
        />
        <GameCards gamesData={this.state.games} />
      </div>
    );
  }
}

export default List;