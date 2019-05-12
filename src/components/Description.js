import React, { Component } from 'react';

class Description extends Component {

  render() {
    return (
      <div>
        <p className='weatherDesc'>Weather: {this.props.weatherdata}</p>
        <p className='weatherDesc2'>{this.props.main}</p>
      </div>
      )
  }

}

export default Description;

