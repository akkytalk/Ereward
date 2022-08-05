import axios from "axios";
// https://uditsolutions.in/fran/public/api/login
// http://krtexrm.com/export/public/api/

const instance = axios.create({
  baseURL: "https://erewardz.in/impactjuly/public/api/",
  //   baseURL: "http://krtexrm.com/export/public/api/",
});

export default instance;
