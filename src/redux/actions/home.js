// import {HOMEPAGE_DATA_URL} from '../../config/urls';
import {apiPost, setItem, getItem, apiGet} from '../../utils/utils';
import store from '../store';
import types from '../types';

const {dispatch} = store;

//Get Homme banners and Category data
export function homeData(data = {}, headers = {}, isShortCode = false) {
  return new Promise((resolve, reject) => {
    apiPost(HOMEPAGE_DATA_URL, data, headers)
      .then(res => {
        dispatch({
          type: types.HOME_DATA,
          payload: res.data,
        });
        resolve(res);
      })
      .catch(error => {
        reject(error);
      });
  });
}
