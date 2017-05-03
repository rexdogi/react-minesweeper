import React, {Component} from 'react';
import Node from './Node';

export default class GeneratedArea extends Component {

  constructor(props) {
    super(props);
    this.state = {
      gameField: this.generateArray(this.props.area),
      mines: this.props.mines
    }
  }

  componentDidMount() {
    this.generateMines();
  }

  wrapperStyle = () => {
    return {width: '100%', height: '100%'};
  }

  generateArray(rows) {
    var arr = [];
    for (var i = 0; i < rows; i++) {
      arr[i] = [];
    }
    return arr;
  }

  generateMines() {
    let array = this.state.gameField;
    let area = this.props.area;
    let mines = this.state.mines;
    for(let i = 0; i < area; i++) {
      for(let j = 0; j < area; j++) {
        let x = Math.floor((Math.random() * 10) + 1);
        if (x === 3 && mines > 0 && array[i][j] !== 1) {
          array[i][j] = 1;
          mines--;
        }
      }
    }
    this.setState({gameField: array});
    this.setState({mines: mines}, () => {
      if(this.state.mines > 0) {
        this.generateMines();
      }
    });
  }

  render() {
    let area = this.props.area;
    let nodes = [];
    for(let i = 0; i < area; i++) {
      for(let j = 0; j < area; j++) {
        nodes.push(<Node area={this.props.area}/>);
      }
    }
    return (
      <div className={this.wrapperStyle()}>{nodes}</div>
    )
  }
}
