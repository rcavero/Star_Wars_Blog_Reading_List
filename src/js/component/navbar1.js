import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext"

export const Navbar1 = () => {
    const { store, actions } = useContext(Context);
    // const [list, setList] = useState(["hola"])
    // useEffect(() => {
    //     console.log("Se está cargando")
	// },[store.favoritesList])
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
                        Favorites<span className="badge bg-secondary ms-2">{store.favoritesList.length}</span>
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        {store.favoritesList.map((value, index) => {
                            return(
                                <li key={index}><a className="dropdown-item" href="#">{value}</a></li>
                            )
                        })}
                   </ul>
                </div>
                {/* <Link to="/demo">
                    <button className="btn btn-primary">Check the Context in action</button>
                </Link> */}
            </div>
        </nav>
    );
};