import React, { useState } from "react";
import category from "../../assets/images/category.jpg";
import posprod from "../../assets/images/pos-products.jpg";

function Pos() {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Dummy data for testing
  const dummyProducts = [
    {
      name: "Water Melon",
      category: "fruits",
      image: posprod,
      price: 100.0,
    },
    {
      name: "Apple",
      category: "fruits",
      image: posprod,
      price: 50.0,
    },
    {
      name: "Orange",
      category: "fruits",
      image: posprod,
      price: 30.0,
    },
    {
      name: "Mango",
      category: "fruits",
      image: posprod,
      price: 6.0,
    },
    {
      name: "Pawpaw",
      category: "fruits",
      image: posprod,
      price: 8.0,
    },
    // Add more dummy products as needed
  ];

  const categories = [
    { id: 1, name: "Fruit", img: category },
    { id: 2, name: "Juice", img: category },
    { id: 3, name: "Vegetables", img: category },
    { id: 4, name: "Pepper", img: category },
    { id: 5, name: "Milks", img: category },
    { id: 6, name: "Sweats", img: category },
  ];

  const handleAddProduct = () => {
    if (selectedProduct) {
      setProducts((prevProducts) => [
        ...prevProducts,
        { ...selectedProduct, quantity: 1 },
      ]);
      setSelectedProduct(null); // Reset selectedProduct after adding to overflow
    }
  };

  const handleQuantityChange = (index, newQuantity) => {
    const updatedProducts = [...products];
    updatedProducts[index].quantity = newQuantity;
    setProducts(updatedProducts);
  };

  const handleRemoveProduct = (index) => {
    const updatedProducts = [...products];
    updatedProducts.splice(index, 1);
    setProducts(updatedProducts);
  };

  const calculateTotalPrice = () => {
    return products.reduce(
      (total, product) => total + product.price * product.quantity,
      0
    );
  };

  const handleClearAll = () => {
    setProducts([]);
  };

  const openModal = (product) => {
    setSelectedProduct(product);
    // Add logic to open your modal here
  };

  const closeModal = () => {
    setSelectedProduct(null);
    // Add logic to close your modal here
  };

  const filterProductsByCategory = (categoryName) => {
    setSelectedCategory(categoryName);
  };

  const filteredProducts =
    selectedCategory === null
      ? dummyProducts
      : dummyProducts.filter(
          (product) => product.category === selectedCategory
        );

  return (
    <>
      <div classNameName="col-lg-12">
        <div className="pagetitle">
          <h1>POS</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="/">Home</a>
              </li>
              <li className="breadcrumb-item active">Categories</li>
            </ol>
          </nav>
        </div>

        <section className="section contact">
          <div className="col-12">
            <div className="row">
              {categories.map((cat) => (
                <div key={cat.id} className="col-2 col-2">
                  <div className="cat-box">
                    <img src={cat.img} alt="" id="poscat" />
                    <p>{cat.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="row gy-4">
            <div className="col-xl-8">
              <div className="row">
                {filteredProducts.map((product, index) => (
                  <div key={index} className="col-lg-4 col-sm-4">
                    <div
                      className="prod-box"
                      onClick={() => {
                        openModal(product);
                      }}
                    >
                      <div className="hover-overlay">
                        <p onClick={handleAddProduct}>ADD</p>
                      </div>
                      <img src={product.image} alt="" id="posprod" />
                      <br />
                      <span>{product.category}</span>
                      <h3>{product.name}</h3>
                      <p>${product.price.toFixed(2)}</p>
                    </div>
                  </div>
                ))}

                {/* Modal for displaying product details */}
                {selectedProduct && (
                  <div className="modal">
                    <div className="modal-content">
                      {/* Dynamic content based on selectedProduct */}
                      <h3>{selectedProduct.name}</h3>
                      <p>${selectedProduct.price.toFixed(2)}</p>
                      <button onClick={handleAddProduct}>
                        Add to Overflow
                      </button>
                      <button onClick={closeModal}>Close</button>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="col-xl-4">
              <div className="card p-4">
                <form action="" className="php-email-form">
                  <div className="pos-row">
                    <div className="pos-column pos-total">
                      <div>Total Items: {products.length}</div>
                      <button
                        type="button"
                        onClick={handleClearAll}
                        className="clear-all-btn"
                      >
                        Clear All
                      </button>
                    </div>
                  </div>
                  <div className="text-center">
                    <button type="button" className="scan-barcode-btn">
                      <i className="bi bi-upc-scan"></i> &nbsp; &nbsp;Scan
                      Barcode
                    </button>
                  </div>

                  <div className="pos-overflow">
                    {products.map((product, index) => (
                      <div key={index} className="pos-product">
                        <div className="pos-product-details">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="pos-product-image"
                          />
                          <div className="pos-product-info">
                            <div>
                              <strong>{product.name}</strong>
                            </div>
                            <div>
                              <span>${product.price * product.quantity}</span>
                              <button
                                type="button"
                                onClick={() =>
                                  handleQuantityChange(
                                    index,
                                    Math.max(1, product.quantity - 1)
                                  )
                                }
                              >
                                <i className="fas fa-minus">-</i>
                              </button>
                              <span> {product.quantity}</span>

                              <button
                                type="button"
                                onClick={() =>
                                  handleQuantityChange(
                                    index,
                                    product.quantity + 1
                                  )
                                }
                              >
                                <i className="fas fa-plus">+</i>
                              </button>

                              <button
                                style={{
                                  background: "transparent",
                                  textAlign: "right",
                                }}
                                type="button"
                                onClick={() => handleRemoveProduct(index)}
                              >
                                <i
                                  className="bi bi-trash"
                                  style={{
                                    color: "#dc3545",
                                    fontWeight: "12px",
                                  }}
                                ></i>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="pos-summary">
                    <div className="pos-summary-table">
                      <div className="pos-summary-row">
                        <div className="pos-summary-cell">Total Items:</div>
                        <div className="pos-summary-cell pos-summary-cell-right">
                          {products.length}
                        </div>
                      </div>
                      <div className="pos-summary-row">
                        <div className="pos-summary-cell">Subtotal:</div>
                        <div className="pos-summary-cell pos-summary-cell-right">
                          ${calculateTotalPrice()}
                        </div>
                      </div>
                      <div className="pos-summary-row">
                        <div className="pos-summary-cell">Tax:</div>
                        <div className="pos-summary-cell pos-summary-cell-right">
                          $5
                        </div>
                      </div>
                      <div className="pos-summary-row">
                        <div className="pos-summary-cell">Total:</div>
                        <div className="pos-summary-cell pos-summary-cell-right">
                          ${calculateTotalPrice() + 5}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-12">
                    <div className="row">
                      <div className="col-lg-4 col-sm-4">
                        <div className="cat-box">
                          <i
                            className="bi bi-cash"
                            style={{
                              fontWeight: "12px",
                            }}
                          ></i>
                          <p>Cash</p>
                        </div>
                      </div>
                      <div className="col-lg-4 col-sm-4">
                        <div className="cat-box">
                          <i
                            className="bi bi-credit-card"
                            style={{
                              fontWeight: "12px",
                            }}
                          ></i>
                          <p>Debit</p>
                        </div>
                      </div>
                      <div className="col-lg-4 col-sm-4">
                        <div className="cat-box">
                          <i
                            className="bi bi-qr-code-scan"
                            style={{
                              fontWeight: "12px",
                            }}
                          ></i>
                          <p>Scan</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="text-center">
                    <button type="submit">Checkout</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Pos;
