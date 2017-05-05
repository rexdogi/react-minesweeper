import React, {Component} from 'react';
import Node from './Node';

export default class GeneratedArea extends Component {

  constructor(props) {
    super(props);
    this.state = {
      gameField: this.generateArray(this.props.area),
      mines: this.props.mines,
      win: false,
      lose: false,
      visibleCount: 0
    }
    this.setVisible = this.setVisible.bind(this);
    this.setFlagged = this.setFlagged.bind(this);
  }

  initialize() {
    this.setState({gameOver: false, visibleCount: 0, win: false, lose: false});
    this.generateMines();
  }

  componentDidMount() {
    this.initialize();
  }

  setFlagged(x, y) {
    this.setState({gameField: [...this.state.gameField, ...this.state.gameField[x][y].isFlagged = !this.state.gameField[x][y].isFlagged]});
  }

  setVisible(x, y, value, isVisible) {
    if(this.state.lose || this.state.win || isVisible) {
      return;
    }
    if(value !== 'X') {
          this.setState({visibleCount: this.state.visibleCount++});
    }
    if(value === '') {
      this.revealEmpty(x, y);
    } else {
      this.setState({gameField: [...this.state.gameField, ...this.state.gameField[x][y].isVisible = true]});
      this.setState({visibleCount: this.state.visibleCount++});
      this.checkWin();
    }
    if(value === 'X') {
      this.setState({lose: true});
    }
  }

  checkWin() {
    console.log(this.state.visibleCount + ' ' + (this.props.area * this.props.area - this.props.mines));
    if(this.state.visibleCount >= (this.props.area * this.props.area - this.props.mines) && this.state.gameOver === false) {
      this.setState({win: true}, () => {
      });
    }
  }

  revealEmpty(i, j) {
    const length = this.props.area;
    let array = this.state.gameField;
    for(let a = i - 1; a < i + 2; a++) {
      for(let b = j - 1; b < j + 2; b++) {
        if (a >= 0 && b >= 0 && a < length && b < length && array[a][b].isVisible === false) {
          array[a][b].isVisible = true;
          this.setState({visibleCount: this.state.visibleCount++}, () => this.checkWin());
          if(array[a][b].nearby === '') {
            this.revealEmpty(a, b);
          }
        }
      }
    }
    this.setState({gameField: array}, () => {
    });

  }

  componentWillReceiveProps(props) {
    this.setState({gameField: this.generateArray(props.area), mines: props.mines}, () => {
        this.initialize();
    });
  }

  wrapperStyle = () => {
    return {width: '100%', height: '100%'};
  }

  generateArray(rows) {
    var arr = [];
    for (var i = 0; i < rows; i++) {
      arr[i] = [];
    }
    for(var i = 0; i < rows; i++) {
      for(var j = 0; j < rows; j++) {
        arr[i][j] = {value: 0, isVisible: false, nearby: '', isFlagged: false};
      }
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
        if (x === 3 && mines > 0 && array[i][j].value !== 1) {
          array[i][j].value = 1;
          mines--;
        } else if (array[i][j].value !== 1) {
          array[i][j].value = 0;
        }
      }
    }
    this.setState({gameField: array});
    this.setState({mines: mines}, () => {
      if(this.state.mines > 0) {
        this.generateMines();
      }
    });
    //let area = this.props.area;
    for(let i = 0; i < area; i++) {
      for(let j = 0; j < area; j++) {
          this.setNodesText(i, j);
      }
    }
  }

  setNodesText(i, j) {
    if(this.state.gameField[i][j].value === 1) {
      console.log(true);
      this.setState({gameField: [...this.state.gameField, ...this.state.gameField[i][j].nearby = 'X']})
    } else {
        return this.getNearbyMines(i, j);
    }
  }

  getNearbyMines(i, j) {
    let nearby = 0;
    let array = this.state.gameField;
    const length = this.props.area;
    for(let a = i - 1; a < i + 2; a++) {
      for(let b = j - 1; b < j + 2; b++) {
        if (a >= 0 && b >= 0 && a < length && b < length && array[a][b].value === 1) {
          nearby++;
        }
      }
    }
    if(nearby === 0) {
          this.setState({gameField: [...this.state.gameField, ...this.state.gameField[i][j].nearby = '']})
    } else {
        this.setState({gameField: [...this.state.gameField, ...this.state.gameField[i][j].nearby = nearby]})
    }
  }

  render() {
    const win = 'You won';
    const lose = 'You lost';
    let area = this.props.area;
    let nodes = [];
    for(let i = 0; i < area; i++) {
      for(let j = 0; j < area; j++) {
        nodes.push(<Node isFlagged={this.state.gameField[i][j].isFlagged} setFlagged={this.setFlagged} setVisible={this.setVisible} value={this.state.gameField[i][j].nearby} isVisible={this.state.gameField[i][j].isVisible} area={this.props.area} xPos={i} yPos={j}/>);
      }
    }
    return (
      <div>
        <div>{this.state.win && win}</div>
        <div>{this.state.lose && lose}</div>
      <div className={this.wrapperStyle()}>{nodes}</div>
      </div>
    )
  }
}
