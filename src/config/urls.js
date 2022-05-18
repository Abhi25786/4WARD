export const API_BASE_URL = "http://192.168.100.101:8002/api";

export const getApiUrl = (endpoint) => API_BASE_URL + endpoint;


export const SIGNUP = getApiUrl("/signup");
export const SOCIAL_LOGIN = getApiUrl("/check_social_id");
export const CHANGE_PASSWORD = getApiUrl("/change_password");
export const LOGIN = getApiUrl("/userlogin");
export const USER_LOGIN = getApiUrl("/verify_otp");
export const EDIT_PROFILE = getApiUrl("/edit_profile");
export const FORGET_PASSWORD = getApiUrl('/forgot_password');
export const POST_SEND = getApiUrl('/post_send');
export const UPLODE_IMAGE = getApiUrl('/img_upload');
export const POSTS = getApiUrl('/posts');
export const LIKE = getApiUrl('/like-post');
export const COMMENT = getApiUrl('/comment-post');
export const GET_COMMENT = getApiUrl('/comment-get');








