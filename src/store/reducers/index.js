import {combineReducers} from 'redux';
import authReducer from './authReducer';
import newsReducer from './newsReducer';
import chatbotReducer from './chatbotReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  news: newsReducer,
  chatbot: chatbotReducer,
});

export default rootReducer;
