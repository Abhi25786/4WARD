import {combineReducers} from 'redux';
import types from '../types';
import auth from './auth';
import home from './home';
import intro from './intro';


const appReducer = combineReducers({
  auth,
  intro,
  home,
});

const rootReducer = (state, action) => {
  if (action.type == types.CLEAR_REDUX_STATE) {
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;
