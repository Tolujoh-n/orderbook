import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import uploadicon from "../../assets/images/uploadpic.png";

function Addproduct() {
  const [productDetails, setProductDetails] = useState({
    productName: "",
    productPrice: "",
    productimgs: "",
    productcategory: "",
    productQuantity: "",
    productDescription: "",
    barcode: "",
    thumbnailImage: null,
  });

const handleSubmit = async (e) => {
  e.preventDefault();
 
  const productData = {
  name: productDetails.productName,
  price: productDetails.productPrice,
  quantity: productDetails.productQuantity,
  category: productDetails.productcategory,
  description: productDetails.productDescription,
  barcode: productDetails.barcode
};
 
// Convert to FormData for sending
const formData = new FormData();
for (const key in productData) {
  formData.append(key, productData[key]);
}


 if (productDetails.thumbnailImage) {
    formData.append('image', productDetails.thumbnailImage);
  }
  
  
  try {
    const response = await fetch('http://localhost:8000/products/add_product', {
      method: 'POST',
      body: formData,
    });

    if (response.ok) {
      const responseData = await response.json();
      alert("Product added to the database.");
    } else {
    const errorResponse = await response.json();
      alert("Failed to add product. Error: " + JSON.stringify(errorResponse));
    }
  } catch (error) {
    console.error('Error:', error);
  }
};
 

  return (
    <>
      <div className="pagetitle">
        <h1>Add product</h1>
        <nav>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="/">Home</a>
            </li>
            <li className="breadcrumb-item active">Add product</li>
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
              </div>
              <div className="col-md-6">
                <div
                  id="uploadpic"
                  className="form-group"
                  
                >
                  <img
                    src={
                      productDetails.thumbnailImage
                        ? URL.createObjectURL(productDetails.thumbnailImage)
                        : uploadicon
                    }
                    alt="Profile"
                    id="uploadimg"
                  />
                  <br></br>
                  <span>
                    <i>Upload Thumbnail</i>
                  </span>
                </div>
              </div>

         <div className="col-md-6">
  <div className="form-group">
    <label htmlFor="productimgs">Products Images</label>
    <input
      type="file"
      className="form-control"
      id="productimgs"
      onChange={(e) => {
        // Handle the file selection
        const file = e.target.files[0];
        if (file) {
          setProductDetails({
            ...productDetails,
            thumbnailImage: file, // Set the file object directly
          });
          // Optionally, update productimgs to display the file name or similar
        }
      }}
      required
    />
  </div>
</div>

              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="productcategory">Products Category</label>
                  <input
                    type="text"
                    className="form-control"
                    id="productcategory"
                    placeholder="product category"
                    value={productDetails.productcategory}
                    onChange={(e) =>
                      setProductDetails({
                        ...productDetails,
                        productcategory: e.target.value,
                      })
                    }
                    required
                    readOnly
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
                  <label htmlFor="barcode">
                    Barcode (ISBN, UPC, GTIN, etc.)
                  </label>
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

export default Addproduct;
