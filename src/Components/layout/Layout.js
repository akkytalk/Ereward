import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

import SideBar from "../Home/Sidebar";
import Header from "./header/Header";
import Loader from "../../Components/Loader";

import routes from "../../routes/routes";
import masterRoutes from "../../routes/masterRoutes";
import bankRoutes from "../../routes/bankRoutes";
import accountRoutes from "../../routes/accountRoutes";
import { ToastContainer, Zoom } from "react-toastify";

function Layout(props) {
  const login = useSelector((state) => state.login);

  if (login?.login?.length === 0) {
    return <Redirect to={"/login"} />;
  } else if (login?.login[0]?.user?.name === "admin") {
    return (
      <div className="wrapper">
        <Header />
        <SideBar />
        <div className="content-wrapper">
          <section className="content">
            <div className="container-fluid">
              <React.Suspense fallback={<Loader />}>
                {/* //*React can immediately render the app with the Loader and until
                //*the fetch succeeds, it doesn't even need to load the lazy
                //* component */}

                <Switch>
                  {routes.map((route, index) => {
                    return route.component ? (
                      <Route
                        path={route.path}
                        exact={route.exact}
                        key={index}
                        render={(props) => <route.component {...props} />}
                      />
                    ) : null;
                  })}
                  <Redirect from="/" to="/erewardz" />
                </Switch>
              </React.Suspense>
            </div>
          </section>
        </div>
      </div>
    );
  }
  // ?master starts here
  // } else if (login?.login[0]?.user?.role === "master") {
  //   return (
  //     <div className="wrapper">
  //       <Header />
  //       <SideBar />
  //       <div className="content-wrapper">
  //         <section className="content">
  //           <div className="container-fluid">
  //             <React.Suspense fallback={<Loader />}>
  //               {/* //*React can immediately render the app with the Loader and until
  //                 //*the fetch succeeds, it doesn't even need to load the lazy
  //                 //* component */}

  //               <Switch>
  //                 {masterRoutes.map((route, index) => {
  //                   return route.component ? (
  //                     <Route
  //                       path={route.path}
  //                       exact={route.exact}
  //                       key={index}
  //                       render={(props) => <route.component {...props} />}
  //                     />
  //                   ) : null;
  //                 })}
  //                 <Redirect from="/" to="/employees" />
  //               </Switch>
  //             </React.Suspense>
  //           </div>
  //         </section>
  //       </div>
  //     </div>
  //   );
  // } //? bank starts here
  // else if (login?.login[0]?.user?.role === "bank") {
  //   return (
  //     <div className="wrapper">
  //       <Header />
  //       <SideBar />
  //       <div className="content-wrapper">
  //         <section className="content">
  //           <div className="container-fluid">
  //             <React.Suspense fallback={<Loader />}>
  //               {/* //*React can immediately render the app with the Loader and until
  //                 //*the fetch succeeds, it doesn't even need to load the lazy
  //                 //* component */}

  //               <Switch>
  //                 {bankRoutes.map((route, index) => {
  //                   return route.component ? (
  //                     <Route
  //                       path={route.path}
  //                       exact={route.exact}
  //                       key={index}
  //                       render={(props) => <route.component {...props} />}
  //                     />
  //                   ) : null;
  //                 })}
  //                 <Redirect from="/" to="/employees" />
  //               </Switch>
  //             </React.Suspense>
  //           </div>
  //         </section>
  //       </div>
  //     </div>
  //   );
  // }
  // //? account starts here
  // else if (login?.login[0]?.user?.role === "account") {
  //   return (
  //     <div className="wrapper">
  //       <Header />
  //       <SideBar />
  //       <div className="content-wrapper">
  //         <section className="content">
  //           <div className="container-fluid">
  //             <React.Suspense fallback={<Loader />}>
  //               {/* //*React can immediately render the app with the Loader and until
  //                 //*the fetch succeeds, it doesn't even need to load the lazy
  //                 //* component */}

  //               <Switch>
  //                 {accountRoutes.map((route, index) => {
  //                   return route.component ? (
  //                     <Route
  //                       path={route.path}
  //                       exact={route.exact}
  //                       key={index}
  //                       render={(props) => <route.component {...props} />}
  //                     />
  //                   ) : null;
  //                 })}
  //                 <Redirect from="/" to="/dashboard" />
  //               </Switch>
  //             </React.Suspense>
  //           </div>
  //         </section>
  //       </div>
  //     </div>
  //   );
  // }
}

export default Layout;
