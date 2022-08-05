import * as actionType from "./actionType";
import swal from "sweetalert";
import axios from "../../axios3";

//Get
export const riseUsers2GetData = (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  return (dispatch) => {
    dispatch(riseUsers2Loading());
    axios
      .get("/rise-2-users", config)
      .then((res) => {
        console.log("All rise-users-2 Data", res.data);
        dispatch(setRiseUsers2(res.data));
      })
      .catch((error) => dispatch(console.log(error)));
  };
};

export const setRiseUsers2 = (data) => {
  return {
    type: actionType.RISE_USERS_2_SET_DATA,
    payload: data,
  };
};

export const riseUsers2DataFail = () => {
  return {
    type: actionType.RISE_USERS_2_FAIL_DATA,
  };
};

//loading
export const riseUsers2Loading = () => {
  return {
    type: actionType.RISE_USERS_2_LOADING,
  };
};
