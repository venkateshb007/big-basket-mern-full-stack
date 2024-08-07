import React from "react";
import { Link } from "react-router-dom";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-dark bg-primary navbar-expand-sm">
          <div className="container">
            <Link to="/" className="navbar-brand">
              <i className="fa fa-shopping-cart"></i>
              BigBasket
            </Link>
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link to="/" className="nav-link">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/products" className="nav-link">
                    Products
                  </Link>
                </li>
              </ul>
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link to="/admin" className="nav-link">
                    Admin
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

export default Navbar;
