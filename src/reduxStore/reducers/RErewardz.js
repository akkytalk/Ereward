import * as actionType from "../actions/actionType";

const initialState = {
  erewardz: [],
  isLoading: false,
  error: "",
};

export const Erewardz = (state = initialState, action) => {
  switch (action.type) {
    case actionType.EREWARDZ_SET_DATA:
      return {
        ...state,
        erewardz: action.payload,
        isLoading: false,
        error: false,
      };
    case actionType.EREWARDZ_FAIL_DATA:
      return {
        ...state,
        isLoading: false,
        error: true,
      };

    //Loading
    case actionType.EREWARDZ_LOADING:
      return {
        ...state,
        isLoading: true,
        error: false,
      };

    default:
      return state;
  }
};
