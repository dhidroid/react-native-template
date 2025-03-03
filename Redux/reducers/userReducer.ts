interface UserState {
  isAuthenticated: boolean;
  userInfo: null | { name: string; email: string };
}

interface UserState {
  isAuthenticated: boolean;
  userInfo: null | { name: string; email: string };
}

interface UserState {
  isAuthenticated: boolean;
  userInfo: null | { name: string; email: string };
}

const initialState: UserState = {
  isAuthenticated: false,
  userInfo: null,
};

const userReducer = (state = initialState, action: { type: string; payload?: any }) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        isAuthenticated: true,
        userInfo: action.payload,
      };
    case 'LOGOUT':
      return {
        ...state,
        isAuthenticated: false,
        userInfo: null,
      };
    default:
      return state;
  }
};

export default userReducer;
