import React, { Component } from 'react';

class Navbar extends Component {
    state = { };

    handleButtonClick = (buttonName) => {
        console.log(`${buttonName} Button clicked`);
    };

    render() { 
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light my-3">
                <div className="container-fluid d-flex justify-content-start align-items-center">
                    <div className="d-flex">
                        <a className="btn btn-secondary me-2" href="/">Home</a>
                        <a className="btn btn-danger me-2" href="/">Produktkatalog</a>
                        <a className="btn btn-success" href="/">Kontakt</a>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navbar;