import * as type from "../type";

export const privacyPolicyGetRequest = (data) => ({
  type: type.PRIVACY_POLICY_GET_REQUEST,
  payload: { data },
});
export const removeDataFromReducer = (data) => ({
  type: data,
});