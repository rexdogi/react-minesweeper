import React, {Component} from 'react';
import OptionsInput from './components/OptionsInput';
import GeneratedArea from './components/GeneratedArea';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      area: 10,
      mines: 20
    }
  }

  mineWrapper = () => {
    return {'width': '600px', 'height': '600px', margin: '0 auto', 'marginTop': '20px', border: '1px solid black'}
  }
  render() {
    return (
      <div>
        <OptionsInput/>
        <div style={this.mineWrapper()}>
          <GeneratedArea area={this.state.area} mines={this.state.mines}/>
        </div>
      </div>
    )
  }
}

export default App;
