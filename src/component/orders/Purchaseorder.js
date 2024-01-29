import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Purchaseorder() {
  const [selectAll, setSelectAll] = useState(false);
  const [orders, setOrders] = useState([
    {
      id: 1,
      date: "Jan 23, 2023",
      customer: "Brandon Jacob",
      channel: "Website",
      products: ["product1", "product2", "product3", "product4", "product5"],
      total: "$234.00",
      status: "Paid",
    },

    {
      id: 2,
      date: "Feb 14, 2023",
      customer: "Alice Smith",
      channel: "Mobile App",
      products: ["product2", "product3", "product6"],
      total: "$123.50",
      status: "Await Shipping",
    },
    {
      id: 3,
      date: "Mar 5, 2023",
      customer: "John Doe",
      channel: "In-store",
      products: ["product1", "product4"],
      total: "$89.99",
      status: "Shipped",
    },
    // Add more dummy data as needed
  ]);

  const toggleSelectAll = () => {
    setSelectAll(!selectAll);
  };

  const handleSelectRow = () => {
    // Implement row selection logic here
  };
  const handleStatusChange = (rowId, newStatus) => {
    setOrders((prevRequests) =>
      prevRequests.map((request) =>
        request.id === rowId ? { ...request, status: newStatus } : request
      )
    );
  };

  return (
    <div>
      <div className="pagetitle">
        <h1>Purchase orders</h1>
        <nav>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="/">Home</a>
            </li>
            <li className="breadcrumb-item active">Purchase orders</li>
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
                  Recent Sales <span>| Today</span>
                </h5>
                <table className="table datatable">
                  <thead>
                    <tr>
                      <th scope="col">
                        <input
                          type="checkbox"
                          checked={selectAll}
                          onChange={toggleSelectAll}
                        />
                      </th>
                      <th scope="col">Order</th>
                      <th scope="col">Date</th>
                      <th scope="col">Customer</th>
                      <th scope="col">Channel</th>
                      <th scope="col">Products</th>
                      <th scope="col">Total</th>
                      <th scope="col">Status</th>
                    </tr>
                  </thead>

                  <tbody>
                    {orders.map((order) => (
                      <tr key={order.id}>
                        <td>
                          <input
                            type="checkbox"
                            checked={selectAll}
                            onChange={handleSelectRow}
                          />
                        </td>
                        <th scope="row">
                          <a href={`#${order.id}`}>{`#${order.id}`}</a>
                        </th>
                        <td>{order.date}</td>
                        <td>{order.customer}</td>
                        <td>{order.channel}</td>
                        <td>
                          <Link to="/shipment" className="text-primary">
                            {order.products.join(", ")}
                          </Link>
                        </td>
                        <td>{order.total}</td>
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
                          <div style={{ width: "70%" }}>
                            <select
                              id="inputState"
                              className="form-select"
                              value={order.status}
                              onChange={(e) =>
                                handleStatusChange(order.id, e.target.value)
                              }
                            >
                              <option>Await Shipping</option>
                              <option>Shipped</option>
                            </select>
                          </div>
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
    </div>
  );
}

// function to determine badge color based on status
const getStatusColor = (status) => {
  switch (status) {
    case "Await Shipping":
      return "warning";
    case "Shipped":
      return "success";
    default:
      return "secondary";
  }
};

export default Purchaseorder;
