//rafce
import React, {useState,useEffect} from 'react';
import './style.css';
import WeatherCard from './weathercard';

const Temp = () => {
    const [searchValue,setSearchValue]= useState("sibsagar");
    const [tempInfo, setTempInfo] = useState({}); //empty array passsing initially
    //for the first time by default it should get something
    const getWeatherInfo = async()=> {
        try{
            let url=`https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=75b31160e847eff782e127fda7c5665e`;
            const res= await fetch(url);
            const data= await res.json();

            const {temp,humidity,pressure} =data.main;
            console.log(temp);
            console.log(humidity);
            console.log(pressure);
            const {main:weathermood}=data.weather[0];
            const {name} =data;
            const {speed} =data.wind;
            const {country,sunset} =data.sys; 
            //object creating out of weather properties
            const myNewWeatherInfo ={
                temp, humidity, pressure, weathermood, name, speed, country, sunset
            };
            setTempInfo(myNewWeatherInfo);
        }catch(error){
            console.log(error);
        }
    };
    //automatic function call just after refreshing the page is can be done by useEffect hook
    useEffect(() => {getWeatherInfo()}, []);//passing an empty array that means value reflects on the only very first time the page is refreshed
  return (
       <>
      <div className="wrap">
        <div className="search">
          <input
            type="search"
            placeholder="search..."
            autoFocus
            id="search"
            className="searchTerm"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />

          <button
            className="searchButton"
            type="button"
            onClick={getWeatherInfo}
            >
            Search
          </button>
        </div>
        </div>

       <WeatherCard tempinfo={tempInfo}/>
    </>
  )
}

export default Temp
