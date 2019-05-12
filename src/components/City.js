import React, { Component } from 'react';

class City extends Component {

  render() {
    return (
      <div>
        <p className='city'>{this.props.weatherdata}</p>
      </div>
      )
  }

}

export default City;


