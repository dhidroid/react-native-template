import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer'; // Assuming rootReducer will be created next

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
