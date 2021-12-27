import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light justify-content-between">
                <div className="container-fluid justify-content-between" >
                    <Link className="navbar-brand" to="/">
                        <img
                            src="img/logo.png"
                            className="logo"
                            alt="not found" />
                    </Link>
                    <div >
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item link">
                                <Link className="nav-link " aria-current="page" to="/"
                                >SignUp Page</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
