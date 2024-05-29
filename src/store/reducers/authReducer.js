const initialState = {
  user: null,
  token: null,
  isLoading: false,
  error: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_REQUEST':
      return {...state, isLoading: true, error: null};
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        isLoading: false,
        user: action.payload.user,
        token: action.payload.token,
      };
    case 'LOGIN_FAILURE':
      return {...state, isLoading: false, error: action.payload};
    case 'LOGOUT':
      return {...state, user: null, token: null};
    default:
      return state;
  }
};

export default authReducer;
