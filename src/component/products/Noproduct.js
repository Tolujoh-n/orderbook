import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import nocustomer from "../../assets/images/insurance.png";

function Noproduct() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // handling submission
  };

  return (
    <>
      <div className="col-lg-12">
        <div className="row">
          <div className="col-xxl-4 col-xl-12">
            <div className="card text-center info-card customers-card">
              <div className="card-body nocontent">
                <div className="text-center">
                  <img src={nocustomer} alt="" id="noimg" />
                </div>
                <h5 className="card-title">No product</h5>
                <div id="content">
                  <p>
                    Write a description, add photos, and set pricing for the
                    product you plan to sell
                  </p>
                  <div className="col-md-12 text-center">
                    <button
                      id="submitbut"
                      onClick={handleSubmit}
                      type="button"
                      className="button button-a button-big button-rounded"
                    >
                      Add product
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Noproduct;
