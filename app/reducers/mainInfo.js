import {
  GET_MAININFO_REQUEST,
  GET_MAININFO_SUCCESS,
  GET_MAININFO_FAIL,
} from '../constants/info';

const initialState = {
    currentWeather: {
        city: "Moscow",
        temperature: "--",
        description: "",
        isGeo: true,
    },
    isFetching: false,
    error: '',
}

export default function mainInfo(state = initialState, action) {

  switch(action.type) {
    case GET_MAININFO_REQUEST:
      return {...state, ...action.payload, error: ''};

    case GET_MAININFO_SUCCESS:
      return {...state, ...action.payload, error: ''};

    case GET_MAININFO_FAIL:
      return {...state, ...action.payload, error: ''};

    default:
      return state;
  }
  /**switch (action.type) {
    case GET_MAININFO_REQUEST:
      return {...state, city: action.payload, error: ''}

    case GET_MAININFO_SUCCESS:
      return {
        ...state,
        city: action.payload.city,
        temperature: action.payload,
        error: ''
      }

    case GET_MAININFO_FAIL:
      return {
        ...state,
        error: action.payload
      }


  }*/
}
