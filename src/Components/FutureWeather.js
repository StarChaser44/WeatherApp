import React from 'react';

const FutureWeather = props => (
	<div className="weather__info">
    {	
	 	props.city && props.country && <p className="weather__key"> Location: 
	 		<span className="weather__value"> { props.city } , { props.country }</span>
	 	</p> 
	 }
	 {	
	 	props.futureTemperature && <p className="weather__key"> Temperature #1: 
	 		<span className="weather__value"> { props.futureTemperature[0] }</span>
	 	</p> 
	 }
	 { 	
	 	props.futureTemperature && <p className="weather__key"> Temperature #2: 
	 		<span className="weather__value"> { props.futureTemperature[1] }</span>
	 	</p> 
	 }
	 { 	
	 	props.futureTemperature && <p className="weather__key"> Temperature #3: 
	 		<span className="weather__value"> { props.futureTemperature[2] } </span>
	 	</p> 
	 }
	 { 	
	 	props.futureTemperature && <p className="weather__key"> Temperature #4: 
	 		<span className="weather__value"> { props.futureTemperature[3] } </span>
	 </p> 
     }
     { 	
	 	props.futureTemperature && <p className="weather__key"> Temperature #5: 
	 		<span className="weather__value"> { props.futureTemperature[4] } </span>
	 </p> 
	 }
	 { 
	 	props.error && <p className="weather__error">{ props.error }</p>  
	 }
	</div>
);



export default FutureWeather;