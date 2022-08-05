import * as actionType from "./actionType";
import swal from "sweetalert";
import axios from "../../axios3";

//Get
export const whiteUsersGetData = (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  return (dispatch) => {
    dispatch(whiteUsersLoading());
    axios
      .get("/white-users", config)
      .then((res) => {
        console.log("All white-users Data", res.data);
        dispatch(setWhiteUsers(res.data));
      })
      .catch((error) => dispatch(console.log(error)));
  };
};

export const setWhiteUsers = (data) => {
  return {
    type: actionType.WHITE_USERS_SET_DATA,
    payload: data,
  };
};

export const whiteUsersFailed = () => {
  return {
    type: actionType.WHITE_USERS_FAIL_DATA,
  };
};

//loading
export const whiteUsersLoading = () => {
  return {
    type: actionType.WHITE_USERS_LOADING,
  };
};
