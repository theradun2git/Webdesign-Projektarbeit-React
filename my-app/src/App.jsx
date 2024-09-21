import React, { Component } from 'react';
import Navbar from "./components/navbar";
import ProductCatalog from './components/productcatalog';

class App extends Component {
    state = { 
        items: []
    };

    render() {
        const { items } = this.state;

        return (
            <React.Fragment>
                <Navbar />
                <div>
                    <ProductCatalog items={items} />
                </div>
            </React.Fragment>
        );
    }
}

export default App;