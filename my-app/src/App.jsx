import React, { Component } from 'react';
import Navbar from "./components/navbar";
import Product from "./components/product";
import ShoppingCart from './components/shopping-cart';
import ProductCatalog from './components/productcatalog';

class App extends Component {
    state = { 
        items: [],
        searchTerm: '',
        filteredProducts: []
    };

    products = [
        { name: 'Wasser', price: 0.90, image: 'water.jpg', description: 'Füge Mineralwasser hinzu' },
        { name: 'Gewürze', price: 7.90, image: 'spices.jpg', description: 'Füge Gewürze hinzu' },
        { name: 'Süsswaren', price: 10.95, image: 'confections.jpg', description: 'Füge Süsswaren hinzu' },
        { name: 'Fleisch & Poulet', price: 44.90, image: 'meat-poultry.jpg', description: 'Füge Fleisch-Poulet hinzu' }
    ];

    componentDidMount() {
        this.setState({ filteredProducts: this.products });
    }

    addItem = (amount, name, price) => {
        let currentItems = this.state.items;

        let existingItem = this.state.items.find(item => item.name === name);
        if (existingItem) {
            existingItem.amount++;
        } else {
            currentItems.push({
                amount,
                name,
                price
            });
        }
        
        this.setState({ items: currentItems });
        console.log(this.state);
    };

    handleSearchChange = (event) => {
        this.setState({ searchTerm: event.target.value });
    };

    handleSearch = () => {
        const { searchTerm } = this.state;
        const filteredProducts = this.products.filter(product =>
            product.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        this.setState({ filteredProducts });
    };

    render() {
        const { searchTerm, filteredProducts, items } = this.state;

        return (
            <React.Fragment>
                <Navbar />
                <div className="main-container">
                    <div className="search-container">
                        <input
                            type="text"
                            placeholder="Suche..."
                            value={searchTerm}
                            onChange={this.handleSearchChange}
                        />
                        <button onClick={this.handleSearch}>Suche</button>
                    </div>
                    <div className="product-container">
                        {filteredProducts.map((product, index) => (
                            <Product
                                key={index}
                                onAdd={() => this.addItem(1, product.name, product.price)}
                                image={product.image}
                                title={product.name}
                                description={product.description}
                            />
                        ))}
                    </div>
                    <ShoppingCart items={items} />
                </div>
                <div>
                    <ProductCatalog items={items} />
                </div>
            </React.Fragment>
        );
    }
}

export default App;