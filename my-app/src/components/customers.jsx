import React, { useEffect, useState } from 'react';

const api = process.env.REACT_APP_API_URL || 'http://localhost:3000';

function CustomerCatalog() {
  const [customers, setCustomers] = useState([]);
  const [editableCustomerId, setEditableCustomerId] = useState(null); // Track which customer is being edited
  const [editedCustomer, setEditedCustomer] = useState({}); // Track changes to the edited customer

  useEffect(() => {
    fetch(`${api}/customers`)
      .then(response => response.json())
      .then(data => {
        const sortedData = sortCustomers(data);
        setCustomers(sortedData);
      })
      .catch(error => console.error('Error fetching customers:', error));
  }, []);

    // Function to sort customers by CustomerName
    const sortCustomers = (customers) => {
      return customers.sort((a, b) => a.CustomerName.localeCompare(b.CustomerName));
    };

    // Handle input change for editing customer
  const handleInputChange = (customerId, field, value) => {
    setEditedCustomer(prev => ({
      ...prev,
      [customerId]: {
        ...prev[customerId],
        [field]: value,
      },
    }));
  };

  // Handle patch request for customer update
  const handleSave = (customerId) => {
    const updatedCustomer = editedCustomer[customerId];
    fetch(`${api}/customers/${customerId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedCustomer),
    })
      .then(response => {
        if (response.ok) {
          setCustomers(customers.map(customer =>
            customer.CustomerID === customerId ? { ...customer, ...updatedCustomer } : customer
          ));
          setEditableCustomerId(null); // Exit edit mode
        }
        else {
          alert('Failed to update customer');
        }
      });
  };

  // Handle delete request
  const handleDelete = (customerId) => {
    fetch(`${api}/customers/${customerId}`, {
      method: 'DELETE',
    })
      .then(response => {
        if (response.ok) {
          setCustomers(customers.filter(customer => customer.CustomerID !== customerId));
        }
        else {
          alert('Failed to delete customer');
        }
      });
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Kundenliste</h1>

      <button 
        className="btn btn-primary px-4 py-2 mb-4"
        onClick={() => setEditableCustomerId('new')}
      >
        Neuen Kunden erfassen
      </button>

      {editableCustomerId === 'new' && (
        <div className="mb-4 p-4 border rounded">
          <input
            className="border p-2 mb-2 w-full"
            type="text"
            placeholder="Kundenname"
            value={editedCustomer['new']?.CustomerName || ''}
            onChange={(e) => handleInputChange('new', 'CustomerName', e.target.value)}
          />
          <input
            className="border p-2 mb-2 w-full"
            type="text"
            placeholder="Direktkontakt"
            value={editedCustomer['new']?.ContactName || ''}
            onChange={(e) => handleInputChange('new', 'ContactName', e.target.value)}
          />
          <div className="flex space-x-2">
            <button
              className="btn btn-secondary px-4 py-2 mb-4"
              onClick={() => {
                const newCustomer = editedCustomer['new'];
                fetch(`${api}/customers`, {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify(newCustomer),
                })
                  .then(response => response.json())
                  .then(data => {
                    setCustomers([...customers, data]);
                    setEditableCustomerId(null);
                    setEditedCustomer(prev => {
                      const { new: _, ...rest } = prev;
                      return rest;
                    });
                    window.location.reload(); // Refresh the page
                  });
              }}
            >
              Save
            </button>
            <button 
              className="btn btn-secondary px-4 py-2 mb-4 mx-1"
              onClick={() => setEditableCustomerId(null)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      <table className="min-w-full bg-white border">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Kundenname</th>
            <th className="py-2 px-4 border-b">Direktkontakt</th>
            <th className="py-2 px-4 border-b">Aktionen</th>
          </tr>
        </thead>
        <tbody>
        {customers.map(customer => (
            <tr key={customer.CustomerID} className="hover:bg-gray-100">
              <td className="py-2 px-4 border-b">
                {editableCustomerId === customer.CustomerID ? (
                  <input
                    className="border p-2 w-full"
                    type="text"
                    value={editedCustomer[customer.CustomerID]?.CustomerName || customer.CustomerName}
                    onChange={(e) =>
                      handleInputChange(customer.CustomerID, 'CustomerName', e.target.value)
                    }
                  />
                ) : (
                  customer.CustomerName
                )}
              </td>
              <td className="py-2 px-4 border-b">
                {editableCustomerId === customer.CustomerID ? (
                  <input
                    className="border p-2 w-full"
                    type="text"
                    value={editedCustomer[customer.CustomerID]?.ContactName || customer.ContactName}
                    onChange={(e) =>
                      handleInputChange(customer.CustomerID, 'ContactName', e.target.value)
                    }
                  />
                ) : (
                  customer.ContactName
                )}
              </td>
              <td className="py-2 px-4 border-b">
                {editableCustomerId === customer.CustomerID ? (
                  <div className="flex space-x-2">
                    <button 
                      className="btn btn-secondary px-4 py-2 mb-4 mx-1"
                      onClick={() => handleSave(customer.CustomerID)}
                    >
                      Save
                    </button>
                    <button 
                      className="btn btn-secondary px-4 py-2 mb-4 mx-1"
                      onClick={() => setEditableCustomerId(null)}
                    >
                      Cancel
                    </button>
                  </div>
                ) : (
                  <div className="flex space-x-2">
                    <button 
                      className="btn btn-success px-4 py-2 mb-4 mx-1"
                      onClick={() => setEditableCustomerId(customer.CustomerID)}
                    >
                      Edit
                    </button>
                    <button 
                      className="btn btn-danger px-4 py-2 mb-4 mx-1"
                      onClick={() => handleDelete(customer.CustomerID)}
                    >
                      Delete
                    </button>
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CustomerCatalog;