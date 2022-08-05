import * as actionType from "../actions/actionType";

const initialState = {
  powerUsers: [],
  isLoading: false,
  error: "",
};

export const PowerUsers = (state = initialState, action) => {
  switch (action.type) {
    case actionType.POWERUSERS_SET_DATA:
      return {
        ...state,
        powerUsers: action.payload,
        isLoading: false,
        error: false,
      };
    case actionType.POWERUSERS_FAIL_DATA:
      return {
        ...state,
        isLoading: false,
        error: true,
      };

    //Loading
    case actionType.POWERUSERS_LOADING:
      return {
        ...state,
        isLoading: true,
        error: false,
      };

    default:
      return state;
  }
};
