import React, {Component} from 'react';

class App extends Component {

  mineWrapper = () => {
    return {'width': '500px', 'height': '500px', margin: '0 auto', 'marginTop': '100px', border: '1px solid black'}
  }
  mineInputs = () => {
    return {margin: '0 auto', 'width': '500px', 'marginTop': '50px'}
  }
  render() {
    return (
      <div>
        <div style={this.mineInputs()}>
          <label>Area: </label>
          <input type="number" />
        </div>
        <div style={this.mineWrapper()}></div>
      </div>
    )
  }
}

export default App;
