import * as actionType from "../actions/actionType";

const initialState = {
  riseUsers2: [],
  isLoading: false,
  error: "",
};

export const RiseUsers2 = (state = initialState, action) => {
  switch (action.type) {
    case actionType.RISE_USERS_2_SET_DATA:
      return {
        ...state,
        riseUsers2: action.payload,
        isLoading: false,
        error: false,
      };
    case actionType.RISE_USERS_2_FAIL_DATA:
      return {
        ...state,
        isLoading: false,
        error: true,
      };

    //Loading
    case actionType.RISE_USERS_2_LOADING:
      return {
        ...state,
        isLoading: true,
        error: false,
      };

    default:
      return state;
  }
};
