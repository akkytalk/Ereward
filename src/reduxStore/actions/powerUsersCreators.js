import * as actionType from "./actionType";
import swal from "sweetalert";
import axios from "../../axios3";

//Get
export const powerUsersGetData = (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  return (dispatch) => {
    dispatch(powerUsersLoading());
    axios
      .get("/power-users", config)
      .then((res) => {
        console.log("All power-users Data", res.data);
        dispatch(setPowerUsersData(res.data));
      })
      .catch((error) => dispatch(console.log(error)));
  };
};

export const setPowerUsersData = (data) => {
  return {
    type: actionType.POWERUSERS_SET_DATA,
    payload: data,
  };
};

export const powerUsersFailData = () => {
  return {
    type: actionType.POWERUSERS_FAIL_DATA,
  };
};

//loading
export const powerUsersLoading = () => {
  return {
    type: actionType.POWERUSERS_LOADING,
  };
};
