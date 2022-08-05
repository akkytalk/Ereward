import * as actionType from "./actionType";
import swal from "sweetalert";
import axios from "../../axios3";

//Get
export const ttpGetData = (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  return (dispatch) => {
    dispatch(ttpLoading());
    axios
      .get("/tpp-users", config)
      .then((res) => {
        console.log("All tpp-users Data", res.data);
        dispatch(setTtpdata(res.data));
      })
      .catch((error) => dispatch(console.log(error)));
  };
};

export const setTtpdata = (data) => {
  return {
    type: actionType.TTP_SET_DATA,
    payload: data,
  };
};

export const ttpFailData = () => {
  return {
    type: actionType.TTP_FAIL_DATA,
  };
};

//loading
export const ttpLoading = () => {
  return {
    type: actionType.TTP_LOADING,
  };
};
