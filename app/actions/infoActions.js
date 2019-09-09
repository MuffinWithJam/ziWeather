import {
  GET_MAININFO_REQUEST,
  GET_MAININFO_SUCCESS,
  GET_MAININFO_FAIL,
} from '../constants/info';
import { APIKEY } from '../constants/api';

function requestMainInfo() {
  return {
      type: GET_MAININFO_REQUEST,
      payload: {
        isFetching: true,
      }
  }
}

function recieveMainInfo(city, temp, desc, isGeo) {
  return {
      type: GET_MAININFO_SUCCESS,
      payload: {
        currentWeather: {
          city: city,
          temperature: temp,
          description: desc,
          isGeo: isGeo,
        },
        isFetching: false,
      }
  }
}

function mainInfoError() {
  return {
    type: GET_MAININFO_FAIL,
    payload: {
      isFetching: false,
      error: 'Request error'
    }
  }
}

export function getMainInfoFromGeo(lat, lon) {
  var url = "https://api.openweathermap.org/data/2.5/weather?lat=" +lat+"&lon="+lon+"&appid="+APIKEY;

  return (dispatch) => {
    dispatch(requestMainInfo);

    return fetch(url)
        .then(
            response => response.json(),
            error => {
              console.log('An error occurred.', error);
              dispatch(mainInfoError());
            }
        )
        .then(json => {
            var tempCelsius = parseInt(json.main.temp - 273.15);
            dispatch(recieveMainInfo(json.name, tempCelsius, json.weather[0].description, true));
            console.log(json);
            }
        )
  }
}

export function getMainInfo(cityText) {
    var url = "https://api.openweathermap.org/data/2.5/weather?lat=" +lat+"&lon="+lon+"&appid="+APIKEY;

    return (dispatch) => {
        dispatch(requestMainInfo);

        return fetch(url)
            .then(
                response => response.json(),
                error => {
                    console.log('An error occurred.', error);
                    dispatch(mainInfoError());
                }
            )
            .then(json => {
                    var tempCelsius = parseInt(json.main.temp - 273.15);
                    dispatch(recieveMainInfo(json.name, tempCelsius, json.weather[0].description, true));
                    console.log(json);
                }
            )
    }
}
