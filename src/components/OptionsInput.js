import React, {Component} from 'react';

export default class OptionsInput extends Component {

  mineInputs = () => {
    return {margin: '0 auto', 'width': '600px', 'marginTop': '20px'}
  }

  handleMineInput() {

  }

  handleAreaInput() {

  }

  handleGenerateButton() {

  }

  render() {
    return (
      <div style={this.mineInputs()}>
        <label>Area: </label>
        <input type="number" />
        <label>Mines: </label>
        <input type="number" />
        <button>Generate</button>
      </div>
    );
  }
}
