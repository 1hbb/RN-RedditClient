import {combineReducers} from 'redux';
import mainFeedReducer from './mainFeedReducer';
import loginReducer from './loginReducer';
import AboutSubredditReducer from './aboutSubbredditReducer';
import AboutUserReducer from './fetchAboutUserReducer';
import fetchMyPostsReducer from './fetchMyPostsReducer';

const rootReducer = combineReducers({
  mainFeedData: mainFeedReducer,
  login: loginReducer,
  about: AboutSubredditReducer,
  aboutUser: AboutUserReducer,
  myPosts: fetchMyPostsReducer,
});

export default rootReducer;
