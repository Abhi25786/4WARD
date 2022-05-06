export const API_BASE_URL = "http://192.168.100.101:8002/api";

export const getApiUrl = (endpoint) => API_BASE_URL + endpoint;


export const SIGNUP = getApiUrl("/signup");
export const SOCIAL_LOGIN = getApiUrl("/check_social_id");
export const CHANGE_PASSWORD = getApiUrl("/change_password");
export const LOGIN = getApiUrl("/userlogin");
export const USER_LOGIN = getApiUrl("/verify_otp");
export const EDIT_PROFILE = getApiUrl("/edit_profile");
export const FORGET_PASSWORD = getApiUrl('/forgot_password');








