import React from 'react';
import Title from './Components/Title'
import Form from './Components/Form'
import Weather from './Components/Weather'
import ZipForm from './Components/FutureWeatherForm'
import FutureWeather from './Components/FutureWeather';

const APIKEY = '2fbf05eb42c0f9772faff07d2a24da09';

 class App extends React.Component {
  state = {
    temperature: undefined,
    futureTemperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined,
    zipCode: undefined
    
  }

    getFutureWeather = async (e) => {
      e.preventDefault();
      const zipCode = e.target.elements.zipcode.value;
      const country = e.target.elements.country.value;
      const futureForecastAPI = await fetch(`http://api.openweathermap.org/data/2.5/forecast?zip=${zipCode},${country}&appid=${APIKEY}`);
      const resp = await futureForecastAPI.json();
      if(zipCode && country){
        console.log(resp);
        this.setState({
          futureTemperature:  [
            resp.list[0].weather[0].description,
            resp.list[1].weather[0].description,
            resp.list[2].weather[0].description,
            resp.list[3].weather[0].description,
            resp.list[4].weather[0].description
          ],
          temperature: '',
          city: resp.city.name,
          humidity: '',
          description: '',
          error: '',
          zipCode: ''         
        });
      }else { 
        this.setState({
         temperature: undefined,
         city: undefined,
         country: undefined,
         humidity:undefined,
         description: undefined,
         error: "Please enter the values"
       });
      }
      
    }


   getWeather = async (e) => {
     e.preventDefault();
     const city = e.target.elements.city.value;
     const country = e.target.elements.country.value;
     const currentForecastAPI = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${APIKEY}&units=metric`)
     const data = await currentForecastAPI.json();
     if(city && country) {
      console.log(data);
      this.setState({
        temperature: data.main.temp,
        futureTemperature: '',
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: " "
      });
     } else { 
       this.setState({
        temperature: undefined,
        futureTemperature: undefined,
        city: undefined,
        country: undefined,
        humidity:undefined,
        description: undefined,
        error: "Please enter the values"
      });
     }
   }
   render() {
    return (
      <div>
        <div className="wrapper">
          <div className="main">
            {/* <div className="container"> */}
              <div className="row">
                <div className="col-xs-7 title-container">
                  <Title />
                </div>
                <div className="col-xs-7 form-container">
                  <Form getWeather={ this.getWeather } />
                  <ZipForm getFutureWeather = { this.getFutureWeather } />
                  <FutureWeather
                    futureTemperature = { this.state.futureTemperature }
                    city = { this.state.city }
                    country = { this.state.country }
                  />
                  <Weather 
                    temperature={ this.state.temperature } 
                    humidity={ this.state.humidity }
                    city={ this.state.city }
                    country={ this.state.country }
                    description={ this.state.description }
                    error={ this.state.error }
                  />
                </div>
              </div>
            </div>
          {/* </div> */}
        </div>
      </div>
    );
  }
};



 export default App;