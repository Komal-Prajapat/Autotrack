// import {combineReducers} from 'redux';

import * as type from "../../type";

const initialState = { loading: false };

const getPrivacyPolicyReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.PRIVACY_POLICY_GET_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case type.PRIVACY_POLICY_GET_SUCCESS:
      return {
        ...state,
        loading: false,
        getPrivacyPolicyInfo: action.data,
      };
    case type.PRIVACY_POLICY_GET_ERROR:
      return {
        ...state,
        loading: false,
        error: action.message,
      };
    case type.PRIVACY_POLICY_GET_RESET:
      return {
        ...state,
        loading: false,
        getPrivacyPolicyInfo: null,
      };
    default:
      return state;
  }
};



export {
  getPrivacyPolicyReducer
};
