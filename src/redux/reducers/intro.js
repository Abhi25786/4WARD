import {setItem} from '../../utils/utils';
import types from '../types';

const initialState = {
  introdata: true,
};

export default intro = (state = initialState, action) => {
  console.log(state, '>>>>>>>>>');
  switch (action.type) {
    case types.INTRO:
      const data = action.payload;
      setItem('introdata', data);
      console.log('intro>>>>', data);
      return {...state, introdata: data};

    default:
      return state;
  }
};
