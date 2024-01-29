import React, { useState } from "react";
import { Link } from "react-router-dom";

function Supplierdistrib() {
  const [filter, setFilter] = useState("Today");

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  const handleDelete = (rowId) => {
    // Implement the logic to delete the row
    // use the rowId to identify the row you want to delete
    // API call to delete the data
  };

  const distributionRequests = [
    {
      id: 1,
      product: "Litprod",
      amount: "$500",
      quantity: 6,
      totalMilage: "8km",
      logistics: "$15",
      retailerName: "Neamont",
      retailerAddress: "Califonia Dc",
      subTotal: "$515",
      taxEstimate: "$5",
      grandTotal: "$520",
      status: "Accepted",
    },
    {
      id: 2,
      product: "Productss",
      amount: "$300",
      quantity: 4,
      totalMilage: "5km",
      logistics: "$10",
      retailerName: "Retailer2",
      retailerAddress: "Address2",
      subTotal: "$310",
      taxEstimate: "$3",
      grandTotal: "$313",
      status: "Pending",
    },
    {
      id: 3,
      product: "AnotherProduct",
      amount: "$700",
      quantity: 8,
      totalMilage: "10km",
      logistics: "$20",
      retailerName: "Retailer3",
      retailerAddress: "Address3",
      subTotal: "$720",
      taxEstimate: "$7",
      grandTotal: "$727",
      status: "Rejected",
    },
    {
      id: 4,
      product: "NewProduct",
      amount: "$400",
      quantity: 5,
      totalMilage: "7km",
      logistics: "$12",
      retailerName: "Retailer4",
      retailerAddress: "Address4",
      subTotal: "$412",
      taxEstimate: "$4",
      grandTotal: "$416",
      status: "Accepted",
    },
  ];

  return (
    <>
      <div className="pagetitle">
        <h1>Product Distribution to Warehouse</h1>
        <nav>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="/">Home</a>
            </li>
            <li className="breadcrumb-item active">Distribution</li>
          </ol>
        </nav>
      </div>
      <div className="col-lg-12">
        <div className="row">
          <div className="col-12 text-right mb-3">
            <Link to="/suprequest">
              <button id="submitbut" className="btn btn-primary">
                Create&nbsp;Distribution
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
                  Distribution Request <span>| {filter}</span>
                </h5>
                <table className="table datatable">
                  <thead>
                    <tr>
                      <th scope="col">Select</th>
                      <th scope="col">Product</th>
                      <th scope="col">Amount($)</th>
                      <th scope="col">Quantity</th>
                      <th scope="col">Total Milage(km)</th>
                      <th scope="col">Logistics($)</th>
                      <th scope="col">Retailer Name</th>
                      <th scope="col">Retailer Address</th>
                      <th scope="col">Sub Total</th>
                      <th scope="col">Tax Estimate</th>
                      <th scope="col">Grand Total</th>
                      <th scope="col">Status</th>
                      <th scope="col"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {distributionRequests.map((request) => (
                      <tr key={request.id}>
                        <td>
                          <input type="checkbox" />
                        </td>
                        <td>
                          <a href="/vieworderbook" className="text-primary">
                            {request.product}
                          </a>
                        </td>
                        <td>{request.amount}</td>
                        <td>{request.quantity}</td>
                        <td>{request.totalMilage}</td>
                        <td>{request.logistics}</td>
                        <td>{request.retailerName}</td>
                        <td>{request.retailerAddress}</td>
                        <td>{request.subTotal}</td>
                        <td>{request.taxEstimate}</td>
                        <td>{request.grandTotal}</td>
                        <td>
                          <span
                            className={`badge bg-${getStatusColor(
                              request.status
                            )}`}
                          >
                            {request.status}
                          </span>
                        </td>
                        <td>
                          <Link to="/editsupplierrequest">
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
                            onClick={() => handleDelete(request.id)}
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

export default Supplierdistrib;
