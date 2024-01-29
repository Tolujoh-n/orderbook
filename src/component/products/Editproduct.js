import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import uploadicon from "../../assets/images/uploadpic.png";

function Editproduct() {
  const [productDetails, setProductDetails] = useState({
    productName: "",
    productPrice: "",
    productimgs: "",
    productQuantity: "",
    productDescription: "",
    barcode: "",
    thumbnailImage: null,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Sending code to backend
  };

  const handleThumbnailImageSelect = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.onchange = (e) => {
      const file = e.target.files[0];
      if (file) {
        setProductDetails({
          ...productDetails,
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
      <>
      <div className="pagetitle">
        <h1>Edit Product</h1>
        <nav>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="/">Home</a>
            </li>
            <li className="breadcrumb-item active">Edit Product</li>
          </ol>
        </nav>
      </div>

        <div className="col-xl-12">
          <div className="card p-4">
            <form onSubmit={handleSubmit}>
              <div className="row gy-4">
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="productName">Product Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="productName"
                      placeholder="Enter product Name"
                      value={productDetails.productName}
                      onChange={(e) =>
                        setProductDetails({
                          ...productDetails,
                          productName: e.target.value,
                        })
                      }
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="productPrice">Product Price</label>
                    <input
                      type="number"
                      className="form-control"
                      id="productPrice"
                      placeholder="Enter product price"
                      value={productDetails.productPrice}
                      onChange={(e) =>
                        setProductDetails({
                          ...productDetails,
                          productPrice: e.target.value,
                        })
                      }
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="productQuantity">Product Quantity</label>
                    <input
                      type="number"
                      className="form-control"
                      id="productQuantity"
                      placeholder="Enter product quantity"
                      value={productDetails.productQuantity}
                      onChange={(e) =>
                        setProductDetails({
                          ...productDetails,
                          productQuantity: e.target.value,
                        })
                      }
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="productimgs">Products Images</label>
                    <input
                      type="file"
                      className="form-control"
                      id="productimgs"
                      placeholder="All product images"
                      value={productDetails.productimgs}
                      onChange={(e) =>
                        setProductDetails({
                          ...productDetails,
                          productimgs: e.target.value,
                        })
                      }
                      required
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div id="uploadpic" className="form-group" onClick={handleThumbnailImageSelect}>
                    <img src={productDetails.thumbnailImage ? URL.createObjectURL(productDetails.thumbnailImage) : uploadicon} alt="Profile" id="uploadimg" />
                    <br></br>
                    <span><i>Upload Thumbnail</i></span>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <label htmlFor="productDescription">Product Description</label>
                    <ReactQuill
                      id="productDescription"
                      value={productDetails.productDescription}
                      onChange={(value) =>
                        setProductDetails({
                          ...productDetails,
                          productDescription: value,
                        })
                      }
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <label htmlFor="barcode">Barcode</label>
                    <input
                      type="text"
                      className="form-control"
                      id="barcode"
                      placeholder="Enter barcode"
                      value={productDetails.barcode}
                      onChange={(e) =>
                        setProductDetails({
                          ...productDetails,
                          barcode: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>
                <div className="text-center">
                  <button
                    id="cancelbut"
                    type="submit"
                    className="button button-a button-big button-rounded"
                  >
                    Delete
                  </button>
                  <button
                    id="submitbut"
                    type="submit"
                    className="button button-a button-big button-rounded"
                  >
                    Confirm
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </>
    );
}

export default Editproduct;
