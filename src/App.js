import React, { Component } from 'react';
import './reset.css'
import './App.css';
import axios from 'axios';
import SearchForm from './components/SearchForm';
import Description from './components/Description';
import City from './components/City';
import Temp from './components/Temp';
import Max from './components/Max';
import Location from './components/Location';
import Other from './components/Other';




class App extends Component {
  constructor() {
    super();
    this.state = {
      apiData: [],
      zipcode: '',
      temp: '',
      city: '',
      lon: '',
      lat:'',
      max: '',
      min: '',
      humidity: '',
      wind: '',
      description: '',
    }
    this.handleZipcodeChange = this.handleZipcodeChange.bind(this);
    this.handleZipcodeSubmit = this.handleZipcodeSubmit.bind(this);
  }

handleZipcodeChange(event) {
  this.setState({
    zipcode: event.target.value
  });
}

handleZipcodeSubmit(event) {
  event.preventDefault();
  let url = `https://api.openweathermap.org/data/2.5/weather?zip=${this.state.zipcode}&units=imperial&appid=5af0320b9917cd01193d15669c155064`;

  axios(url)
  .then(res => {
    this.setState((prevState) => {
      console.log(res.data)
      return { apiData: res.data,
               temp: res.data.main.temp,
               city: res.data.name,
               max: res.data.main.temp_max,
               min: res.data.main.temp_min,
               lon: res.data.coord.lon,
               lat: res.data.coord.lat,
               humidity: res.data.main.humidity,
               wind: res.data.wind.speed,
               main: res.data.weather[0].main,
               description: res.data.weather[0].description,
      }
    })
  }).catch(err => console.log(err));
}

  render() {
    return (
      <div className='page'>
      <div className="mainPage">
        <SearchForm
              handleZipcodeChange={this.handleZipcodeChange}
              zipcode={this.state.zipcode}
              handleZipcodeSubmit={this.handleZipcodeSubmit} />
        <City weatherdata={this.state.city}/>
        <Location lon={this.state.lon} lat={this.state.lat}/>
        <Temp weatherdata={this.state.temp}/>
        <Description weatherdata={this.state.description} main={this.state.main}/>
        <Max min={this.state.min} max={this.state.max}/>
        <Other humidity={this.state.humidity} wind={this.state.wind}/>
      </div>
      </div>
    );
  }
}

export default App;
