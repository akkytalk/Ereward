import React from "react";

//! layout ka compoenet bana aur yaha impport maar
import Layout from "../Components/layout/Layout";

// const Dashboard = React.lazy(() =>
//   import("../Components/Home/Dashboard/Dashboard")
// );
// const Bank = React.lazy(() => import("../Components/Bank/Bank"));

const bankRoutes = [
  { path: "/", exact: true, name: "Home", component: Layout },
  // { path: "/dashboard", name: "Dashboard", component: Dashboard },
  // // { path: "/", exact: true, name: "Dashboard", component: Dashboard },
  // { path: "/bank", name: "Bank", component: Bank },
];

export default bankRoutes;
