import {
  SEARCH_OPEN,
  SEARCH_CLOSE,
  SEARCH_UPDATE,
  WEATHER_UPDATE,
} from '../constants/ui';

const initialState = {
  searchState: {
    opened: false,
    text: "",
  }
}

export default function ui(state = initialState, action) {
  switch(action.type) {
    case SEARCH_OPEN:
      return {...state, ...action.payload, error: ''};

    case SEARCH_CLOSE:
      return {...state, ...action.payload, error: ''};

    case SEARCH_UPDATE:
      return {...state, ...action.payload, error: ''};

    case WEATHER_UPDATE:
      return {...state, ...action.payload, error: ''};

    default:
      return state;
  }
}
