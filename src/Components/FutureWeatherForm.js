import React from 'react';

const ZipForm = (props) => {
    return (
        <div>
            <form onSubmit={props.getFutureWeather}>
                <input type="text" name= "country" placeholder="Country" />
                <input type="text" name= "zipcode" placeholder="Zip Code" />
                <button > Future Forecast</button>
            </form>
        </div>
    );
}

export default ZipForm