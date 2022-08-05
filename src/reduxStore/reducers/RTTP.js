import * as actionType from "../actions/actionType";

const initialState = {
  ttp: [],
  isLoading: false,
  error: "",
};

export const TTP = (state = initialState, action) => {
  switch (action.type) {
    case actionType.TTP_SET_DATA:
      return {
        ...state,
        ttp: action.payload,
        isLoading: false,
        error: false,
      };
    case actionType.TTP_FAIL_DATA:
      return {
        ...state,
        isLoading: false,
        error: true,
      };

    //Loading
    case actionType.TTP_LOADING:
      return {
        ...state,
        isLoading: true,
        error: false,
      };

    default:
      return state;
  }
};
