import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import product from "../../assets/images/bluewallet.png";

function Editcollection() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Code to handle form submission
  };

  return (
    <>
      <div className="pagetitle">
        <h1>Edit collection</h1>
        <nav>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="/">Home</a>
            </li>
            <li className="breadcrumb-item active">Edit collection</li>
          </ol>
        </nav>
      </div>

      <div className="col-xl-12">
        <div className="card p-4">
          <form>
            <div className="row gy-4">
              <div className="col-md-6">
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Collection Name"
                  required
                />
              </div>

              <div className="col-md-6 ">
                <input
                  type="text"
                  className="form-control"
                  name="description"
                  placeholder="Collection Description"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="productimgs">Collection Thumbnail</label>
                <input
                  type="file"
                  className="form-control"
                  id="collectionimgs"
                  required
                />
              </div>

              <div className="col-12">
                <div className="overflow-auto">
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
                      Select Products <span>| Today</span>
                    </h5>
                    <div className="collection">
                      <table className="table datatable">
                        <tbody>
                          <tr>
                            <td>
                              <input type="checkbox" />
                            </td>
                            <td>
                              <img src={product} alt="Product" id="tableimg" />
                              <a href="#" className="text-primary">
                                product1
                              </a>
                            </td>

                            <td>5 in stock</td>
                            <td>Product Category</td>
                            <td>Vendor Name</td>
                            <td>$0</td>
                            <td>
                              <span className="badge bg-success">Received</span>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <input type="checkbox" />
                            </td>
                            <td>
                              <img src={product} alt="Product" id="tableimg" />
                              <a href="#" className="text-primary">
                                product1
                              </a>
                            </td>

                            <td>5 in stock</td>
                            <td>Product Category</td>
                            <td>Vendor Name</td>
                            <td>$0</td>
                            <td>
                              <span className="badge bg-success">Received</span>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <input type="checkbox" />
                            </td>
                            <td>
                              <img src={product} alt="Product" id="tableimg" />
                              <a href="#" className="text-primary">
                                product1
                              </a>
                            </td>

                            <td>5 in stock</td>
                            <td>Product Category</td>
                            <td>Vendor Name</td>
                            <td>$0</td>
                            <td>
                              <span className="badge bg-success">Received</span>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <input type="checkbox" />
                            </td>
                            <td>
                              <img src={product} alt="Product" id="tableimg" />
                              <a href="#" className="text-primary">
                                product1
                              </a>
                            </td>

                            <td>5 in stock</td>
                            <td>Product Category</td>
                            <td>Vendor Name</td>
                            <td>$0</td>
                            <td>
                              <span className="badge bg-success">Received</span>
                            </td>
                          </tr>

                          <tr>
                            <td>
                              <input type="checkbox" />
                            </td>
                            <td>
                              <img src={product} alt="Product" id="tableimg" />
                              <a href="#" className="text-primary">
                                product1
                              </a>
                            </td>

                            <td>5 in stock</td>
                            <td>Product Category</td>
                            <td>Vendor Name</td>
                            <td>$0</td>
                            <td>
                              <span className="badge bg-success">Received</span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <button
                  id="submitbut"
                  type="submit"
                  className="button button-a button-big button-rounded"
                >
                  Confirm
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Editcollection;
