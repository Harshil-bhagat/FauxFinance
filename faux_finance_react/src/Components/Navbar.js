import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
const Navbar = () => {
    return (
        <>
        <Router >
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                   <Link to='/'><a className="navbar-brand" href="#">Faux Finance</a></Link> 
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                            {/* <a className="nav-link active" aria-current="page" href="#">Home</a> */}
                                <Link to ='/'>Home</Link>
                            </li>
                            <li className="nav-item">
                            {/* <a className="nav-link" href="#">Mint</a> */}
                                <Link to='/Mint'>Mint</Link>
                            </li>
                            <li className="nav-item">
                            {/* <a className="nav-link" href="#">Trade</a> */}
                                <Link to='/Trade'>Trade</Link>
                            </li>
                            <li className="nav-item">
                            {/* <a className="nav-link" href="#" tabIndex="-1">Governance</a> */}
                                <Link to='/Governance'>Governance</Link>
                            </li>
                        </ul>
                    </div>
                    
                </div>
            </nav>
            </Router>
        </>
    )
}

export default Navbar
