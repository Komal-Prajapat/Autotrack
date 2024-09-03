/* eslint-disable no-debugger */
import axios from "axios";
// import { TOKEN_REGENERATE_API } from "./api/apiBase";
const customHeaders = () => ({
  token: getCookie("accessToken"),
  refreshToken: getCookie("refreshToken"),
  userType: getCookie("LoginUserRole"),
  "ngrok-skip-browser-warning": "69420",
});

function getCookie(name) {
  const cookies = document.cookie
    .split(";")
    .map((cookie) => cookie.trim().split("="));
  const cookie = cookies.find((cookie) => cookie[0] === name);
  return cookie ? cookie[1] : null;
}

function setCookie(name, value, days) {
  const date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
  const expires = "expires=" + date.toUTCString();
  document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

async function postNetworkCall(params, action) {
  let response;
  const { url, signal , ...rest } = params.data;
  try {
    response = await axios.post(url, rest, {
      headers: customHeaders(),signal
    });
  } catch (error) {
    if (
      error.response.data.message === "Invalid authorization token Admin" ||
      error.response.data.statusCode === 406
    ) {
      clearCookies();
      window.location.href = "/login";
      window.location.reload(); // Reload the page after redirecting to /login
    } else if (
      error.response.data.message === "Authorization token is missing!"
    ) {
      clearCookies();
      window.location.href = "/login";
      window.location.reload(); // Reload the page after redirecting to /login
    } else if (error.response.data.statusCode === 401) {
      await handleTokenRefresh();
      response = await axios.post(params?.data?.url, params?.data, {
        headers: customHeaders(),signal
      });
    } else {
      console.error(error.message, "error");
      return error.message;
    }
  }

  return response.data;
}

async function handleTokenRefresh() {
  const data = await getCookie("refreshToken");

  const result = await axios.post(TOKEN_REGENERATE_API, {
    refreshToken: data,
    type: "website",
  });

  setCookie("accessToken", result.data.accessToken, 30); // Example: setting access token for 30 days
}

async function getNetworkCall(params, action) {
  let response;

  try {
    response = await axios.get(params?.data?.url, {
      headers: customHeaders(),
    });
  } catch (error) {
    if (
      error.response.data.message === "Invalid authorization token Admin" ||
      error.response.data.statusCode === 406
    ) {
      clearCookies();
      window.location.href = "/login";
      window.location.reload(); // Reload the page after redirecting to /login
    } else if (
      error.response.data.message === "Authorization token is missing!"
    ) {
      clearCookies();
      window.location.href = "/login";
      window.location.reload(); // Reload the page after redirecting to /login
    } else if (error.response.data.statusCode === 401) {
      await handleTokenRefresh();
      response = await axios.get(params?.data?.url, {
        headers: customHeaders(),
      });
    } else {
      console.error(error.message, "error");
      return error.message;
    }
  }

  return response.data;
}

function clearCookies() {
  document.cookie =
    "accessToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  document.cookie =
    "refreshToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  document.cookie = "auth=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}

const MultiformCustomHeaders = () => ({
  token: getCookie("accessToken"),
  refreshToken: getCookie("refreshToken"),
  userType: getCookie("LoginUserRole"),
  "ngrok-skip-browser-warning": "69420",
  "Content-Type": "multipart/form-data",
});

async function postNetworkcreateCall(params, action) {
  let response;
  try {
    response = await axios.post(params?.data?.url, params?.data?.formData, {
      headers: MultiformCustomHeaders(),
    });
  } catch (error) {
    if (
      error.response.data.message === "Invalid authorization token Admin" ||
      error.response.data.statusCode === 406
    ) {
      clearCookies();
      window.location.href = "/login";
      window.location.reload(); // Reload the page after redirecting to /login
    } else if (
      error.response.data.message === "Authorization token is missing!"
    ) {
      clearCookies();
      window.location.href = "/login";
      window.location.reload(); // Reload the page after redirecting to /login
    } else if (error.response.data.statusCode === 401) {
      await handleTokenRefresh();
      response = await axios.post(params?.data?.url, params?.data, {
        headers: MultiformCustomHeaders(),
      });
    } else {
      console.error(error.message, "error");
      return error.message;
    }
  }

  return response.data;
}

export { getNetworkCall, postNetworkCall, postNetworkcreateCall };
