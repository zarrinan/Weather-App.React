import React, { Component } from 'react';

class Location extends Component {

  render() {
    return (
      <div className='location'>
         <p>lat: {this.props.lat}</p>
         <p>lon: {this.props.lon}</p>
      </div>
      )
  }

}

export default Location;
