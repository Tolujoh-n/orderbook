import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Addproduct from "./component/products/Addproduct";
import Footer from "./component/Footer";
import Headnav from "./component/Headnav";
import Sidenav from "./component/Sidenav";
import Home from "./component/Home";
import Register from "./component/Register";
import Contact from "./component/Contact";
import Login from "./component/Login";
import Products from "./component/products/Products";
import Purchaseorder from "./component/orders/Purchaseorder";
import Collections from "./component/products/Collections";
import Createcollection from "./component/products/Createcollection";
import Nocustomer from "./component/customers/Nocustomer";
import Noorder from "./component/orders/Noorder";
import Noproduct from "./component/products/Noproduct";
import Createsore from "./component/settings/Createsore";
import Storelist from "./component/settings/Storelist";
import Profile from "./component/Profile/Profile";
import Security from "./component/settings/Security";
import Createprofile from "./component/Profile/Createprofile";
import Notifications from "./component/notification/Notifications";
import Messages from "./component/message/Messages";
import Abandoncheck from "./component/orders/Abandoncheck.js";
import Editcollection from "./component/products/Editcollection.js";
import Inventory from "./component/products/Inventory.js";
import Editproduct from "./component/products/Editproduct.js";
import Pos from "./component/pos/Pos.js";
import Shipment from "./component/orders/Shipment.js";
import Onboard from "./component/products/Onboard.js";
import Potentiaorders from "./component/orders/logisticsorder/Potentiaorders.js";
import Yourorder from "./component/orders/logisticsorder/Yourorder.js";
import Ware_distribution_request from "./component/orders/warehouseorders/ware_distribution_request.js";
import Warehouseorders from "./component/orders/warehouseorders/Warehouseorders.js";
import Supplierdistrib from "./component/orders/supplierorder/Supplierdistrib.js";
import Acceptedrequest from "./component/orders/supplierorder/Acceptedrequest.js";
import Supplierincomingorders from "./component/orders/supplierorder/Supplierincomingorders.js";
import Acceptedorder from "./component/orders/warehouseorders/Acceptedorder.js";
import Suprequest from "./component/supplier/Suprequest.js";
import Editsupplierrequest from "./component/supplier/Editsupplierrequest.js";
import Warerequest from "./component/warehouse/Warerequest.js";
import Editwarerequest from "./component/warehouse/Editwarerequest.js";
import Viewproduct from "./component/Viewproduct.js";
import Vieworderbook from "./component/Vieworderbook.js";

import axios from "axios";

// Css files
import "./assets/vendor/simple-datatables/style.css";
import "./assets/vendor/remixicon/remixicon.css";
import "./assets/vendor/quill/quill.bubble.css";
import "./assets/vendor/quill/quill.snow.css";
import "./assets/vendor/boxicons/css/boxicons.min.css";
import "./assets/vendor/bootstrap-icons/bootstrap-icons.css";
import "./assets/vendor/bootstrap/css/bootstrap.min.css";
import "./assets/css/style.css";
import "./assets/css/dashboard.css";

// js
import "./assets/js/main.js";

axios.defaults.baseURL = "http://localhost:8000";

function App() {
  //track user authentication and user information
  const [user, setUser] = useState(null);

  // handle user login
  const handleLogin = (userData) => {
    setUser(userData);
  };

  // handle user logout
  const handleLogout = () => {
    setUser(null);
  };

  return (
    <div className="just">
      {user ? (
        <LoggedInRoutes user={user} onLogout={handleLogout} />
      ) : (
        <Router>
          <Routes>
            <Route path="/" element={<Login onLogin={handleLogin} />} />
            <Route path="/login" element={<Login onLogin={handleLogin} />} />
            <Route path="/register" element={<Register />} />
            <Route path="/createsore" element={<Createsore />} />
            <Route path="/storelist" element={<Storelist />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </Router>
      )}
    </div>
  );
}

// logged-in user routes
function LoggedInRoutes({ user, onLogout }) {
  return (
    <Router>
      <Headnav user={user} onLogout={onLogout} />
      <Sidenav />
      <main id="main" className="main">
        <section className="section dashboard">
          <div className="row">
            <Routes>
              <Route path="/" element={<Home user={user} />} />
              <Route path="/pos" element={<Pos user={user} />} />
              <Route path="/shipment" element={<Shipment user={user} />} />
              <Route path="/addproducts" element={<Addproduct user={user} />} />
              <Route
                path="/editproduct"
                element={<Editproduct user={user} />}
              />
              <Route path="/inventory" element={<Inventory user={user} />} />
              <Route path="/profile" element={<Profile user={user} />} />
              <Route
                path="/createprofile"
                element={<Createprofile user={user} />}
              />
              <Route path="/security" element={<Security user={user} />} />
              <Route path="/contact" element={<Contact user={user} />} />
              <Route path="/products" element={<Products user={user} />} />
              <Route path="/onboard" element={<Onboard user={user} />} />
              <Route
                path="/collections"
                element={<Collections user={user} />}
              />
              <Route
                path="/editcollection"
                element={<Editcollection user={user} />}
              />
              <Route
                path="/createcollection"
                element={<Createcollection user={user} />}
              />
              <Route
                path="/purchaseorder"
                element={<Purchaseorder user={user} />}
              />
              <Route
                path="/abandoncheck"
                element={<Abandoncheck user={user} />}
              />
              <Route
                path="/notifications"
                element={<Notifications user={user} />}
              />
              <Route path="/messages" element={<Messages user={user} />} />
              <Route path="/nocustomer" element={<Nocustomer user={user} />} />
              <Route path="/noorder" element={<Noorder user={user} />} />
              <Route path="/noproduct" element={<Noproduct user={user} />} />
              <Route
                path="/potentiaorders"
                element={<Potentiaorders user={user} />}
              />
              <Route
                path="/yourpotentiaorders"
                element={<Yourorder user={user} />}
              />
              <Route
                path="/ware_distribution_request"
                element={<Ware_distribution_request user={user} />}
              />
              <Route
                path="/warehouseorders"
                element={<Warehouseorders user={user} />}
              />
              <Route
                path="/supplierdistrib"
                element={<Supplierdistrib user={user} />}
              />
              <Route
                path="/supplierincomingorders"
                element={<Supplierincomingorders user={user} />}
              />
              <Route
                path="/acceptedrequest"
                element={<Acceptedrequest user={user} />}
              />
              <Route
                path="/acceptedorder"
                element={<Acceptedorder user={user} />}
              />
              <Route path="/suprequest" element={<Suprequest user={user} />} />
              <Route
                path="/editsupplierrequest"
                element={<Editsupplierrequest user={user} />}
              />
              <Route
                path="/warerequest"
                element={<Warerequest user={user} />}
              />
              <Route
                path="/editwarerequest"
                element={<Editwarerequest user={user} />}
              />
              <Route
                path="/viewproduct"
                element={<Viewproduct user={user} />}
              />
              <Route
                path="/vieworderbook"
                element={<Vieworderbook user={user} />}
              />
            </Routes>
          </div>
        </section>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
