import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch, NavLink } from 'react-router-dom';


const NavbarHeader = () => {
  const loggedIn = localStorage.getItem("loggedIn");
  const user = JSON.parse(localStorage.getItem('profile'))
  function logout(id) {
    localStorage.clear();
  }

  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
      <div className="container headercss ">
        <NavLink to="/" className="navbar-brand">Product Inventory</NavLink>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse " id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item ">
              {!loggedIn && <NavLink className="nav-link" to="/login">login</NavLink>}
            </li>
            <li class="nav-item">
              <NavLink className="nav-link " to="/about">About</NavLink>
            </li>
            <li class="nav-item">
              {<NavLink className="nav-link" to={loggedIn ? "/addproduct" : "/login"}>Add Product</NavLink>}
            </li>
            {loggedIn && <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                {loggedIn && user ? user[0]?.emailId : ""}
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                {loggedIn && <NavLink className="dropdown-item bg-white text-primary" to={loggedIn ? "/UserDetail" : "/login"} >Registration Details</NavLink>}
                <div> {loggedIn && <NavLink className=" dropdown-item bg-white text-primary " onClick={() => logout()} to="/" >Sign out</NavLink>} </div>
              </div>
            </li>
            }
          </ul>
        </div>
      </div>
    </nav>
  );

}



export default NavbarHeader;
