import React, { Component } from 'react';

class Other extends Component {

  render() {
    return (
      <div className='other'>
        <p>humidity: {this.props.humidity}</p>
        <p>wind speed: {this.props.wind}</p>
      </div>
      )
  }

}

export default Other;
