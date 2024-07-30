// reducers.js
import { ACTION_TYPE } from './actions';

const initialState = {
    // define your initial state
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_TYPE:
            return {
                ...state,
                // handle action
            };
        default:
            return state;
    }
};

export default rootReducer;
