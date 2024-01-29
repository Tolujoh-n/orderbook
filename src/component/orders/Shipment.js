import React, { useEffect, useState } from "react";
import profile from "../../assets/images/bitcoin.png";
import product from "../../assets/images/bluewallet.png";

import { Link } from "react-router-dom";

function Shipment() {
  const [totalPrice, setTotalPrice] = useState(0);

  const products = [
    { id: 1, name: "product1", price: 23, status: "paid", image: product },
    { id: 2, name: "product2", price: 5, status: "paid", image: product },
    { id: 3, name: "product3", price: 6, status: "paid", image: product },
    { id: 4, name: "product4", price: 32, status: "paid", image: product },
    { id: 5, name: "product5", price: 4, status: "paid", image: product },
  ];

  useEffect(() => {
    updateTotalPrice();
  }, []); // Run once on component mount

  const updateTotalPrice = () => {
    const totalPrice = products.reduce(
      (sum, product) => sum + product.price,
      0
    );
    setTotalPrice(totalPrice);
  };

  return (
    <>
      <div className="col-lg-12">
        <div className="pagetitle">
          <h1>Shipment</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="/">Home</a>
              </li>
              <li className="breadcrumb-item active">Shipment Information</li>
            </ol>
          </nav>
        </div>

        <section className="section profile">
          <div className="row">
            <div className="col-xl-12">
              <div className="card">
                <div className="card-body profile-card pt-4 d-flex flex-column align-items-center">
                  <img src={profile} alt="Profile" className="rounded-circle" />
                  <h2>Customer name</h2>
                  <h3>Website</h3>
                </div>
              </div>
            </div>

            <div className="col-xl-6">
              <div className="card recent-sales overflow-auto">
                <div className="card-body">
                  <table className="table datatable">
                    <thead>
                      <tr>
                        <th scope="col">No</th>
                        <th scope="col">Product</th>
                        <th scope="col">Price</th>
                        <th scope="col">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {products.map((product) => (
                        <tr key={product.id}>
                          <th scope="row">
                            <a href="#">{product.id}</a>
                          </th>
                          <td>
                            <img
                              src={product.image}
                              alt="Product"
                              id="tableimg"
                            />
                            <a href="#" className="text-primary">
                              {product.name}
                            </a>
                          </td>
                          <td>${product.price}</td>
                          <td>
                            <span className="badge bg-success">
                              {product.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <div className="row">
                    <div className="col-lg-3 col-md-4 label">Total:</div>
                    <div className="col-lg-9 col-md-8">
                      ${totalPrice.toFixed(2)}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-6">
              <div className="card">
                <div className="card-body pt-3">
                  <div className="tab-content pt-2">
                    <div
                      className="tab-pane fade show active profile-overview"
                      id="profile-overview"
                    >
                      <h5 className="card-title">Shipment Details</h5>

                      <div className="row">
                        <div className="col-lg-3 col-md-4 label ">
                          Customer Adress
                        </div>
                        <div className="col-lg-9 col-md-8">
                          Kevin Anderson Store
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-lg-3 col-md-4 label">
                          Customer Email
                        </div>
                        <div className="col-lg-9 col-md-8">
                          mystore@gmail.com
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-lg-3 col-md-4 label">
                          Delivary Hours
                        </div>
                        <div className="col-lg-9 col-md-8">3 hours</div>
                      </div>

                      <div className="row">
                        <div className="col-lg-3 col-md-4 label">
                          Custome Number
                        </div>
                        <div className="col-lg-9 col-md-8">
                          +44 323 3234 233
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center">
              <Link to="/">
                <button
                  id="submitbut"
                  type="button"
                  className="button button-a button-big button-rounded"
                >
                  Print Receipt
                </button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Shipment;
