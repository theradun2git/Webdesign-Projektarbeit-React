import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./components/navbar";
import ProductCatalog from './components/categories';
import CustomerCatalog from './components/customers';
import Productlist from './components/products';
import Banner from './components/banner';
import Greeting from './components/greetings';
import Contactform from './components/contact';
import SiteMap from './components/sitemap';
import KonamiCode from './components/konamicode ';


class App extends Component {
    state = { items: [] };

    render() {
        const { items } = this.state;

        return (
            <Router>
                <Navbar />
                <KonamiCode />
                <Routes>
                    <Route path="/" element={
                        <React.Fragment>
                            <div className="welcome-container">
                                <Banner />
                                <Greeting />
                            </div>
                        </React.Fragment>
                    } />
                    <Route path="/kategorien" element={<ProductCatalog items={items} />} />
                    <Route path="/Kundenliste" element={<CustomerCatalog items={items} />} />
                    <Route path="/produktliste" element={<Productlist items={items} />} />
                    <Route path="/kontakt" element={<Contactform />} />
                    <Route path="/sitemap" element={<SiteMap />} />
                </Routes>
            </Router>
        );
    }
}

export default App;