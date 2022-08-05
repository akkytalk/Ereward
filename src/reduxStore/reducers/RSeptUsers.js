import * as actionType from "../actions/actionType";

const initialState = {
  septUsers: [],
  isLoading: false,
  error: "",
};

export const SeptUsers = (state = initialState, action) => {
  switch (action.type) {
    case actionType.SEPTUSERS_SET_DATA:
      return {
        ...state,
        septUsers: action.payload,
        isLoading: false,
        error: false,
      };
    case actionType.SEPTUSERS_FAIL_DATA:
      return {
        ...state,
        isLoading: false,
        error: true,
      };

    //Loading
    case actionType.SEPTUSERS_LOADING:
      return {
        ...state,
        isLoading: true,
        error: false,
      };

    default:
      return state;
  }
};
