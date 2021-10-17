import React from 'react';
import "./styles.css";

class GameForm extends React.Component {
    constructor() {
      super();
      this.formRef = React.createRef();
    }

    componentDidMount() {
      this.addEventToForm();
    }

    handlesubmit = (event) => {
        event.preventDefault();

        const data = {};
        
        console.log("elements: ", event.target.elements);
        const formItems = event.target.elements;
        for (let i = 0; i < formItems.length; i++) {
          const name = formItems[i].name;
          const value = formItems[i].value;
          if (name && name.length > 0) data[name] = value;         
        }

        console.log({data});
        // do something with the data
    }

    addEventToForm() {
      if(this.formRef) {
        this.formRef.current.addEventListener("submit", this.handlesubmit)
      }
    }

    render() {
        return (
          <div id="game-form">
            <form ref={this.formRef}>
              <div className="form-item">
                <label htmlFor="game-name">Title</label>
                <input id="game-name" name="game-name" />
              </div>

              <div className="form-item">
                <label htmlFor="game-genre">Genre</label>
                <input id="game-genre" name="game-genre" />
              </div>

              <div className="form-item">
                <label htmlFor="game-year">Year</label>
                <input id="game-year" name="game-year" />
              </div>

              <div className="form-item">
                <label htmlFor="game-developer">Developer</label>
                <input id="game-developer" name="game-developer" />
              </div>

              <button type="submit">Submit new game</button>
            </form>
          </div>
        );
    }
}

export default GameForm;