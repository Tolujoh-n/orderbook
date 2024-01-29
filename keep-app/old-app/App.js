import React from "react";
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

function App() {
  const loggedIn = true;

  return (
    <div className="just">
      {loggedIn && (
        <Router>
          <Headnav />
          <Sidenav />
          <main id="main" className="main">
            <section className="section dashboard">
              <div className="row">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/pos" element={<Pos />} />
                  <Route path="/shipment" element={<Shipment />} />
                  <Route path="/addproducts" element={<Addproduct />} />
                  <Route path="/editproduct" element={<Editproduct />} />
                  <Route path="/inventory" element={<Inventory />} />
                  <Route path="/profile" element={<Profile />} />
                  <Route path="/createprofile" element={<Createprofile />} />
                  <Route path="/security" element={<Security />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/products" element={<Products />} />
                  <Route path="/onboard" element={<Onboard />} />
                  <Route path="/collections" element={<Collections />} />
                  <Route path="/editcollection" element={<Editcollection />} />
                  <Route
                    path="/createcollection"
                    element={<Createcollection />}
                  />
                  <Route path="/purchaseorder" element={<Purchaseorder />} />
                  <Route path="/abandoncheck" element={<Abandoncheck />} />
                  <Route path="/notifications" element={<Notifications />} />
                  <Route path="/messages" element={<Messages />} />
                  <Route path="/nocustomer" element={<Nocustomer />} />
                  <Route path="/noorder" element={<Noorder />} />
                  <Route path="/noproduct" element={<Noproduct />} />
                  <Route path="/potentiaorders" element={<Potentiaorders />} />
                  <Route path="/yourpotentiaorders" element={<Yourorder />} />
                  <Route
                    path="/ware_distribution_request"
                    element={<Ware_distribution_request />}
                  />
                  <Route
                    path="/warehouseorders"
                    element={<Warehouseorders />}
                  />
                  <Route
                    path="/supplierdistrib"
                    element={<Supplierdistrib />}
                  />
                  <Route
                    path="/supplierincomingorders"
                    element={<Supplierincomingorders />}
                  />
                  <Route
                    path="/acceptedrequest"
                    element={<Acceptedrequest />}
                  />
                  <Route path="/acceptedorder" element={<Acceptedorder />} />
                  <Route path="/suprequest" element={<Suprequest />} />
                  <Route
                    path="/editsupplierrequest"
                    element={<Editsupplierrequest />}
                  />
                  <Route path="/warerequest" element={<Warerequest />} />
                  <Route path="/editwarerequest" element={<Editwarerequest />} />
                  <Route path="/viewproduct" element={<Viewproduct />} />
                  <Route path="/vieworderbook" element={<Vieworderbook />} />
                </Routes>
              </div>
            </section>
          </main>
          <Footer />
        </Router>
      )}

      {!loggedIn && (
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/createsore" element={<Createsore />} />
            <Route path="/storelist" element={<Storelist />} />
          </Routes>
        </Router>
      )}
    </div>
  );
}

export default App;
