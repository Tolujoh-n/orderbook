import React from "react";
import { Link, NavLink } from "react-router-dom";

const Sidenav = () => {
  return (
    <aside className="sidebar">
      <ul className="sidebar-nav" id="sidebar-nav">
        <li className="nav-item">
          <NavLink to="/" className="nav-link">
            <i className="bi bi-house"></i>
            <span>Home</span>
          </NavLink>
        </li>

        <li className="nav-item">
          <Link
            to="/purchaseorder"
            className="nav-link collapsed"
            data-target="#Orders-nav"
            data-toggle="collapse"
          >
            <i className="bi bi-cart3"></i>
            <span>Orders(Retailer)</span>
            <i className="bi bi-chevron-down ms-auto"></i>
          </Link>
          <ul
            id="Orders-nav"
            className="nav-content collapse"
            data-parent="#sidebar-nav"
          >
            <li>
              <NavLink to="/purchaseorder">
                <i className="bi bi-circle"></i>
                <span>Purchase Orders</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/ware_distribution_request">
                <i className="bi bi-circle"></i>
                <span>Distribution Request</span>
              </NavLink>
            </li>

            <li>
              <NavLink to="/warehouseorders">
                <i className="bi bi-circle"></i>
                <span>Your Orders</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/acceptedorder">
                <i className="bi bi-circle"></i>
                <span>Sent Orders</span>
              </NavLink>
            </li>
          </ul>
        </li>
        <li className="nav-item">
          <Link
            to="/supplierincomingorders"
            className="nav-link collapsed"
            data-target="#Orders-nav"
            data-toggle="collapse"
          >
            <i className="bi bi-cart3"></i>
            <span>Orders(Supplier)</span>
            <i className="bi bi-chevron-down ms-auto"></i>
          </Link>
          <ul
            id="Orders-nav"
            className="nav-content collapse"
            data-parent="#sidebar-nav"
          >
            <li>
              <NavLink to="/supplierincomingorders">
                <i className="bi bi-circle"></i>
                <span>Incoming Orders</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/supplierdistrib">
                <i className="bi bi-circle"></i>
                <span>Distribution Request</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/acceptedrequest">
                <i className="bi bi-circle"></i>
                <span>Accepted Request</span>
              </NavLink>
            </li>
          </ul>
        </li>
        <li className="nav-item">
          <Link
            to="/potentiaorders"
            className="nav-link collapsed"
            data-target="#Orders-nav"
            data-toggle="collapse"
          >
            <i className="bi bi-cart3"></i>
            <span>Orders(Logistics)</span>
            <i className="bi bi-chevron-down ms-auto"></i>
          </Link>
          <ul
            id="Orders-nav"
            className="nav-content collapse"
            data-parent="#sidebar-nav"
          >
            <li>
              <NavLink to="/potentiaorders">
                <i className="bi bi-circle"></i>
                <span>Potential Orders</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/yourpotentiaorders">
                <i className="bi bi-circle"></i>
                <span>Your Orders</span>
              </NavLink>
            </li>
          </ul>
        </li>

        <li className="nav-item">
          <Link
            to="/products"
            className="nav-link collapsed"
            data-target="#Products-nav"
            data-toggle="collapse"
          >
            <i className="bi bi-box"></i>
            <span>Products(Retailer)</span>
            <i className="bi bi-chevron-down ms-auto"></i>
          </Link>
          <ul
            id="Products-nav"
            className="nav-content collapse"
            data-parent="#sidebar-nav"
          >
            <li>
              <NavLink to="/collections">
                <i className="bi bi-circle"></i>
                <span>Collections</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/inventory">
                <i className="bi bi-circle"></i>
                <span>Inventory</span>
              </NavLink>
            </li>
          </ul>
        </li>

        {/* <li className="nav-item">
          <Link
            to="/"
            className="nav-link collapsed"
            data-target="#Customers-nav"
            data-toggle="collapse"
          >
            <i className="bi bi-people"></i>
            <span>Customers</span>
            <i className="bi bi-chevron-down ms-auto"></i>
          </Link>
          <ul id="Customers-nav" className="nav-content collapse" data-parent="#sidebar-nav">
            <li>
              <NavLink to="/segment">
                <i className="bi bi-circle"></i>
                <span>Segment</span>
              </NavLink>
            </li>
          </ul>
        </li> */}

        <li className="nav-item">
          <NavLink to="/pos" className="nav-link collapsed">
            <i className="bi bi-file-post"></i>
            <span>POS(Retailer)</span>
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink to="/messages" className="nav-link collapsed">
            <i className="bi bi-chat-left-text"></i>
            <span>Messages</span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/notifications" className="nav-link collapsed">
            <i className="bi bi-bell"></i>
            <span>Notification</span>
          </NavLink>
        </li>

        <li className="nav-heading">Pages</li>

        <li className="nav-item">
          <NavLink to="/contact" className="nav-link collapsed">
            <i className="bi bi-envelope"></i>
            <span>Contact</span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/profile" className="nav-link collapsed">
            <i className="bi bi-person"></i>
            <span>Profile</span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/security" className="nav-link collapsed">
            <i className="bi bi-gear"></i>
            <span>Settings</span>
          </NavLink>
        </li>
      </ul>
    </aside>
  );
};

export default Sidenav;
