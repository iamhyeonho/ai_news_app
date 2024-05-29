const initialState = {
  messages: [],
  isLoading: false,
  error: null,
};

const chatbotReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SEND_MESSAGE_REQUEST':
      return {...state, isLoading: true, error: null};
    case 'SEND_MESSAGE_SUCCESS':
      return {
        ...state,
        isLoading: false,
        messages: [...state.messages, action.payload],
      };
    case 'SEND_MESSAGE_FAILURE':
      return {...state, isLoading: false, error: action.payload};
    default:
      return state;
  }
};

export default chatbotReducer;
