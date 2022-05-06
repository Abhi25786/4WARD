import types from '../types';

const initial_state = {
  appMainData: {},
};

export default function (state = initial_state, action) {
  switch (action.type) {
    case types.HOME_DATA: {
      const data = action.payload;

      return {
        ...state,
        appMainData: data,
      };
    }

    default: {
      return {...state};
    }
  }
}
