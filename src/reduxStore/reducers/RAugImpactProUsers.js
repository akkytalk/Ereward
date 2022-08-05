import * as actionType from "../actions/actionType";

const initialState = {
  augPro: [],
  isLoading: false,
  error: "",
};

export const AugPro = (state = initialState, action) => {
  switch (action.type) {
    case actionType.AUG_PRO_SET_DATA:
      return {
        ...state,
        augPro: action.payload,
        isLoading: false,
        error: false,
      };
    case actionType.AUG_PRO_FAIL_DATA:
      return {
        ...state,
        isLoading: false,
        error: true,
      };

    //Loading
    case actionType.AUG_PRO_LOADING:
      return {
        ...state,
        isLoading: true,
        error: false,
      };

    default:
      return state;
  }
};
