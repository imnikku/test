import React from "react";
import { NavLink } from "react-router-dom";

export const Menu = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark p-4 headertitle">
        <a class="navbar-brand" href="#" style={{ fontSize: "22px" }}>
          Navbar
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto pl-2">
            <li class="nav-item active">
              <NavLink to="/">Question No 1.</NavLink>
            </li>
            <li class="nav-item">
              <NavLink to="/consecutive">Question No 2.</NavLink>
            </li>
            <li class="nav-item">
              <NavLink to="/duplicate">Question No 3.</NavLink>
            </li>
            <li class="nav-item">
              <NavLink to="/fatchapi">Question No 4.</NavLink>
            </li>
            <li class="nav-item">
              <NavLink to="/objectsort">Question No 5.</NavLink>
            </li>
            <li class="nav-item">
              <NavLink to="/todolist">To Do App</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
