import React, { useState } from "react";
import category from "../../assets/images/category.jpg";
import posprod from "../../assets/images/pos-products.jpg";
import { Link } from "react-router-dom";

function Onboard() {
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
          <h1>Add Products</h1>
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
            <div className="col-xl-4">
              <div className="card p-4">
                <div className="text-center">
                  <Link to="/addproducts">
                    <button id="addmanual" className="btn btn-primary">
                      <i className="bi bi-upc-scan"></i>&nbsp; &nbsp;Scan
                      Barcode
                    </button>
                  </Link>
                </div>
                <div className="text-center">
                  <Link to="/addproducts">
                    <button id="addmanual" className="btn btn-primary">
                      <i className="bi bi-pencil"></i> &nbsp; &nbsp;Add Manually
                    </button>
                  </Link>
                </div>
              </div>
            </div>

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
                        <Link to="/editproduct">
                          <p>
                            <i className="bi bi-pencil"></i> EDIT
                          </p>
                        </Link>
                      </div>
                      <img src={product.image} alt="" id="posprod" />
                      <br />
                      <span>{product.category}</span>
                      <h3>{product.name}</h3>
                      <p>${product.price.toFixed(2)}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Onboard;
