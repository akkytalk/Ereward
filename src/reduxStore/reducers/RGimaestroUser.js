import * as actionType from "../actions/actionType";

const initialState = {
  gimaestro: [],
  isLoading: false,
  error: "",
};

export const Gimaestro = (state = initialState, action) => {
  switch (action.type) {
    case actionType.GIMASTRO_SET_DATA:
      return {
        ...state,
        gimaestro: action.payload,
        isLoading: false,
        error: false,
      };
    case actionType.GIMASTRO_FAIL_DATA:
      return {
        ...state,
        isLoading: false,
        error: true,
      };

    //Loading
    case actionType.GIMASTRO_LOADING:
      return {
        ...state,
        isLoading: true,
        error: false,
      };

    default:
      return state;
  }
};
