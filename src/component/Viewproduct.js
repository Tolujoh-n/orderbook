import React from "react";
import profile from "../assets/images/baby-wipes.jpg";
import { Link } from "react-router-dom";

function Viewproduct() {
  return (
    <>
      <div className="col-lg-12">
        <div className="pagetitle">
          <h1>Product View</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="/">Home</a>
              </li>
              <li className="breadcrumb-item active">Product</li>
            </ol>
          </nav>
        </div>

        <section className="section profile">
          <div className="row">
            <div className="col-xl-12">
              <div className="card">
                <div className="card-body profile-card pt-4 d-flex flex-column align-items-center">
                  <img
                    src={profile}
                    alt="Profile"
                    style={{ borderRadius: "5px" }}
                  />
                  <h2>Product Name</h2>
                </div>
                <div className="card-body pt-3">
                  <div className="tab-content pt-2">
                    <div
                      className="tab-pane fade show active profile-overview"
                      id="profile-overview"
                    >
                      <h5 className="card-title">Product Description</h5>
                      <p className="small fst-italic">
                        Sunt est soluta temporibus accusantium neque nam maiores
                        cumque temporibus. Tempora libero non est unde veniam
                        est qui dolor. Ut sunt iure rerum quae quisquam autem
                        eveniet perspiciatis odit. Fuga sequi sed ea saepe at
                        unde.
                      </p>

                      <h5 className="card-title">Product Details</h5>

                      <div className="row">
                        <div className="col-lg-3 col-md-4 label ">
                          Product Name
                        </div>
                        <div className="col-lg-9 col-md-8">Banana</div>
                      </div>

                      <div className="row">
                        <div className="col-lg-3 col-md-4 label">
                          Product Price
                        </div>
                        <div className="col-lg-9 col-md-8">$40</div>
                      </div>

                      <div className="row">
                        <div className="col-lg-3 col-md-4 label">
                          Product category
                        </div>
                        <div className="col-lg-9 col-md-8">Fruit</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Viewproduct;
