import React from "react";

//! layout ka compoenet bana aur yaha impport maar
import Layout from "../Components/layout/Layout";

// const Dashboard = React.lazy(() =>
//   import("../Components/Home/Dashboard/Dashboard")
// );
const Erewardz = React.lazy(() => import("../Components/Erewardz/Erewardz"));

const masterRoutes = [
  { path: "/", exact: true, name: "Home", component: Layout },
  // { path: "/dashboard", exact: true, name: "Dashboard", component: Dashboard },

  { path: "/erewardz", name: "Erewardz", component: Erewardz },
];

export default masterRoutes;
