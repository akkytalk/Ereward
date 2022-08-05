import * as actionType from "./actionType";
import swal from "sweetalert";
import axios from "../../axios3";

//Get
export const erewardzGetData = (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  return (dispatch) => {
    dispatch(erewardzLoading());
    axios
      .get("/impactpro-users", config)
      .then((res) => {
        console.log("All impactpro-users Data", res.data);
        dispatch(setErewardzData(res.data));
      })
      .catch((error) => dispatch(console.log(error)));
  };
};

export const setErewardzData = (data) => {
  return {
    type: actionType.EREWARDZ_SET_DATA,
    payload: data,
  };
};

export const erewardzFailData = () => {
  return {
    type: actionType.EREWARDZ_FAIL_DATA,
  };
};

//loading
export const erewardzLoading = () => {
  return {
    type: actionType.EREWARDZ_LOADING,
  };
};
