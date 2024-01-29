import React, { useState } from "react";
import product from "../assets/images/bluewallet.png";
import { Link } from "react-router-dom";

const CustomCard = ({ title, description, linkTo, buttonText }) => {
  return (
    <div className="col-lg-12">
      <div className="row">
        <div className="col-xxl-4 col-xl-12">
          <div className="card info-card customers-card">
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <div id="content">
                <p>{description}</p>
                <div className="col-md-12 text-center">
                  <Link to={linkTo}>
                    <button
                      id="submitbut"
                      type="button"
                      className="button button-a button-big button-rounded"
                    >
                      {buttonText}
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// function to determine badge color based on status
const getStatusColor = (status) => {
  switch (status) {
    case "Received":
      return "success";
    case "Delivered":
      return "warning";
    case "Shipped":
      return "danger";
    default:
      return "secondary";
  }
};

// table data array
const salesData = [
  { id: 1, product: "product1", customer: "Brandon Jacob", price: "$0", status: "Received", link: "/product1" },
  { id: 2, product: "product1", customer: "Bridie Kessler", price: "$0", status: "Delivered", link: "/product1" },
  { id: 3, product: "product1", customer: "Angus Grady", price: "$0", status: "Shipped", link: "/product1" },
];

function Home() {
  const [filter, setFilter] = useState("Today"); // Default filter

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  return (
    <>
      <div className="pagetitle">
        <h1>Dashboard</h1>
        <nav>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="index.html">Home</a>
            </li>
            <li className="breadcrumb-item active">Dashboard</li>
          </ol>
        </nav>
      </div>

      {/* suplier contents */}
      <CustomCard
        title="(Supplier)Create a Distribution Request"
        description="Enter details about your product and price. Other parties may counter-offer. Once an agreement is reached, your order will be moved to the logistics book where it can be fulfilled."
        linkTo="/suprequest"
        buttonText="Enter"
      />

      <CustomCard
        title="(Supplier)View Incoming Purchase Orders"
        description="View orders that warehouses have sent to you. You can agree
        to the order terms or propose a counter offer. Once accepted
        the order will be pushed to the logistics book for
        fulfillment."
        linkTo="/supplierincomingorders"
        buttonText="Enter"
      />

      <CustomCard
        title="(Supplier)View Sent Requests"
        description="See the orders you have previously sent. You can choose to
        cancel or alter details here."
        linkTo="/supplierdistrib"
        buttonText="Enter"
      />
      <CustomCard
        title="(Supplier)Set your Profile information"
        description="Set your name, contact information, and address."
        linkTo="/createprofile"
        buttonText="Set profile"
      />
      {/* End of Supplier content */}

      {/* Logistics contents */}
      <CustomCard
        title="(Logistics)View Potential Orders"
        description="View orders that are in need of transportation. You may
        accept or negotiate the fee you will receive here."
        linkTo="/potentiaorders"
        buttonText="Enter"
      />
      <CustomCard
        title="(Logistics)View Your Transport Orders"
        description="View the transportation orders that you are responsible for
        fulfilling. See both current and past deliveries."
        linkTo="/yourpotentiaorders"
        buttonText="Enter"
      />
      <CustomCard
        title=" (Logistics)Set your Profile information"
        description="Set your name, contact information, and address."
        linkTo="/createprofile"
        buttonText="Set profile"
      />

      {/* End of Logistics content */}

      {/* Other content downward is for the retailer */}
      <CustomCard
        title="View Purchase Orders"
        description="See all Purchase Orders from customers from the Grocey
        Application"
        linkTo="/purchaseorder"
        buttonText="Purchase Orders"
      />
      <CustomCard
        title="View Distribution Requests"
        description="See what suppliers are trying to push. You can counter-offer
        with your own bid. If you come to an agreement the order
        will be pushed to the logistics book to be filled."
        linkTo="/ware_distribution_request"
        buttonText="Enter"
      />
      <CustomCard
        title="Create a Purchase Request"
        description="Enter details about your warehousing needs and issue an
        order to a supplier. They may counter-offer. Once an
        agreement is reached, your order will be moved to the
        logistics book where it can be fulfilled."
        linkTo="/warerequest"
        buttonText="Enter"
      />
      <CustomCard
        title="Set your Profile information"
        description="Set your name, contact information, and address."
        linkTo="/createprofile"
        buttonText="Set profile"
      />

      <CustomCard
        title="Add product"
        description="Write a description, add photos, and set pricing for the
        product you plan to sell"
        linkTo="/onboard"
        buttonText="Add product"
      />

      <div className="col-lg-12">
        <div className="row">
          {/* Sales Card */}
          <div className="col-xxl-4 col-md-6">
            <div className="card info-card sales-card">
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
                  Sales <span>| Today</span>
                </h5>

                <div className="d-flex align-items-center">
                  <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                    <i className="bi bi-cart"></i>
                  </div>
                  <div className="ps-3">
                    <h6>0</h6>
                    <span className="text-success small pt-1 fw-bold">
                      12%
                    </span>{" "}
                    <span className="text-muted small pt-2 ps-1">increase</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End Sales Card */}

          {/* Revenue Card */}
          <div className="col-xxl-4 col-md-6">
            <div className="card info-card revenue-card">
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
                  Revenue <span>| This Month</span>
                </h5>

                <div className="d-flex align-items-center">
                  <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                    <i className="bi bi-currency-dollar"></i>
                  </div>
                  <div className="ps-3">
                    <h6>$0</h6>
                    <span className="text-success small pt-1 fw-bold">
                      8%
                    </span>{" "}
                    <span className="text-muted small pt-2 ps-1">increase</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* End Revenue Card */}
          {/* Customers Card */}
          <div className="col-xxl-4 col-xl-12">
            <div className="card info-card customers-card">
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
                  Customers <span>| This Year</span>
                </h5>
                <div className="d-flex align-items-center">
                  <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                    <i className="bi bi-people"></i>
                  </div>
                  <div className="ps-3">
                    <h6>0</h6>
                    <span className="text-danger small pt-1 fw-bold">
                      12%
                    </span>{" "}
                    <span className="text-muted small pt-2 ps-1">decrease</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* End Customers Card */}
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
                  Recent Sales <span>| Today</span>
                </h5>
                <table className="table datatable">
                  <thead>
                    <tr>
                      <th scope="col">No</th>
                      <th scope="col">Product</th>
                      <th scope="col">Customer</th>
                      <th scope="col">Price</th>
                      <th scope="col">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {salesData.map((sale) => (
                      <tr key={sale.id}>
                        <th scope="row">
                          <a href="#">{sale.id}</a>
                        </th>
                        <td>
                          <img src={product} alt="Product" id="tableimg" />
                          <a href={sale.link} className="text-primary">
                            {sale.product}
                          </a>
                        </td>
                        <td>{sale.customer}</td>
                        <td>{sale.price}</td>
                        <td>
                          <span
                            className={`badge bg-${getStatusColor(
                              sale.status
                            )}`}
                          >
                            {sale.status}
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
      {/* End of retailer content */}
    </>
  );
}

export default Home;
