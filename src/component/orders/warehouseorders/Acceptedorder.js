import React, { useState } from "react";
import { Link } from "react-router-dom";

function Acceptedorder() {
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
      warehouseName: "Neamont",
      warehouseAddress: "California Dc",
      subTotal: "$515",
      taxEstimate: "$5",
      grandTotal: "$520",
    },
    {
      id: 2,
      product: "Product2",
      amount: "$300",
      quantity: 4,
      totalMileage: "6km",
      logistics: "$10",
      warehouseName: "Warehouse2",
      warehouseAddress: "Address2",
      subTotal: "$310",
      taxEstimate: "$3",
      grandTotal: "$313",
    },
    {
      id: 3,
      product: "Product3",
      amount: "$700",
      quantity: 8,
      totalMileage: "10km",
      logistics: "$20",
      warehouseName: "Warehouse3",
      warehouseAddress: "Address3",
      subTotal: "$720",
      taxEstimate: "$7",
      grandTotal: "$727",
    },
  ];

  return (
    <>
      <div className="pagetitle">
        <h1>Sent Orders from Supplier</h1>
        <nav>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="/">Home</a>
            </li>
            <li className="breadcrumb-item active">Request</li>
          </ol>
        </nav>
      </div>
      <div className="col-lg-12">
        <div className="row">
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
          Sent orders <span>| {filter}</span>
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
                <td>{order.warehouseName}</td>
                <td>{order.warehouseAddress}</td>
                <td>{order.subTotal}</td>
                <td>{order.taxEstimate}</td>
                <td>{order.grandTotal}</td>
                <td>
                  <button type="button" className="btn btn-primary">
                    Received
                  </button>
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

export default Acceptedorder;
