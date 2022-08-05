import React from "react";

//! layout ka compoenet bana aur yaha impport maar
import Layout from "../Components/layout/Layout";

// const Dashboard = React.lazy(() =>
//   import("../Components/Home/Dashboard/Dashboard")
// );

const Erewardz = React.lazy(() => import("../Components/Erewardz/Erewardz"));
const Power = React.lazy(() => import("../Components/Power/Power"));
const September = React.lazy(() => import("../Components/September/September"));
const TTP = React.lazy(() => import("../Components/TTP/TTP"));
const RiseUsers = React.lazy(() => import("../Components/RiseUsers/RiseUsers"));
const RiseUsers2 = React.lazy(() =>
  import("../Components/RiseUsers2/RiseUsers2")
);
const LapUsers = React.lazy(() => import("../Components/LapUsers/LapUsers"));

const WhiteUsers = React.lazy(() =>
  import("../Components/WhiteUsers/WhiteUsers")
);

const SepImpactPro = React.lazy(() =>
  import("../Components/SepImpactPro/SepImpactPro")
);

const AugImpactPro = React.lazy(() =>
  import("../Components/AugImpactPro/AugImpactPro")
);

const Gimaestro = React.lazy(() => import("../Components/Gimaestro/Gimaestro"));

const routes = [
  { path: "/", exact: true, name: "Home", component: Layout },
  // { path: "/dashboard", exact: true, name: "Dashboard", component: Dashboard },

  { path: "/erewardz", name: "Erewardz", component: Erewardz },
  { path: "/power", name: "Power Users", component: Power },
  { path: "/september", name: "September Users", component: September },
  { path: "/ttp-champs", name: "TTP Champs", component: TTP },
  { path: "/rise-users", name: "Rise Users", component: RiseUsers },
  { path: "/rise-users-2", name: "Rise Users-2", component: RiseUsers2 },
  { path: "/lap-users", name: "Lap Users", component: LapUsers },
  { path: "/white-users", name: "White Users", component: WhiteUsers },
  { path: "/sep-pro", name: "White Users", component: SepImpactPro },
  { path: "/aug-pro", name: "White Users", component: AugImpactPro },
  { path: "/gimaestro", name: "White Users", component: Gimaestro },
];

export default routes;
