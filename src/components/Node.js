import React, {Component} from 'react';

export default class Node extends Component {

  constructor(props ) {
    super(props);
    this.state = {
      isVisible: this.props.isVisible,
      flagged: false
    }
  }

  componentWillReceiveProps(props) {
    this.setState({isVisible: props.isVisible});
  }

  getBackgroundColor() {
    if(this.state.isVisible === false) {
      if(this.state.flagged === true) {
        return '#00FF1E';
      }
      return '#6E7B8B';
    }
    if(this.props.value === 'X') {
      return '#FF0000';
    }
    return '#b8c0c9';
  }

  nodeStyle = () => {
    return {
      width: (600 / this.props.area) - 2 + 'px',
      height: (600 / this.props.area) - 2 + 'px',
      border: '1px solid black',
      'backgroundColor': this.getBackgroundColor(),
      cursor: 'pointer',
      float: 'left',
      'verticalAlign': 'top',
      'textAlign': 'center',
      'lineHeight': (600 / this.props.area) - 2 + 'px'
    }
  }

  handleClick() {
    if(!this.state.flagged) {
      this.props.setVisible(this.props.xPos, this.props.yPos, this.props.value, this.state.isVisible);
    }
  }

  hanldleRightClick(e) {
    e.preventDefault();
    this.setState({flagged: !this.state.flagged})
  }

  render() {
    return (
      <div onContextMenu={(event) => this.hanldleRightClick(event)} onClick={() => this.handleClick()} style={this.nodeStyle()}>{this.state.isVisible && this.props.value}</div>
    )
  }
}
