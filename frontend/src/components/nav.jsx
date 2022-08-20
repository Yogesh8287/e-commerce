import { Link } from "react-router-dom";
import "../style/nav.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Nav() {
  return (
    <>
      <div className="navbar">
        <ul>
          <li>
            <Link className="link link1" to="/">
              Products
            </Link>
          </li>
          <li>
            <Link className="link link2" to="/add">
              Add Product
            </Link>
          </li>
          {/* <li>
            <Link className="link link3" to="/update">
          //     Update Products
          //   </Link>
          // </li> */}
        </ul>
      </div>
    </>
  );
}
export default Nav;
