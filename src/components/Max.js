import React, { Component } from 'react';

class Max extends Component {

  render () {
    return (
      <div className='temps'>
        <p className='highTemp'> <span className='forSpan'>Max</span><br/> {this.props.max}</p>
        <p className='highTemp'> <span className='forSpan'>Max</span> <br/> {this.props.min}</p>
      </div>
    )
  }
}

export default Max;

