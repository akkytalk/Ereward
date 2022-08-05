import * as actionType from "./actionType";
import swal from "sweetalert";
import axios from "../../axios3";

//Get
export const gimaestroGetData = (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  return (dispatch) => {
    dispatch(gimaestroLoading());
    axios
      .get("/gimaestro-users", config)
      .then((res) => {
        console.log("All gimaestro-users Data", res.data);
        dispatch(setGimaestroData(res.data));
      })
      .catch((error) => dispatch(console.log(error)));
  };
};

export const setGimaestroData = (data) => {
  return {
    type: actionType.GIMASTRO_SET_DATA,
    payload: data,
  };
};

export const gimaestroFailData = () => {
  return {
    type: actionType.GIMASTRO_FAIL_DATA,
  };
};

//loading
export const gimaestroLoading = () => {
  return {
    type: actionType.GIMASTRO_LOADING,
  };
};
