import { set } from 'lodash';
import { EDIT_PROFILE, LOGIN, SIGNUP } from '../../config/urls';
import { apiPost, setItem, setUserData } from '../../utils/utils';
import store from '../store';
import types from '../types';
const { dispatch } = store;

 export const saveUserData = (data) => {
  //  console.log("calledd>>>" ,data)
  setItem('userLogin',data)
  dispatch({
    type: types.LOGIN,
    payload: data,
  });
};


export function signUp(data) {
  return apiPost(SIGNUP, data);
}


export const login = (data) => {
  console.log(data, 'the given data')
  return new Promise((resolve, reject) => {
    apiPost(LOGIN, data)
      .then((res) => {
        saveUserData(res.data)
        resolve(res)
      })
      .catch((error) => {
        reject(error);
      });
  });
};
export const logout = () => {
 
  dispatch({
    type: types.USER_LOGOUT,

  })
};
export const intro = (data) => {
  dispatch({
    type: types.INTRO,
    payload:data

  })
};
export const editProfile = (data, header = {}) => {
  console.log(data, "the given data");
  return new Promise((resolve, reject) => {
    apiPost(EDIT_PROFILE, data, header)
      .then((res) => {
       
            saveUserData(res.data);
            resolve(res);
        
          
        // resolve(res);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

