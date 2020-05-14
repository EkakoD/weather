
import React from "react";

class Weather extends React.Component{

    render(){

        return(

            <div className="weather-info">
                {
                     this.props.city && <p className="weather__key">Location: 
                        <span className="weather__value">  {this.props.city}</span>                    
                    </p> 
                }
                
                {
                    this.props.temperature && <p className="weather__key">Temperature: 
                        <span className="weather__value">  {this.props.temperature} </span>
                    </p>
                }
                  {
                    this.props.date && <p className="weather__key">Date: 
                        <span className="weather__value">  {this.props.date}</span>
                    </p>
                }
                {
                    this.props.error && <p className="weather__error">{this.props.error}</p>
                }
        
            </div>
        )
    }
}

export default Weather;