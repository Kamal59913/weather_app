import React, { useState,useEffect } from 'react'

const Weathercard = ({tempinfo}) => { // as we are passing the array of the objects
    // again doing object destructuring.
    const [weatherState, setWeatherState] = useState("");
    const {
        temp, humidity, pressure, weathermood, name, speed, country, sunset
    } =tempinfo;
//basically storing if uncomment the above code then only put weathermood,temp etc
    useEffect(() => {
        if(weathermood){
            switch(weathermood){
                case 'Clouds':setWeatherState('wi-day-cloudy');
                break;
                case 'Haze':setWeatherState('wi-fog');
                break;
                case 'Clear':setWeatherState('wi-day-sunny');
                break;
                case 'Mist':setWeatherState('wi-dust');
                break;
                default:
                setWeatherState('wi-day-sunny');
                break;

            }
        }
    }, [weathermood]);//only if the weathermood changes

    let sec=sunset;
    let date= new Date(sec*1000);//here we got the miliseconds which we can easily convert it into hourse time
    let timeStr = `${date.getHours()}:${date.getMinutes()}`
    //converting sunset which is in seconds into hours
  return (
    <>
       <article className='widget'>
            <div className='weatherIcon'>
                <i className={`wi ${weatherState}`}></i>
            </div>
            <div className='weatherInfo'>
                <div className='temperature'>
                    <span>{temp}&deg;</span>
                </div>               
            
            <div className='description'>
            <div className='weatherCondition'>{weathermood}</div>
                <div className='place'>
                    {name}, {country}
                </div>
            </div>
            </div>
            <div className='date'>
                    {new Date().toLocaleString()}
            </div>
            {/* 4 column section */}
            <div className='extra-temp'>
                <div className='temp-info-minmax'>
                    <div className='two-sided-section'>
                        <p>
                            <i className={'wi wi-sunset'}></i>
                            </p>
                        <p className='extra-info-leftside'> {timeStr} <br/>
                        Sunset
                        </p>

                    </div>
                    <div className='two-sided-section'>
                        <p>
                            <i className={'wi wi-humidity'}></i>
                            </p>
                        <p className='extra-info-leftside'>{humidity}<br/>
                        Humidity
                        </p>

                    </div>
                </div>
                <div className='weather-extra-info'>
                <div className='two-sided-section'>
                        <p>
                            <i className={'wi wi-rain'}></i>
                            </p>
                        <p className='extra-info-leftside'> {pressure} <br/>
                        Pressure
                        </p>

                    </div>
                    <div className='two-sided-section'>
                        <p>
                            <i className={'wi wi-strong-wind'}></i>
                            </p>
                        <p className='extra-info-leftside'> {speed}<br/>
                        Speed
                        </p>

                    </div>
                </div>
            </div>
        </article>
    </>
  )
}

export default Weathercard

// https://www.youtube.com/watch?v=EHTWMpD6S_0