import { combineReducers } from 'redux';
import userReducer from './userReducer'; // Import the user reducer

const rootReducer = combineReducers({
  // Add your reducers here
  user: userReducer, // Add the user reducer to the combined reducers
});

export default rootReducer;
