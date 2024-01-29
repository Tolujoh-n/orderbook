import React, { useState } from "react";
import { Link } from "react-router-dom";

function Warehouseorders() {
  const [filter, setFilter] = useState("Today");

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  const handleDelete = (rowId) => {
    // Implement the logic to delete the row
    // use the rowId to identify the row you want to delete
    // API call to delete the data
  };

  const ordersData = [
    {
      id: 1,
      product: "Litprod",
      amount: "$500",
      quantity: 6,
      totalMileage: "8km",
      logistics: "$15",
      supplierName: "Neamont",
      supplierAddress: "California Dc",
      subTotal: "$515",
      taxEstimate: "$5",
      grandTotal: "$520",
      status: "Accepted",
    },
    {
      id: 2,
      product: "Litprod1",
      amount: "$500",
      quantity: 6,
      totalMileage: "8km",
      logistics: "$15",
      supplierName: "Neamont",
      supplierAddress: "California Dc",
      subTotal: "$515",
      taxEstimate: "$5",
      grandTotal: "$520",
      status: "Rejected",
    },
    {
      id: 2,
      product: "Litprod2",
      amount: "$500",
      quantity: 6,
      totalMileage: "8km",
      logistics: "$15",
      supplierName: "Neamont",
      supplierAddress: "California Dc",
      subTotal: "$515",
      taxEstimate: "$5",
      grandTotal: "$520",
      status: "Accepted",
    },
    {
      id: 3,
      product: "Litprod3",
      amount: "$500",
      quantity: 6,
      totalMileage: "8km",
      logistics: "$15",
      supplierName: "Neamont",
      supplierAddress: "California Dc",
      subTotal: "$515",
      taxEstimate: "$5",
      grandTotal: "$520",
      status: "Pending",
    },
  ];

  return (
    <>
      <div className="pagetitle">
        <h1>Warehouse orders</h1>
        <nav>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="/">Home</a>
            </li>
            <li className="breadcrumb-item active">Orders</li>
          </ol>
        </nav>
      </div>
      <div className="col-lg-12">
        <div className="row">
          <div className="col-12 text-right mb-3">
            <Link to="/warerequest">
              <button id="submitbut" className="btn btn-primary">
                Create&nbsp;Request
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
                  Warehouse Orders <span>| {filter}</span>
                </h5>
                <table className="table datatable">
                  <thead>
                    <tr>
                      <th scope="col">Select</th>
                      <th scope="col">Product</th>
                      <th scope="col">Amount($)</th>
                      <th scope="col">Quantity</th>
                      <th scope="col">Total Mileage(km)</th>
                      <th scope="col">Logistics($)</th>
                      <th scope="col">Supplier Name</th>
                      <th scope="col">Supplier Address</th>
                      <th scope="col">Sub Total</th>
                      <th scope="col">Tax Estimate</th>
                      <th scope="col">Grand Total</th>
                      <th scope="col">Status</th>
                      <th scope="col"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {ordersData.map((order) => (
                      <tr key={order.id}>
                        <td>
                          <input type="checkbox" />
                        </td>
                        <td>
                          <Link to="/vieworderbook" className="text-primary">
                            {order.product}
                          </Link>
                        </td>
                        <td>{order.amount}</td>
                        <td>{order.quantity}</td>
                        <td>{order.totalMileage}</td>
                        <td>{order.logistics}</td>
                        <td>{order.supplierName}</td>
                        <td>{order.supplierAddress}</td>
                        <td>{order.subTotal}</td>
                        <td>{order.taxEstimate}</td>
                        <td>{order.grandTotal}</td>
                        <td>
                          <span
                            className={`badge bg-${getStatusColor(
                              order.status
                            )}`}
                          >
                            {order.status}
                          </span>
                        </td>
                        <td>
                          <Link to="/editwarerequest">
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
                            onClick={() => handleDelete(order.id)}
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
// function to determine badge color based on status
const getStatusColor = (status) => {
  switch (status) {
    case "Accepted":
      return "success";
    case "Pending":
      return "warning";
    case "Rejected":
      return "danger";
    default:
      return "secondary";
  }
};


export default Warehouseorders;
