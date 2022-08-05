import * as actionType from "../actions/actionType";

const initialState = {
  riseUsers: [],
  isLoading: false,
  error: "",
};

export const RiseUsers = (state = initialState, action) => {
  switch (action.type) {
    case actionType.RISE_USERS_SET_DATA:
      return {
        ...state,
        riseUsers: action.payload,
        isLoading: false,
        error: false,
      };
    case actionType.RISE_USERS_FAIL_DATA:
      return {
        ...state,
        isLoading: false,
        error: true,
      };

    //Loading
    case actionType.RISE_USERS_LOADING:
      return {
        ...state,
        isLoading: true,
        error: false,
      };

    default:
      return state;
  }
};
