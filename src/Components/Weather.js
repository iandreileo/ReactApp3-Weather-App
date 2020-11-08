import React from 'react';


const Weather = (props) => {
    console.log(props)
    return (
        <div style={{textAlign: 'center'}}>
            <h2>{props.name + ', ' + props.sys.country}</h2>
            <h4>Temperature: {props.main.temp}</h4>
        </div>
    )
}

export default Weather;