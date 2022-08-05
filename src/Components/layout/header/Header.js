import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import { removeLogin } from "../../../reduxStore/actions/LoginCreator";

export default function Header() {
  const dispatch = useDispatch();

  async function handleLogout() {
    dispatch(removeLogin());
  }

  return (
    <nav className="main-header navbar navbar-expand navbar-white navbar-light">
      {/* Left navbar links */}
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" data-widget="pushmenu" href="/" role="button">
            <i className="fas fa-bars" />
          </a>
        </li>
        <li className="nav-item d-none d-sm-inline-block">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li
          className="nav-item d-none d-sm-inline-block float-right pull-right"
          onClick={() => handleLogout()}
        >
          <Button className="btn-danger">Logout</Button>
        </li>
      </ul>
      {/* SEARCH FORM */}
    </nav>
  );
}
