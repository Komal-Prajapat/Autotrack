// /* eslint-disable object-shorthand */
// import { combineReducers } from "redux";
// import {
//   getPrivacyPolicyReducer,
  
// } from "./Reducerfile";
// // import { LOGOUT } from "../type";

// const rootReducer = combineReducers({
//   getPrivacyPolicy:getPrivacyPolicyReducer,
// });

// const rootReducerWrapper = (state, action) => {
//   if (action.type === LOGOUT) {
//     return rootReducer(undefined, action);
//   }
//   return rootReducer(state, action);
// };

// export default rootReducerWrapper;
import { combineReducers } from 'redux';
import { getPrivacyPolicyReducer } from './Reducerfile';

const rootReducer = combineReducers({
  getPrivacyPolicy: getPrivacyPolicyReducer,
});

export default rootReducer;
