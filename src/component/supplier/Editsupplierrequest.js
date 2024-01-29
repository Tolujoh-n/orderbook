import React, { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import uploadicon from "../../assets/images/uploadpic.png";

function Editsupplierrequest() {
  const [price, setPrice] = useState(0);
  const [totalKm, setTotalKm] = useState(0);
  const [logisticsFee, setLogisticsFee] = useState(0);
  const [quantity, setQuantity] = useState(0);

  const [productDetails, setProductDetails] = useState({
    warehouseName: "",
    warehouseId: "",
    warehouseAddress: "",
    supplierName: "",
    totalMilage: "",
    logisticsFee: "",
    productName: "",
    productPrice: "",
    productQuantity: "",
    productDescription: "",
    pickupAddress: "",
  });

  const [tax] = useState(5);
  const [subtotal, setSubtotal] = useState(0);
  const [grandTotal, setGrandTotal] = useState(0);

  useEffect(() => {
    const newSubtotal = price * quantity + logisticsFee;
    const newGrandTotal = newSubtotal + tax;
    setSubtotal(newSubtotal);
    setGrandTotal(newGrandTotal);
  }, [price, quantity, logisticsFee, tax]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Sending code to backend
  };
  return (
    <>
      <div className="pagetitle">
        <h1>Edit Product Distribution to Warehouse</h1>
        <nav>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="/">Home</a>
            </li>
            <li className="breadcrumb-item active">Edit Distribution</li>
          </ol>
        </nav>
      </div>

      <div className="col-xl-12">
        <div className="card p-4">
          <form onSubmit={handleSubmit}>
            <div className="row gy-4">
              <div className="col-md-6">
                <h4>Warehouse Information:</h4>
                <div className="form-group">
                  <label htmlFor="warehouseName">Warehouse Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="warehouseName"
                    placeholder="Enter Warehouse Name"
                    value={productDetails.warehouseName}
                    onChange={(e) =>
                      setProductDetails({
                        ...productDetails,
                        warehouseName: e.target.value,
                      })
                    }
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="warehouseId">Warehouse ID</label>
                  <input
                    type="number"
                    className="form-control"
                    id="warehouseId"
                    placeholder="#34562"
                    value={productDetails.warehouseId}
                    onChange={(e) =>
                      setProductDetails({
                        ...productDetails,
                        warehouseId: e.target.value,
                      })
                    }
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="warehouseAddress">Warehouse Address</label>
                  <input
                    type="text"
                    className="form-control"
                    id="warehouseAddress"
                    placeholder="Enter product quantity"
                    value={productDetails.warehouseAddress}
                    onChange={(e) =>
                      setProductDetails({
                        ...productDetails,
                        warehouseAddress: e.target.value,
                      })
                    }
                    required
                  />
                </div>
              </div>
              <div className="col-md-6">
                <h4>Logistics Information:</h4>
                <div className="form-group">
                  <label htmlFor="supplierName">Supplier Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="supplierName"
                    placeholder="Enter your Name"
                    value={productDetails.supplierName}
                    onChange={(e) =>
                      setProductDetails({
                        ...productDetails,
                        supplierName: e.target.value,
                      })
                    }
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="totalMilage">Total Millage(km)</label>
                  <input
                    type="number"
                    className="form-control"
                    id="totalMilage"
                    placeholder="5km"
                    value={productDetails.totalMilage}
                    onChange={(e) =>
                      setProductDetails({
                        ...productDetails,
                        totalMilage: e.target.value,
                      })
                    }
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="logisticsFee">Logistics Fee</label>
                  <input
                    type="number"
                    className="form-control"
                    id="logisticsFee"
                    placeholder="$"
                    value={logisticsFee}
                    onChange={(e) =>
                      setLogisticsFee(parseFloat(e.target.value) || 0)
                    }
                  />
                </div>
              </div>
              <div className="col-md-12">
                <h4>Product Information:</h4>
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
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="productPrice">Product Price/unit</label>
                  <input
                    type="number"
                    className="form-control"
                    id="productPrice"
                    placeholder="$"
                    value={price}
                    onChange={(e) => setPrice(parseFloat(e.target.value) || 0)}
                    required
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="productQuantity">Product Quantity</label>
                  <input
                    type="number"
                    className="form-control"
                    id="quantity"
                    placeholder="Enter product quantity"
                    value={quantity}
                    onChange={(e) =>
                      setQuantity(parseInt(e.target.value, 10) || 0)
                    }
                  />
                </div>
              </div>

              <div className="col-md-12">
                <div className="form-group">
                  <label htmlFor="productDescription">
                    Product Description
                  </label>
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
                  <label htmlFor="pickupAddress">
                    Address to Pick up Product
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="pickupAddress"
                    placeholder="Enter exact location product will be taken from..."
                    value={productDetails.pickupAddress}
                    onChange={(e) =>
                      setProductDetails({
                        ...productDetails,
                        pickupAddress: e.target.value,
                      })
                    }
                  />
                </div>
              </div>
              <div>
                <h4>Summary:</h4>
                <p>Tax: ${tax}</p>
                <p>Subtotal: ${subtotal}</p>
                <p>Grand Total: ${grandTotal}</p>
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

export default Editsupplierrequest;
