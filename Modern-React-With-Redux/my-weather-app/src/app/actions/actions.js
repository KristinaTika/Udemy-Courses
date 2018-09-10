import axios from "axios";

const API_KEY = "75ebc426d85f2084d26ca5c807aaade5";
const rootUrl = `http://api.openweathermap.org/data/2.5/forecast?&appid=${API_KEY}`;


export const FETCH_WEATHER = "FETCH_WEATHER";

export const fetchWeather = (city) => {

    const url = `${rootUrl}&q=${city}`;
    const request = axios.get(url);
    
    return {
        type: FETCH_WEATHER,
        payload: request,
    };
}