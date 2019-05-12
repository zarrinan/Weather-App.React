import React, { Component } from "react";

class SearchForm extends Component {
  render() {
    return (
      <form
        className="dataEntry"
        onSubmit={this.props.handleZipcodeSubmit}
        >
        <input className="forZip2"
            type="text"
            value={this.props.zipcode}
            name="search"
            placeholder="Enter Zip Code"
            onChange={this.props.handleZipcodeChange} // add for NUMBER after this
        /><br/>
          <button className="forSubmit2">Search Weather</button>
      </form>
    );
  }
}

export default SearchForm;
