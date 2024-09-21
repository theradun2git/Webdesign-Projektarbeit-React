import React, { useEffect, useState } from 'react';

const api = process.env.REACT_APP_API_URL || 'http://localhost:3000';

function Productlist() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`${api}/products`)
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching customers:', error));
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Produktliste</h1>
      
      <button 
        className="btn btn-primary px-4 py-2 mb-4"
      >
        Neues Produkt hinzufügen
      </button>

      <table className="min-w-full bg-white border">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Produktname</th>
            <th className="py-2 px-4 border-b">Direktkontakt</th>
            <th className="py-2 px-4 border-b">Aktionen</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.ProductID} className="hover:bg-gray-100">
              <td className="py-2 px-4 border-b">{product.ProductName}</td>
              <td className="py-2 px-4 border-b">{product.Unit}</td>
              <td className="flex space-x-2">
                {/* Hier kannst du Aktionen wie Bearbeiten oder Löschen hinzufügen */}
                <button className="btn btn-success px-4 py-2 mb-4 mx-1">Edit</button>
                <button className="btn btn-danger px-4 py-2 mb-4 mx-1">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Productlist;