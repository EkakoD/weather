
import React from "react";

const SWeather = (props) => {
    return(
        <div>
        { props.city && <p>Location: {props.city}</p>}
        {props.temperature && <p>Temperature: {props.temperature}</p>}
        {props.date && <p>Date : {props.date}</p>}
        {props.error && <p>{props.error}</p>}

    </div>
    )
}

export default SWeather;