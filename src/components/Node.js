import React, {Component} from 'react';

export default class Node extends Component {

  constructor(props ) {
    super(props);
    this.state = {
      isVisible: this.props.isVisible
    }
  }

  componentWillReceiveProps(props) {
    this.setState({isVisible: props.isVisible});
  }

  getBackgroundColor() {
    if(this.state.isVisible === false) {
      return '#6E7B8B';
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

  render() {
    return (
      <div onClick={() => this.props.setVisible(this.props.xPos, this.props.yPos, this.props.value)} style={this.nodeStyle()}>{this.state.isVisible && this.props.value}</div>
    )
  }
}
