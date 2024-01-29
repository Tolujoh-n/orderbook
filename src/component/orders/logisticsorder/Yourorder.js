import React, { useState } from "react";
import { Link } from "react-router-dom";

function Yourorder() {
  const [filter, setFilter] = useState("Today");

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  const handleDelete = (rowId) => {
    // Implement the logic to delete the row
    // use the rowId to identify the row you want to delete
    // API call to delete the data
  };

  const supplierToWarehouseOrders = [
    {
      id: 1,
      product: "Litprod",
      quantity: 5,
      totalMilage: "8km",
      supplierName: "Neamont",
      supplierAddress: "Califonia Dc",
      warehouseName: "Shooshi mapp",
      warehouseAddress: "Texas",
      tax: "$4",
      fee: "$24",
      total: "$20",
    },
    {
      id: 2,
      product: "AnotherProduct",
      quantity: 3,
      totalMilage: "6km",
      supplierName: "Supplier2",
      supplierAddress: "Address2",
      warehouseName: "Warehouse2",
      warehouseAddress: "Address3",
      tax: "$3",
      fee: "$15",
      total: "$18",
    },
    {
      id: 3,
      product: "NewProduct",
      quantity: 4,
      totalMilage: "5km",
      supplierName: "Supplier3",
      supplierAddress: "Address3",
      warehouseName: "Warehouse3",
      warehouseAddress: "Address3",
      tax: "$5",
      fee: "$20",
      total: "$25",
    },
  ];

  const warehouseToConsumersOrders = [
    {
      id: 1,
      product: "Litprod",
      quantity: 5,
      totalMilage: "8km",
      warehouseName: "Neamont",
      warehouseAddress: "Califonia Dc",
      customerName: "Shooshi mapp",
      customerAddress: "Texas",
      tax: "$4",
      fee: "$24",
      total: "$20",
    },
    {
      id: 2,
      product: "AnotherProduct",
      quantity: 3,
      totalMilage: "6km",
      warehouseName: "Warehouse2",
      warehouseAddress: "Address2",
      customerName: "Customer2",
      customerAddress: "Address3",
      tax: "$3",
      fee: "$15",
      total: "$18",
    },
    {
      id: 3,
      product: "NewProduct",
      quantity: 4,
      totalMilage: "5km",
      warehouseName: "Warehouse3",
      warehouseAddress: "Address3",
      customerName: "Customer3",
      customerAddress: "Address3",
      tax: "$5",
      fee: "$20",
      total: "$25",
    },
  ];

  return (
    <>
      <div className="pagetitle">
        <h1>Your Orders</h1>
        <nav>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="/">Home</a>
            </li>
            <li className="breadcrumb-item active">orders</li>
          </ol>
        </nav>
      </div>

      {/* Supplier to Warehouse */}
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
                  Supplier to Warehouse <span>| {filter}</span>
                </h5>
                <table className="table datatable">
                  <thead>
                    <tr>
                      <th scope="col">Select</th>
                      <th scope="col">Product</th>
                      <th scope="col">Quantity</th>
                      <th scope="col">Total Milage(km)</th>
                      <th scope="col">Supplier Name</th>
                      <th scope="col">Supplier Address</th>
                      <th scope="col">Retailer Name</th>
                      <th scope="col">Retailer Address</th>
                      <th scope="col">Tax</th>
                      <th scope="col">Fee</th>
                      <th scope="col">Total</th>
                      <th scope="col"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {supplierToWarehouseOrders.map((order) => (
                      <tr key={order.id}>
                        <td>
                          <input type="checkbox" />
                        </td>
                        <td>
                          <a href="#" className="text-primary">
                            {order.product}
                          </a>
                        </td>
                        <td>{order.quantity}</td>
                        <td>{order.totalMilage}</td>
                        <td>{order.supplierName}</td>
                        <td>{order.supplierAddress}</td>
                        <td>{order.warehouseName}</td>
                        <td>{order.warehouseAddress}</td>
                        <td>{order.tax}</td>
                        <td>{order.fee}</td>
                        <td>{order.total}</td>
                        <td>
                          <button type="button" className="btn btn-primary">
                            Delivered
                          </button>
                        </td>
                        <td>
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
      {/* End of Supplier to Warehouse */}

      {/* Warehouse to Consumers */}
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
                  Warehouse to Consumers <span>| {filter}</span>
                </h5>
                <table className="table datatable">
                  <thead>
                    <tr>
                      <th scope="col">Select</th>
                      <th scope="col">Product</th>
                      <th scope="col">Quantity</th>
                      <th scope="col">Total Milage(km)</th>
                      <th scope="col">Retailer Name</th>
                      <th scope="col">Retailer Address</th>
                      <th scope="col">Customer Name</th>
                      <th scope="col">Customer Address</th>
                      <th scope="col">Tax</th>
                      <th scope="col">Fee</th>
                      <th scope="col">Total</th>
                      <th scope="col"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {warehouseToConsumersOrders.map((order) => (
                      <tr key={order.id}>
                        <td>
                          <input type="checkbox" />
                        </td>
                        <td>
                          <a href="/vieworderbook" className="text-primary">
                            {order.product}
                          </a>
                        </td>
                        <td>{order.quantity}</td>
                        <td>{order.totalMilage}</td>
                        <td>{order.warehouseName}</td>
                        <td>{order.warehouseAddress}</td>
                        <td>{order.customerName}</td>
                        <td>{order.customerAddress}</td>
                        <td>{order.tax}</td>
                        <td>{order.fee}</td>
                        <td>{order.total}</td>
                        <td>
                          <button type="button" className="btn btn-primary">
                            Delivered
                          </button>
                        </td>
                        <td>
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
      {/* End of Warehouse to Consumers */}
    </>
  );
}

export default Yourorder;
