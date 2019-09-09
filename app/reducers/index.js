import {combineReducers} from 'redux';
import mainInfoReducer from './mainInfo';
import uiReducer from './ui';

export default combineReducers({
  mainInfoState: mainInfoReducer,
  uiState: uiReducer
});
