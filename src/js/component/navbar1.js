import React from "react";
import { Link } from "react-router-dom";

export const Navbar1 = () => {
    return (
        <nav className="navbar navbar-light bg-light mb-3">
            <Link to="/">
                <div className="container">
                    <a className="navbar-brand" href="#">
                        <img src="https://1000marcas.net/wp-content/uploads/2019/12/logo-StarWars.png" alt="" width="60" height="30" />
                    </a>
                </div>
            </Link>
            <div className="ml-auto me-2">
                <div className="dropdown">
                    <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        Dropdown button<span className="badge bg-secondary ms-2">4</span>
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li><a className="dropdown-item" href="#">Action</a></li>
                        <li><a className="dropdown-item" href="#">Another action</a></li>
                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                </div>
                {/* <Link to="/demo">
                    <button className="btn btn-primary">Check the Context in action</button>
                </Link> */}
            </div>
        </nav>
    );
};