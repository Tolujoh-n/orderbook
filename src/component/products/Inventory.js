import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import productImage from "../../assets/images/bluewallet.png";

function Inventory() {
  const [filter, setFilter] = useState("Today");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products data from your backend API and set it to the state

    // fetch('/api/products')
    //   .then(response => response.json())
    //   .then(data => setProducts(data))
    //   .catch(error => console.error('Error fetching products:', error));

    // For demonstration purposes, I'll initialize some sample data:
    const sampleProducts = [
      { id: 1, title: "Litprod", quantity: 5, available: 12, unavailable: 2 },
      { id: 2, title: "Catprod", quantity: 5, available: 12, unavailable: 0 },
      { id: 3, title: "Catprod", quantity: 5, available: 12, unavailable: 0 },
    ];

    setProducts(sampleProducts);
  }, []); // The empty dependency array ensures that this effect runs once, similar to componentDidMount

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
    // You may want to fetch filtered data based on the selected filter
  };

  const handleDelete = (productId) => {
    // Implement the logic to delete the product with the specified productId
    // fetch(`/api/products/${productId}`, { method: 'DELETE' })
    //   .then(response => response.json())
    //   .then(data => {
    //     // Update the state or perform other actions as needed
    //   })
    //   .catch(error => console.error('Error deleting product:', error));
  };

  const handleQuantityChange = (productId, newQuantity) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === productId
          ? { ...product, quantity: newQuantity }
          : product
      )
    );
    // Implement the logic to update the product quantity in the database

    // fetch(`/api/products/${productId}`, {
    //   method: 'PATCH',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({ quantity: newQuantity }),
    // })
    //   .then(response => response.json())
    //   .then(data => {
    //     // Update the state or perform other actions as needed
    //   })
    //   .catch(error => console.error('Error updating quantity:', error));
  };

  const handleAvailabilityChange = (productId, newAvailability) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === productId
          ? { ...product, available: newAvailability }
          : product
      )
    );
    // Implement the logic to update the product availability in the database

    // fetch(`/api/products/${productId}`, {
    //   method: 'PATCH',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({ available: newAvailability }),
    // })
    //   .then(response => response.json())
    //   .then(data => {
    //     // Update the state or perform other actions as needed
    //   })
    //   .catch(error => console.error('Error updating availability:', error));
  };

  const handleUnavailableChange = (productId, newUnavailable) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === productId
          ? { ...product, unavailable: newUnavailable }
          : product
      )
    );
    // Implement the logic to update the product unavailable quantity in the database

    // fetch(`/api/products/${productId}`, {
    //   method: 'PATCH',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({ unavailable: newUnavailable }),
    // })
    //   .then(response => response.json())
    //   .then(data => {
    //     // Update the state or perform other actions as needed
    //   })
    //   .catch(error => console.error('Error updating unavailable quantity:', error));
  };

  return (
    <>
      {/* ... Your existing JSX code ... */}

      <div className="col-12">
        <div className="pagetitle">
          <h1>Inventory</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="/">Home</a>
              </li>
              <li className="breadcrumb-item active">Inventory</li>
            </ol>
          </nav>
        </div>

        <div className="card recent-sales overflow-auto">
          {/* ... Your existing JSX code ... */}
          <div className="card-body">
            <h5 className="card-title">
              Recent Sales <span>| {filter}</span>
            </h5>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col">Select</th>
                  <th scope="col">Title</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Available</th>
                  <th scope="col">Unavailable</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr key={product.id}>
                    <td>
                      <input type="checkbox" />
                    </td>
                    <td>
                      <img src={productImage} alt="Product" id="tableimg" />
                      <Link
                        to={`/editproduct/${product.id}`}
                        className="text-primary"
                      >
                        {product.title}
                      </Link>
                    </td>
                    <td>
                      <div style={{ maxWidth: "60%" }} className="input-group">
                        <button
                          className="btn btn-outline-secondary"
                          type="button"
                          onClick={() =>
                            handleQuantityChange(
                              product.id,
                              product.quantity - 1
                            )
                          }
                        >
                          -
                        </button>
                        <input
                          type="text"
                          className="form-control text-center"
                          value={product.quantity}
                          onChange={(e) =>
                            handleQuantityChange(
                              product.id,
                              parseInt(e.target.value) || 0
                            )
                          }
                        />
                        <button
                          className="btn btn-outline-secondary"
                          type="button"
                          onClick={() =>
                            handleQuantityChange(
                              product.id,
                              product.quantity + 1
                            )
                          }
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td>{product.available}</td>

                    <td>
                      <div className="d-flex align-items-center">
                        <div
                          style={{ maxWidth: "60%" }}
                          className="input-group"
                        >
                          <button
                            className="btn btn-outline-secondary"
                            type="button"
                            onClick={() =>
                              handleUnavailableChange(
                                product.id,
                                product.unavailable - 1
                              )
                            }
                          >
                            -
                          </button>
                          <input
                            type="text"
                            className="form-control text-center"
                            value={product.unavailable}
                            onChange={(e) =>
                              handleUnavailableChange(
                                product.id,
                                parseInt(e.target.value) || 0
                              )
                            }
                          />
                          <button
                            className="btn btn-outline-secondary"
                            type="button"
                            onClick={() =>
                              handleUnavailableChange(
                                product.id,
                                product.unavailable + 1
                              )
                            }
                          >
                            +
                          </button>
                        </div>
                        <select
                          id={`inputState-${product.id}`}
                          className="form-select mx-2"
                        >
                          <option selected>Condition</option>
                          <option>Quantity control</option>
                          <option>Damaged</option>
                        </select>
                      </div>
                    </td>
                    <td>
                      <a href="/editproduct">
                        <i
                          style={{ cursor: "pointer" }}
                          className="bi bi-pencil"
                          title="Edit"
                          onClick={() => handleDelete(product.id)}
                        ></i>
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Inventory;
