import * as actionType from "./actionType";
import swal from "sweetalert";
import axios from "../../axios3";

//Get
export const riseUsersGetData = (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  return (dispatch) => {
    dispatch(riseUsersLoading());
    axios
      .get("/rise-users", config)
      .then((res) => {
        console.log("All rise-users Data", res.data);
        dispatch(setRiseUsers(res.data));
      })
      .catch((error) => dispatch(console.log(error)));
  };
};

export const setRiseUsers = (data) => {
  return {
    type: actionType.RISE_USERS_SET_DATA,
    payload: data,
  };
};

export const riseUsersDataFail = () => {
  return {
    type: actionType.RISE_USERS_FAIL_DATA,
  };
};

//loading
export const riseUsersLoading = () => {
  return {
    type: actionType.RISE_USERS_LOADING,
  };
};
