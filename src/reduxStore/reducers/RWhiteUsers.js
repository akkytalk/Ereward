import * as actionType from "../actions/actionType";

const initialState = {
  whiteUsers: [],
  isLoading: false,
  error: "",
};

export const WhiteUsers = (state = initialState, action) => {
  switch (action.type) {
    case actionType.WHITE_USERS_SET_DATA:
      return {
        ...state,
        whiteUsers: action.payload,
        isLoading: false,
        error: false,
      };
    case actionType.WHITE_USERS_FAIL_DATA:
      return {
        ...state,
        isLoading: false,
        error: true,
      };

    //Loading
    case actionType.WHITE_USERS_LOADING:
      return {
        ...state,
        isLoading: true,
        error: false,
      };

    default:
      return state;
  }
};
