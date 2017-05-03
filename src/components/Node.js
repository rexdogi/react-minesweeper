import React, {Component} from 'react';

export default class Node extends Component {

  nodeStyle = () => {
    return {
      width: (600 / this.props.area) - 2 + 'px',
      height: (600 / this.props.area) - 2 + 'px',
      border: '1px solid black',
      //display: 'inline-block',
      'backgroundColor': '#6E7B8B',
      cursor: 'pointer',
      float:'left',
      'verticalAlign': 'top'
    }
  }

  render() {
    return (
      <div style={this.nodeStyle()}></div>
    )
  }
}
