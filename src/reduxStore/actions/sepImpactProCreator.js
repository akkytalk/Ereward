import * as actionType from "./actionType";
import swal from "sweetalert";
import axios from "../../axios3";

//Get
export const sepProGetData = (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  return (dispatch) => {
    dispatch(sepProLoading());
    axios
      .get("/sep-impact-pro-users", config)
      .then((res) => {
        console.log("All sep-impact-pro-users Data", res.data);
        dispatch(setSugProData(res.data));
      })
      .catch((error) => dispatch(console.log(error)));
  };
};

export const setSugProData = (data) => {
  return {
    type: actionType.SEP_PRO_SET_DATA,
    payload: data,
  };
};

export const sepProFailData = () => {
  return {
    type: actionType.SEP_PRO_FAIL_DATA,
  };
};

//loading
export const sepProLoading = () => {
  return {
    type: actionType.SEP_PRO_LOADING,
  };
};
