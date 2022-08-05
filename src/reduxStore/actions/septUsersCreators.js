import * as actionType from "./actionType";
import swal from "sweetalert";
import axios from "../../axios3";

//Get
export const septUsersGetData = (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  return (dispatch) => {
    dispatch(septUsersLoading());
    axios
      .get("/sept-users", config)
      .then((res) => {
        console.log("All sept-users Data", res.data);
        dispatch(setSeptUsersData(res.data));
      })
      .catch((error) => dispatch(console.log(error)));
  };
};

export const setSeptUsersData = (data) => {
  return {
    type: actionType.SEPTUSERS_SET_DATA,
    payload: data,
  };
};

export const septUsersFailData = () => {
  return {
    type: actionType.SEPTUSERS_FAIL_DATA,
  };
};

//loading
export const septUsersLoading = () => {
  return {
    type: actionType.SEPTUSERS_LOADING,
  };
};
