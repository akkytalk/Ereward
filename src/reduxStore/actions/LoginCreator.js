import * as actionType from "./actionType";
import axios from "../../axios2";
import swal from "sweetalert";
import { toast } from "react-toastify";

// import { createBrowserHistory } from "history";
//uditsolutions.in/fran/public/api/login

//Login
export const postLogin = (setSubmitting, data) => (dispatch) => {
  dispatch(loginLoading(true));
  console.log("State data for login", data);

  let token = document
    .querySelector("meta[name='csrf-token']")
    .getAttribute("content");
  console.log("csrf__::", token);

  // const config = {
  //   headers: {
  //     // "Content-Type": "multipart/form-data",
  //     // "x-csrf-token": token,
  //     "X-CSRF-TOKEN": token,
  //   },
  // };

  axios
    .post("/login", data)
    .then((res) => {
      console.log("res", res.data);
      dispatch(addLogin(res.data));
      toast.success("Welcome");
      return;
    })
    .catch((error) => {
      dispatch(loginFailed(error));
      {
        setSubmitting(false);
      }
    });
};

export const loginLoading = () => {
  return {
    type: actionType.LOGIN_LOADING,
  };
};

export const addLogin = (login) => {
  console.log("addlogin", login);
  return {
    type: actionType.ADD_LOGIN,
    payload: login,
  };
};

export const loginFailed = (errmess) => {
  return {
    type: actionType.LOGIN_FAILED,
    payload: errmess,
  };
};

export const removeLogin = () => {
  return {
    type: actionType.REMOVE_LOGIN,
    payload: [],
  };
};
