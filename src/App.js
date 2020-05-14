 import React from "react";
 import Weather from "./components/weather";
 import Form from "./components/form";
 class App extends React.Component {
  constructor() {
    super()
    this.appId ='487309348ee79742b323bb7cc6bd41f5'
    this.apiURL = 'http://api.openweathermap.org/data/2.5/forecast'
    this.tbilisi='Tbilisi'
    this.batumi='Batumi'
    this.kutaisi='Kutaisi'
    this.state = {
      data: null
    }
  }
 
   getWeather = async (e) => {
     e.preventDefault();   
     const names=['Kutaisi','Tbilisi','Batumi'];
     let wURL = `${this.apiURL}?q=${names}&cnt=40&appid=${this.appId}`;
     const api_call = await fetch(wURL);
     const response = await api_call.json();
     console.log(response);
     const k=[];
     for(let i=0; i<40;i+=8){
     k.push(response.list[i]);
     }
    console.log(k);

       this.setState({
         list:response.list,
         temperature: k.map(i=> {return "  "+ i.main.temp}),
         date:  k.map(o=> {return  "  "+o.dt_txt}),
         city: response.city.name,
         error: ""
       }) 
      }
  
   render() {
     return (
      <div className="col-xs-7 form-container">
      <Form loadWeather={this.getWeather} />
        <Weather
          temperature={this.state.temperature}
          date={this.state.date}
          city={this.state.city}
          error={this.state.error}
        />
      </div>
     )
   }
 }
 export default App;