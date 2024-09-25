import React from 'react';
import { Link } from "react-router-dom";

function SiteMap() {
    return (
        <div className="container mt-5">
            <div style={{display: 'flex', alignItems: 'left'}}>
                <img src="/assets/img/sitemap.png" alt="Tree" style={{width: '50px', height: '50px', marginRight: '10px'}} />
                <h1 className="mb-4">Sitemap</h1>
            </div>
            <div className="list-group">
                <Link to="/" className="list-group-item list-group-item-action">Home</Link>
                <div className="list-group-item">
                    <Link to="/Kundenliste" className="list-group-item list-group-item-action">Kundenliste</Link>
                    <div className="ml-4">
                        <Link to="/kategorien" className="list-group-item list-group-item-action">Kategorien</Link>
                        <Link to="/produktliste" className="list-group-item list-group-item-action">Produktliste</Link>
                    </div>
                </div>
                <Link to="/kontakt" className="list-group-item list-group-item-action">Kontakt</Link>
            </div>
        </div>
    );
}

export default SiteMap;