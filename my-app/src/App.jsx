import React, { Component } from 'react';
import Navbar from "./components/navbar";
import ProductCatalog from './components/categories';
import CostumerCatalog from './components/customers';
import Productlist from './components/products';

class App extends Component {
    state = {  };

    render() {
        const { items } = this.state;

        return (
            <React.Fragment>
                <Navbar />
                <div className="product-container">
                    <ProductCatalog items={items} />
                    <CostumerCatalog items={items} />
                    <Productlist items={items} />
                </div>
            </React.Fragment>
        );
    }
}

export default App;