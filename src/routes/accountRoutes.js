import React from "react";

//! layout ka compoenet bana aur yaha impport maar
import Layout from "../Components/layout/Layout";

// const Dashboard = React.lazy(() =>
//   import("../Components/Home/Dashboard/Dashboard")
// );
// const Account = React.lazy(() => import("../Components/Account/Account"));

const accountRoutes = [
  { path: "/", exact: true, name: "Home", component: Layout },
  // { path: "/dashboard", name: "Dashboard", component: Dashboard },
  // // { path: "/", exact: true, name: "Dashboard", component: Dashboard },
  // { path: "/account", name: "Account", component: Account },
];

export default accountRoutes;
