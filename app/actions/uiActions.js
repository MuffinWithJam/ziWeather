import {
  SEARCH_OPEN,
  SEARCH_CLOSE,
  SEARCH_UPDATE,
  WEATHER_UPDATE,
} from '../constants/ui';

export function openSearch() {
  console.log('Action: openSearch');
  return (dispatch) => {
    dispatch({
      type: SEARCH_OPEN,
      payload: {
        searchState: {
          opened: true,
        }
      }
    });
  }
}

export function closeSearch() {
  console.log('Action: closeSearch');
  return (dispatch) => {
    dispatch({
      type: SEARCH_CLOSE,
      payload: {
        searchState: {
          opened: false,
        }
      }
    });
  }
}

export function updateSearch(_text) {
  return (dispatch) => {
    dispatch({
      type: SEARCH_UPDATE,
      payload: {
        searchState: {
          opened: true,
          text: _text,
        }
      }
    });
  }
}

export function updateWeather() {
  console.log('Weather updated');
  return (dispatch) => {
    dispatch({
      type: WEATHER_UPDATE,
      payload: {
        currentWeather: {
          city: "Moscow",
          temperature: "--",
          description: ""
        }
      }
    });
  }
}
