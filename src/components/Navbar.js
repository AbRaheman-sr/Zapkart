import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import AddProduct from "./AddProduct";
import Login from "./Login";
import Card from "./Card";

function Navbar(props) {
  // props.data = setIsLogedIn
  // props.initial => isLogIn
  const logOutHandler = () => {
    // useNavigate will not work becouse, it works on only with the component route is defined in browserRouter routes
    window.location.pathname = "/login";
  };
  return (
    <BrowserRouter>
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              ZapKart
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                {props.initial ? (
                  <>
                    <li className="nav-item">
                      <Link to="/home" className="nav-link active">
                        Home
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/add" className="nav-link">
                        Add Products
                      </Link>
                    </li>
                    <button
                      className="btn btn-outline-light"
                      onClick={logOutHandler}
                    >
                      Logout
                    </button>
                  </>
                ) : (
                  <li className="nav-item">
                    <Link to="/login" className="nav-link" href="#">
                      Login
                    </Link>
                  </li>
                )}
              </ul>
              <form className="d-flex">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>
      </div>
      <Routes>
        <Route path="/home" element={<Card />}></Route>
        <Route path="/add" element={<AddProduct />}></Route>
        <Route path="/login" element={<Login info={props.data} />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Navbar;
