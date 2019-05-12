import React, { Component } from 'react';

class Temp extends Component {

  render() {
    return (
      <div>
        <p className='showTemp'>{this.props.weatherdata}</p>
      </div>
      )
  }

}

export default Temp;

