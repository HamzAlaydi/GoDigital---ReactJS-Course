import React from "react";
import { create } from "../../services/games";
import "./styles.css";

class GameForm extends React.Component {
  state = {
    formData: {},
    errors: {}
  };

  handleSubmit = async event => {
    try {
      event.preventDefault();

      const data = this.state.formData;

      const gameObj = {
        name: data["game-name"],
        genre: data["game-genre"],
        year: parseInt(data["game-year"]),
        developers: data["game-developer"]
      };

      const createdGames = await create(gameObj);
      const myNewGame = { id: createdGames[0]._id, ...createdGames[0] };

      this.props.onSubmit([...this.props.gamesData, myNewGame]);
    } catch (error) {
      console.error(error);
    }
  };

  handleChange = event => {
    const { name, value } = event.target;

    if (name === "game-year" && isNaN(value)) {
      this.setState({
        errors: { ...this.state.errors, [name]: "Please use a number" }
      });
      return;
    } else {
      this.setState({
        formData: { ...this.state.formData, [name]: value },
        errors: {}
      });
    }
  };

  render() {
    return (
      <div id="game-form">
        <form ref={this.formRef} onSubmit={this.handleSubmit}>
          <div className="form-item">
            <label htmlFor="game-name">Title</label>
            <input
              id="game-name"
              name="game-name"
              value={this.state.formData["game-name"]}
              onChange={this.handleChange}
            />
          </div>

          <div className="form-item">
            <label htmlFor="game-genre">Genre</label>
            <input
              id="game-genre"
              name="game-genre"
              value={this.state.formData["game-genre"]}
              onChange={this.handleChange}
            />
          </div>

          <span style={{ color: "red" }}>{this.state.errors["game-year"]}</span>
          <div className="form-item">
            <label htmlFor="game-year">Year</label>
            <input
              id="game-year"
              name="game-year"
              value={this.state.formData["game-year"]}
              onChange={this.handleChange}
            />
          </div>

          <div className="form-item">
            <label htmlFor="game-developer">Developer</label>
            <input
              id="game-developer"
              name="game-developer"
              value={this.state.formData["game-developer"]}
              onChange={this.handleChange}
            />
          </div>

          <button type="submit">Submit new game</button>
        </form>
      </div>
    );
  }
}

export default GameForm;
