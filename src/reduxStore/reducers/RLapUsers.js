import * as actionType from "../actions/actionType";

const initialState = {
  lapUsers: [],
  isLoading: false,
  error: "",
};

export const LapUsers = (state = initialState, action) => {
  switch (action.type) {
    case actionType.LAP_USERS_SET_DATA:
      return {
        ...state,
        lapUsers: action.payload,
        isLoading: false,
        error: false,
      };
    case actionType.LAP_USERS_FAIL_DATA:
      return {
        ...state,
        isLoading: false,
        error: true,
      };

    //Loading
    case actionType.LAP_USERS_LOADING:
      return {
        ...state,
        isLoading: true,
        error: false,
      };

    default:
      return state;
  }
};
