import * as actionType from "./actionType";
import swal from "sweetalert";
import axios from "../../axios3";

//Get
export const lapUsersGetData = (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  return (dispatch) => {
    dispatch(lapUsersLoading());
    axios
      .get("/lap-users", config)
      .then((res) => {
        console.log("All lap-users Data", res.data);
        dispatch(setLapUsers(res.data));
      })
      .catch((error) => dispatch(console.log(error)));
  };
};

export const setLapUsers = (data) => {
  return {
    type: actionType.LAP_USERS_SET_DATA,
    payload: data,
  };
};

export const lapUsersFailData = () => {
  return {
    type: actionType.LAP_USERS_FAIL_DATA,
  };
};

//loading
export const lapUsersLoading = () => {
  return {
    type: actionType.LAP_USERS_LOADING,
  };
};
