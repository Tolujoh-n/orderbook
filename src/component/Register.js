import React, { useState } from "react";
import logo from "../assets/images/logo-full.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    userType: "",
  });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/user/register", formData);
      console.log("Registration successful", response.data);

      // Check if userType is "Retailer" and redirect to storelist if true
      if (formData.userType === "Retailer") {
        navigate.push("/storelist");
      } else {
        // Redirect to homepage after successful registration for other user types
        navigate.push("/");
      }
    } catch (error) {
      console.error("Registration failed", error.response.data);
    }

    // console.log("Form Data:", formData);
  };

  return (
    <div id="boxit">
      <div id="logodiv">
        <img id="logoimg" src={logo} alt="Logo" />
      </div>
      <div className="auth-box">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="Enter your first name"
              value={formData.firstName}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Enter your last name"
              value={formData.lastName}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Confirm your password"
              value={formData.confirmPassword}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>Choose User Category</label>
            <div>
              <label>
                <input
                  type="radio"
                  name="userType"
                  value="Supplier"
                  checked={formData.userType === "Supplier"}
                  onChange={handleInputChange}
                />
                Supplier
              </label>
            </div>
            <div>
              <label>
                <input
                  type="radio"
                  name="userType"
                  value="retailer"
                  checked={formData.userType === "retailer"}
                  onChange={handleInputChange}
                />
                Retailer
              </label>
            </div>
            <div>
              <label>
                <input
                  type="radio"
                  name="userType"
                  value="Logistics"
                  checked={formData.userType === "Logistics"}
                  onChange={handleInputChange}
                />
                Logistics
              </label>
            </div>
          </div>
          <button type="submit">Sign Up</button>
        </form>
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
