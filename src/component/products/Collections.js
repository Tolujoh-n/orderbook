import React, { useState } from "react";
import { Link } from "react-router-dom";
import product from "../../assets/images/bluewallet.png";

function Collections() {
  const [filter, setFilter] = useState("Today");

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  const handleDelete = (rowId) => {
    // Implement the logic to delete the row
    // use the rowId to identify the row you want to delete
    // API call to delete the data
  };

  const collectionsData = [
    {
      id: 1,
      image: product,
      title: "Litprod",
      productCount: 5,
      productCondition: "Quantity control",
    },
    {
      id: 2,
      image: product,
      title: "Catprod",
      productCount: 5,
      productCondition: "Damaged",
    },
    {
      id: 3,
      image: product,
      title: "Dogprod",
      productCount: 3,
      productCondition: "New condition",
    },
    {
      id: 4,
      image: product,
      title: "Birdprod",
      productCount: 8,
      productCondition: "Old condition",
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
            <Link to="/createcollection">
              <button id="submitbut" className="btn btn-primary">
                Create Collection
              </button>
            </Link>
          </div>

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
                    <a
                      className="dropdown-item"
                      href="#"
                      onClick={() => handleFilterChange("Today")}
                    >
                      Today
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="#"
                      onClick={() => handleFilterChange("This Month")}
                    >
                      This Month
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="#"
                      onClick={() => handleFilterChange("This Year")}
                    >
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
                      <th scope="col">Select</th>
                      <th scope="col">Title</th>
                      <th scope="col">Product</th>
                      <th scope="col">Product Condition</th>
                      <th scope="col"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {collectionsData.map((collection) => (
                      <tr key={collection.id}>
                        <td>
                          <input type="checkbox" />
                        </td>
                        <td>
                          <img
                            src={collection.image}
                            alt="Product"
                            id="tableimg"
                          />
                          <a href="#" className="text-primary">
                            {collection.title}
                          </a>
                        </td>

                        <td>{collection.productCount}</td>
                        <td>
                          <div style={{ width: "60%" }}>
                            <select
                              id="inputState"
                              className="form-select"
                              value={collection.productCondition}
                              onChange={() => {}}
                            >
                              <option value="Quantity control">
                                Quantity control
                              </option>
                              <option value="Damaged">Damaged</option>
                              <option value="New condition">Expired</option>
                            </select>
                          </div>
                        </td>
                        <td>
                          <Link to="/editcollection">
                            <i
                              style={{ marginRight: "20px", cursor: "pointer" }}
                              className="bi bi-pencil"
                              title="Edit"
                            ></i>
                          </Link>
                          <i
                            style={{ cursor: "pointer" }}
                            className="bi bi-trash"
                            title="Delete"
                            onClick={() => handleDelete(collection.id)}
                          ></i>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Collections;
