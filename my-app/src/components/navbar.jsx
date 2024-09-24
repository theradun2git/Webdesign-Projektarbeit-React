import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Navbar extends Component {
    state = {};

    handleButtonClick = (buttonName) => {
        console.log(`${buttonName} Button clicked`);
    };

    render() { 
        return (
            <nav className="navbar navbar-expand-lg bg-light p-2">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/" ><img src="/assets/img/bag.png" alt="Bootstrap" width="30" height="24"></img></Link>
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" to="/Kundenliste" onClick={() => this.handleButtonClick('Kundenliste')} > Kundenliste </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/kategorien" onClick={() => this.handleButtonClick('Kategorien')} > Kategorien </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/produktliste" onClick={() => this.handleButtonClick('Produktliste')} > Produktliste </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/kontakt" onClick={() => this.handleButtonClick('Kontakt')} > Kontakt </Link>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2 mx-1"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"></input>
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                </div>
            </nav>
        );
    }
}

export default Navbar;