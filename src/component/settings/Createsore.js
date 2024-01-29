import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo-full.png";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import uploadicon from "../../assets/images/storeicon.png";
import axios from "axios";

const Createsore = () => {
  const [storeDetails, setStoreDetails] = useState({
    storeName: "",
    storeEmail: "",
    storeimgs: "",
    storeDelivary: "",
    storeDescription: "",
    thumbnailImage: null,
  });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send store creation request to the backend
      const response = await axios.post("/stores", storeDetails);
      console.log("Store created successfully", response.data);

      // Redirect to the storelist or homepage based on your logic
      navigate.push("/");
    } catch (error) {
      console.error("Store creation failed", error.response.data);
    }
    // Sending code to backend
  };

  const handleThumbnailImageSelect = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.onchange = (e) => {
      const file = e.target.files[0];
      if (file) {
        setStoreDetails({
          ...storeDetails,
          thumbnailImage: file,
        });
        // Display a preview of the selected image (optional)
        const reader = new FileReader();
        reader.onload = (e) => {
          const img = document.getElementById("uploadimg");
          img.src = e.target.result;
        };
        reader.readAsDataURL(file);
      }
    };
    input.click();
  };

  return (
    <div id="boxit">
      <div id="logodiv">
        <img id="logoimg" src={logo} alt="Logo" />
      </div>

      <div className="auth-box">
        <h2>Create Store</h2>
        <form onSubmit={handleSubmit}>
          <div className="row gy-4">
            <div className="col-md-12">
              <div className="form-group">
                <label htmlFor="storeName">Store Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="storeName"
                  placeholder="Enter store Name"
                  value={storeDetails.storeName}
                  onChange={(e) =>
                    setStoreDetails({
                      ...storeDetails,
                      storeName: e.target.value,
                    })
                  }
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="productPrice">Store Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="productPrice"
                  placeholder="mystore@gmail.com"
                  value={storeDetails.productEmail}
                  onChange={(e) =>
                    setStoreDetails({
                      ...storeDetails,
                      productEmail: e.target.value,
                    })
                  }
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="storeQuantity">Hours of Delivary</label>
                <input
                  type="number"
                  className="form-control"
                  id="storedelivary"
                  placeholder="2 hours"
                  value={storeDetails.storeDelivary}
                  onChange={(e) =>
                    setStoreDetails({
                      ...storeDetails,
                      storeDelivary: e.target.value,
                    })
                  }
                  required
                />
              </div>
            </div>
            <div className="col-md-12">
              <div
                id="uploadpic"
                className="form-group"
                onClick={handleThumbnailImageSelect}
              >
                <img
                  src={
                    storeDetails.thumbnailImage
                      ? URL.createObjectURL(storeDetails.thumbnailImage)
                      : uploadicon
                  }
                  alt="Profile"
                  id="uploadimg"
                />
                <br></br>
                <span>
                  <i>Set Store Thumbnail</i>
                </span>
              </div>
            </div>
            <div className="col-md-12">
              <div className="form-group">
                <label htmlFor="storeDescription">Store Description</label>
                <ReactQuill
                  id="storeDescription"
                  value={storeDetails.storeDescription}
                  onChange={(value) =>
                    setStoreDetails({
                      ...storeDetails,
                      storeDescription: value,
                    })
                  }
                />
              </div>
            </div>

            <div className="text-center">
              <button
                id="submitbut"
                type="submit"
                className="button button-a button-big button-rounded"
              >
                Create Store
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Createsore;
