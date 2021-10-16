import React from 'react';

class GameForm extends React.Component {
    handlesubmit = (event) => {
        event.preventDefault();
        console.log("submitting form - event:", event);
    }

    render() {
        return (
          <form id="game-form" onSubmit={this.handlesubmit}>
            <label htmlFor="game-name">Title</label>
            <input id="game-name" />
            <button type="submit">Submit new game</button>
          </form>
        );
    }
}

export default GameForm;