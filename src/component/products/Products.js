import React, { useState } from "react";
import { Link } from "react-router-dom";
import product from "../../assets/images/bluewallet.png";

function Products() {
  const [filter, setFilter] = useState("Today"); // Default filter

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  const productsData = [
    {
      id: 1,
      image: product,
      name: "Product 1",
      inventory: "5 in stock",
      category: "Product Category",
      vendor: "Vendor Name",
      price: "$0",
      status: "Received",
    },
    {
      id: 2,
      image: product,
      name: "Product 2",
      inventory: "10 in stock",
      category: "Another Category",
      vendor: "Another Vendor",
      price: "$20",
      status: "paid",
    },
    {
      id: 3,
      image: product,
      name: "Product 3",
      inventory: "3 in stock",
      category: "New Category",
      vendor: "New Vendor",
      price: "$15",
      status: "Shipped",
    },
    {
      id: 4,
      image: product,
      name: "Product 4",
      inventory: "8 in stock",
      category: "Category 4",
      vendor: "Vendor 4",
      price: "$30",
      status: "Delivered",
    },
    {
      id: 5,
      image: product,
      name: "Product 4",
      inventory: "8 in stock",
      category: "Category 4",
      vendor: "Vendor 4",
      price: "$30",
      status: "Listed",
    },
  ];

  return (
    <>
      <div className="pagetitle">
        <h1>Products</h1>
        <nav>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="/">Home</a>
            </li>
            <li className="breadcrumb-item active">Product</li>
          </ol>
        </nav>
      </div>
      <div className="col-lg-12">
        <div className="row">
          <div className="col-12 text-right mb-3">
            <Link to="/onboard">
              <button id="submitbut" className="btn btn-primary">
                Add Product
              </button>
            </Link>
          </div>

          {/* Recent Sales */}
          <div className="col-12">
            <div className="card recent-sales overflow-auto">
              <div className="filter">
                <a className="icon" href="#" data-bs-toggle="dropdown">
                  <i className="bi bi-three-dots"></i>
                </a>
                <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                  <li className="dropdown-header text-start">
                    <h6>Filter</h6>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Today
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      This Month
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      This Year
                    </a>
                  </li>
                </ul>
              </div>
              <div className="card-body">
                <h5 className="card-title">
                  Recent Sales <span>| {filter}</span>
                </h5>
                <table className="table datatable">
                  <thead>
                    <tr>
                      <th scope="col">
                        <input type="checkbox" />
                      </th>
                      <th scope="col">Product</th>
                      <th scope="col">Inventory</th>
                      <th scope="col">Category</th>
                      <th scope="col">Vendor</th>
                      <th scope="col">Price</th>
                      <th scope="col">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {productsData.map((product) => (
                      <tr key={product.id}>
                        <td>
                          <input type="checkbox" />
                        </td>
                        <td>
                          <img
                            src={product.image}
                            alt="Product"
                            id="tableimg"
                          />
                          <a href="/viewproduct" className="text-primary">
                            {product.name}
                          </a>
                        </td>
                        <td>{product.inventory}</td>
                        <td>{product.category}</td>
                        <td>{product.vendor}</td>
                        <td>{product.price}</td>
                        <td>
                          <span
                            className={`badge bg-${getStatusColor(
                              product.status
                            )}`}
                          >
                            {product.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          {/* End Recent Sales */}
        </div>
      </div>
    </>
  );
}
// function to determine badge color based on status
const getStatusColor = (status) => {
  switch (status) {
    case "Received":
      return "success";
    case "Delivered":
      return "warning";
    case "Shipped":
      return "warning";
    case "paid":
      return "secondary";
    case "Listed":
      return "secondary";
    default:
      return "secondary";
  }
};

export default Products;
