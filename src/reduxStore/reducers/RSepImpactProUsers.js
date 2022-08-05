import * as actionType from "../actions/actionType";

const initialState = {
  sepPro: [],
  isLoading: false,
  error: "",
};

export const SepPro = (state = initialState, action) => {
  switch (action.type) {
    case actionType.SEP_PRO_SET_DATA:
      return {
        ...state,
        sepPro: action.payload,
        isLoading: false,
        error: false,
      };
    case actionType.SEP_PRO_FAIL_DATA:
      return {
        ...state,
        isLoading: false,
        error: true,
      };

    //Loading
    case actionType.SEP_PRO_LOADING:
      return {
        ...state,
        isLoading: true,
        error: false,
      };

    default:
      return state;
  }
};
