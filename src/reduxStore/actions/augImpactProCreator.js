import * as actionType from "./actionType";
import swal from "sweetalert";
import axios from "../../axios3";

//Get
export const augProGetData = (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  return (dispatch) => {
    dispatch(augProLoading());
    axios
      .get("/aug-impact-pro-users", config)
      .then((res) => {
        console.log("All aug-impact-pro-users Data", res.data);
        dispatch(setAugProData(res.data));
      })
      .catch((error) => dispatch(console.log(error)));
  };
};

export const setAugProData = (data) => {
  return {
    type: actionType.AUG_PRO_SET_DATA,
    payload: data,
  };
};

export const augProFailData = () => {
  return {
    type: actionType.AUG_PRO_FAIL_DATA,
  };
};

//loading
export const augProLoading = () => {
  return {
    type: actionType.AUG_PRO_LOADING,
  };
};
