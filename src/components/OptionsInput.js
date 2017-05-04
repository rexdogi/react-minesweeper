import React, {Component} from 'react';

export default class OptionsInput extends Component {

  constructor(props) {
    super(props);
    this.state = {
      area: 5,
      mines: 10
    }
  }

  mineInputs = () => {
    return {margin: '0 auto', 'width': '600px', 'marginTop': '20px'}
  }

  handleAreaInput(e) {
    this.setState({area: e.target.value})
  }

  handleMineInput(e) {
    this.setState({mines: e.target.value})
  }

  render() {
    return (
      <div style={this.mineInputs()}>
        <label>Length: </label>
        <input type="number" value={this.state.area} onChange={(event) => this.handleAreaInput(event)}/>
        <label>Mines: </label>
        <input type="number" value={this.state.mines} onChange={(event) => this.handleMineInput(event)} />
        <button onClick={() => this.props.handleGenerateButton(this.state.area, this.state.mines)}>Generate</button>
      </div>
    );
  }
}
