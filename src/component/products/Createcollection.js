import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import product from "../../assets/images/bluewallet.png";

function Createcollection() {
  const [collectionName, setCollectionName] = useState("");
  const [collectionDescription, setCollectionDescription] = useState("");
  const [selectedProducts, setSelectedProducts] = useState([]);

  const handleProductSelection = (productId) => {
    const isProductSelected = selectedProducts.includes(productId);

    if (isProductSelected) {
      setSelectedProducts((prevSelected) =>
        prevSelected.filter((id) => id !== productId)
      );
    } else {
      setSelectedProducts((prevSelected) => [...prevSelected, productId]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Code to handle form submission with collection data and selected product IDs
    console.log("Collection Name:", collectionName);
    console.log("Collection Description:", collectionDescription);
    console.log("Selected Products:", selectedProducts);
  };

  const productsData = [
    {
      id: 1,
      image: product,
      name: "Product 1",
      stock: 5,
      category: "Product Category",
      vendor: "Vendor Name",
      price: "$0",
      status: "paid",
    },
    {
      id: 2,
      image: product,
      name: "Product 2",
      stock: 5,
      category: "Product Category",
      vendor: "Vendor Name",
      price: "$23",
      status: "Received",
    },
    {
      id: 3,
      image: product,
      name: "Product 3",
      stock: 5,
      category: "Product Category",
      vendor: "Vendor Name",
      price: "$4",
      status: "Listed",
    },
    {
      id: 4,
      image: product,
      name: "Product 4",
      stock: 5,
      category: "Product Category",
      vendor: "Vendor Name",
      price: "$54",
      status: "Delivered",
    },
    {
      id: 5,
      image: product,
      name: "Product 5",
      stock: 5,
      category: "Product Category",
      vendor: "Vendor Name",
      price: "$65",
      status: "Listed",
    },
    {
      id: 6,
      image: product,
      name: "Product 6",
      stock: 5,
      category: "Product Category",
      vendor: "Vendor Name",
      price: "$87",
      status: "Listed",
    },
    {
      id: 7,
      image: product,
      name: "Product 7",
      stock: 5,
      category: "Product Category",
      vendor: "Vendor Name",
      price: "$9",
      status: "paid",
    },
    {
      id: 8,
      image: product,
      name: "Product 8",
      stock: 5,
      category: "Product Category",
      vendor: "Vendor Name",
      price: "$2",
      status: "paid",
    },
  ];

  return (
    <>
      <div className="pagetitle">
        <h1>Create collection</h1>
        <nav>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="/">Home</a>
            </li>
            <li className="breadcrumb-item active">Create collection</li>
          </ol>
        </nav>
      </div>

      <div className="col-xl-12">
        <div className="card p-4">
          <form onSubmit={handleSubmit}>
            <div className="row gy-4">
              <div className="col-md-6">
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Collection Name"
                  required
                  value={collectionName}
                  onChange={(e) => setCollectionName(e.target.value)}
                />
              </div>

              <div className="col-md-6">
                <input
                  type="text"
                  className="form-control"
                  name="description"
                  placeholder="Collection Description"
                  required
                  value={collectionDescription}
                  onChange={(e) => setCollectionDescription(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label htmlFor="collectionimgs">Collection Thumbnail</label>
                <input
                  type="file"
                  className="form-control"
                  id="collectionimgs"
                  required
                />
              </div>

              <div className="col-12">
                <div className="overflow-auto">
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
                      Select Products <span>| Today</span>
                    </h5>
                    <div className="collection">
                      <table className="table datatable">
                        <tbody>
                          {productsData.map((product) => (
                            <tr key={product.id}>
                              <td>
                                <input
                                  type="checkbox"
                                  checked={selectedProducts.includes(
                                    product.id
                                  )}
                                  onChange={() =>
                                    handleProductSelection(product.id)
                                  }
                                />
                              </td>
                              <td>
                                <img
                                  src={product.image}
                                  alt="Product"
                                  id="tableimg"
                                />
                                <a href="#" className="text-primary">
                                  {product.name}
                                </a>
                              </td>

                              <td>{product.stock} in stock</td>
                              <td>{product.category}</td>
                              <td>{product.vendor}</td>
                              <td>{product.price}</td>
                              <td>
                                <span
                                  className={`badge bg-${getStatusColor(
                                    product.status
                                  )}`}
                                >
                                  {product.status}
                                </span>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
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
// function to determine badge color based on status
const getStatusColor = (status) => {
  switch (status) {
    case "Received":
      return "success";
    case "Delivered":
      return "warning";
    case "Shipped":
      return "warning";
    case "paid":
      return "secondary";
    case "Listed":
      return "secondary";
    default:
      return "secondary";
  }
};

export default Createcollection;
