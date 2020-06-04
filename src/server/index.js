import axios from 'axios';
// free weather API
const URL = 'https://api.openweathermap.org/data/2.5/weather';
/* 
* got this API key from a youtube tutoria, 
* please go generate your own at https://api.openweathermap.org
* it FREE 
*/
const API_KEY = 'f33a484cf794d08d0148764789aaba32';

export const fetchData = async (country) => {
    const { data } = await axios.get(URL, {
        params: {
            q: country,
            units: 'metric',
            APPID: API_KEY,
        }
    });

    return data;
}