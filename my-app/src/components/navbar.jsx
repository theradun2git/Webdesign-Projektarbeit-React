import React, { Component } from 'react';

class Navbar extends Component {
    state = {};

    handleButtonClick = (buttonName) => {
        console.log(`${buttonName} Button clicked`);
    };

    render() { 
        return (
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/" >
                        <img src="/assets/img/bag.jpg" alt="Bootstrap" width="30" height="24"></img>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <div class="d-grid gap-2 d-md-block">
                                <button type="button" className="btn btn-outline-success mx-1"><a className="navbar-brand" href="/" onClick={() => this.handleButtonClick('Produktkatalog')} > Produktkatalog </a></button>
                                <button type="button" className="btn btn-outline-success mx-1"><a className="navbar-brand" href="/" onClick={() => this.handleButtonClick('Kontakt')} > Kontakt </a></button>
                            </div>
                            <form className="d-flex" role="search">
                                <input 
                                className="form-control me-2 mx-1" 
                                type="search" 
                                placeholder="Search" 
                                aria-label="Search" 
                                />
                                <button className="btn btn-outline-success" type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navbar;