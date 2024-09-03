import { call, put, takeEvery } from "redux-saga/effects";

import * as type from "../../type";
import { getNetworkCall } from "../../../networkCall";


function* handleGetPrivacyPolicyRequest(action) {
  try {
    const getPrivacyPolicyInfo = yield call(getNetworkCall, action.payload);
    yield put({
      type: type.PRIVACY_POLICY_GET_SUCCESS,
      data: getPrivacyPolicyInfo,
    });
  } catch (e) {
    yield put({ type: type.PRIVACY_POLICY_GET_ERROR, message: e.message });
  }
}


function* watchGetPrivacyPolicyRequest() {
  yield takeEvery(
    type.PRIVACY_POLICY_GET_REQUEST,
    handleGetPrivacyPolicyRequest
  );
}



export {
  watchGetPrivacyPolicyRequest,
};
