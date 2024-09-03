import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  privacyPolicyGetRequest,
  removeDataFromReducer,
} from "../../redux/actions";
import { PRIVACY_POLICY_GET_API } from "../../api/apiBase";
import HeaderMain from "../Header/headerMain";
import { CircularProgress } from "@material-ui/core";

function PrivacyPolicy() {
  const dispatch = useDispatch();
  const [ckValue, setCkValue] = useState("");
  
  const {
    getPrivacyPolicyInfo,
    loading: getPrivacyPolicyLoading,
    error: getPrivacyPolicyError,
  } = useSelector((state) => state?.getPrivacyPolicy || {});

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);




  useEffect(() => {
    if (getPrivacyPolicyInfo?.status) {
      setCkValue(
        getPrivacyPolicyInfo?.data?.privacypolicyData || 
        "No privacy policy available."
      );
      dispatch(removeDataFromReducer("PRIVACY_POLICY_GET_RESET"));
    } else {
      dispatch(removeDataFromReducer("PRIVACY_POLICY_GET_RESET"));
    }
  }, [getPrivacyPolicyInfo, dispatch]);

  const getPrivacyPolicy = () => {
    const parameter = {
      url: PRIVACY_POLICY_GET_API,
    };
    dispatch(privacyPolicyGetRequest(parameter));
  };

  useEffect(() => {
    getPrivacyPolicy();
  }, [dispatch]);

  return (
    <div>
          <HeaderMain/>
      <h1 style={{ textAlign: "center" }} className="mt-5">Privacy Policy</h1>
      <div style={{ margin: "5%" }}>
        {getPrivacyPolicyLoading ? 
          <div style={{ textAlign: "center" }}>
            <div className="loader"></div>
            <CircularProgress />
          </div>
         : 
          <div dangerouslySetInnerHTML={{ __html: ckValue }} />
        }
      </div>
    </div>
  );
}

export default PrivacyPolicy;
