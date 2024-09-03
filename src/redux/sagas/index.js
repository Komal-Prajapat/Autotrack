import { all } from "redux-saga/effects";
import {
  watchGetPrivacyPolicyRequest
} from "./Sagafile";

export default function* rootSaga() {
  yield all([
    watchGetPrivacyPolicyRequest(),
  ]);
}
