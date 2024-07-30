// actions.js
export const ACTION_TYPE = 'ACTION_TYPE';

export const actionCreator = (data) => ({
    type: ACTION_TYPE,
    payload: data,
});
