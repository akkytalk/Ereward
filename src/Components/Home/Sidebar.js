import React, { Fragment } from "react";
import { Link, NavLink } from "react-router-dom";
import { connect } from "react-redux";

import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

function Sidebar(props) {
  return (
    <Fragment>
      {/* Main Sidebar Container */}
      <aside
        className="main-sidebar sidebar-dark-primary elevation-4"
        style={{ overflow: "scroll", width: "250px;", height: "100vh" }}
      >
        {/* Sidebar */}
        <div
          className="sidebar"
          style={{ paddingRight: "0px;", fontSize: "15px" }}
        >
          {/* Sidebar user panel (optional) */}
          <div className="user-panel mt-3 pb-3 mb-3 d-flex">
            <div className="image">
              <img
                src="dist/img/user2-160x160.jpg"
                className="img-circle elevation-2"
                alt="User pics"
              />
            </div>
            <div className="info">
              <a href="/" className="d-block">
                ADMIN
              </a>
            </div>
          </div>
          {/* SidebarSearch Form */}
          {/* Sidebar Menu */}

          {props.login?.login[0]?.user?.name === "admin" ? (
            <nav className="mt-2" id="MainMenu">
              <ul
                className="nav nav-pills nav-sidebar flex-column"
                data-widget="treeview"
                role="menu"
                data-accordion="false"
              >
                {/* Add icons to the links using the .nav-icon class
                             with font-awesome or any other icon font library */}
                {/* <li className="nav-item">
                  <Link to="/" className="nav-link">
                    <p>Dashboard</p>
                  </Link>
                </li> */}

                <li className="nav-item">
                  <NavLink to="/erewardz" className="nav-link">
                    <p>Erewardz</p>
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink to="/power" className="nav-link">
                    <p>Power Users</p>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/september" className="nav-link">
                    <p>September Users</p>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/gimaestro" className="nav-link">
                    <p>GI Maestro</p>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/aug-pro" className="nav-link">
                    <p>Aug Impact Pro</p>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/sep-pro" className="nav-link">
                    <p>September Impact Pro</p>
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink to="/ttp-champs" className="nav-link">
                    <p>TTP Champs</p>
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink to="/rise-users" className="nav-link">
                    <p>Rise Users</p>
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink to="/rise-users-2" className="nav-link">
                    <p>Rise Users-2</p>
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink to="/lap-users" className="nav-link">
                    <p>Lap Users</p>
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink to="/white-users" className="nav-link">
                    <p>White Users</p>
                  </NavLink>
                </li>
              </ul>
            </nav>
          ) : props.login?.login[0]?.user?.name === "master" ? (
            <nav className="mt-2" id="MainMenu">
              <ul
                className="nav nav-pills nav-sidebar flex-column"
                data-widget="treeview"
                role="menu"
                data-accordion="false"
              >
                {/* Add icons to the links using the .nav-icon class
                             with font-awesome or any other icon font library */}
                {/* <li className="nav-item">
                  <Link to="/" className="nav-link">
                    <p>Dashboard</p>
                  </Link>
                </li> */}

                <li className="nav-item">
                  <NavLink to="/erewardz" className="nav-link">
                    <p>Erewardz</p>
                  </NavLink>
                </li>
              </ul>
            </nav>
          ) : props.login?.login[0]?.user?.name === "bank" ? (
            <nav className="mt-2" id="MainMenu">
              <ul
                className="nav nav-pills nav-sidebar flex-column"
                data-widget="treeview"
                role="menu"
                data-accordion="false"
              >
                {/* Add icons to the links using the .nav-icon class
                             with font-awesome or any other icon font library */}
                <li className="nav-item">
                  <NavLink to="/erewardz" className="nav-link">
                    <p>Erewardz</p>
                  </NavLink>
                </li>
              </ul>
            </nav>
          ) : props.login?.login[0]?.user?.name === "account" ? (
            <nav className="mt-2" id="MainMenu">
              <ul
                className="nav nav-pills nav-sidebar flex-column"
                data-widget="treeview"
                role="menu"
                data-accordion="false"
              >
                {/* Add icons to the links using the .nav-icon class
                             with font-awesome or any other icon font library */}
                <li className="nav-item">
                  <NavLink to="/erewardz" className="nav-link">
                    <p>Erewardz</p>
                  </NavLink>
                </li>
              </ul>
            </nav>
          ) : null}
        </div>
      </aside>
    </Fragment>
  );
}

const mapStateToProps = (state) => {
  return {
    login: state.login,
  };
};

export default connect(mapStateToProps)(Sidebar);
