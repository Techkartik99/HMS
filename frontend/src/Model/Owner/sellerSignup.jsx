import React from 'react';
import Input from '../../Components/Input';
import { BACKEND_URL } from '../../../config';
import { toast, Toaster } from 'sonner';
import { useNavigate } from 'react-router-dom';
import axios from "axios";

const SellerSignup = ({ authType }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    phone: null,
    idProof: "",
    password: ""
  });

  function handleChange(type, e) {
    setFormData({
      ...formData,
      [type]: e.target.value
    });
  }

  async function handleSubmit() {
    const data = {
      ...formData,
      phone: parseInt(formData.phone)
    };
    try {
      const response = await axios.post(`${BACKEND_URL}/owner/signup`, data);
      toast.success("Signup Successful");
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("username", response.data.username);
      setTimeout(() => {
        navigate("/seller/add");
      }, 2000);
    } catch (error) {
      toast.error("Error signing up, please try again");
      console.log(error);
    }
  }

  return (
    <div className="w-full max-w-md mx-auto p-8 bg-gradient-to-r from-teal-200 via-green-200 to-blue-200 rounded-lg shadow-lg">
      <Toaster />
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Seller Signup</h1>
      <form className="space-y-6">
        {/* Name Input */}
        <Input
          type="text"
          placeholder="John Doe"
          name="NAME"
          id="name"
          onChange={(e) => handleChange("name", e)}
          className="p-4 rounded-lg border-2 border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-300 ease-in-out"
        />

        {/* Email Input */}
        <Input
          type="email"
          placeholder="john@gmail.com"
          name="EMAIL"
          id="email"
          onChange={(e) => handleChange("email", e)}
          className="p-4 rounded-lg border-2 border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-300 ease-in-out"
        />

        {/* Phone Input */}
        <Input
          type="number"
          placeholder="9876543210"
          name="PHONE"
          id="phone"
          onChange={(e) => handleChange("phone", e)}
          className="p-4 rounded-lg border-2 border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-300 ease-in-out"
        />

        {/* ID Proof Input */}
        <Input
          type="text"
          placeholder="CIX897654"
          name="IDPROOF"
          id="idproof"
          onChange={(e) => handleChange("idProof", e)}
          className="p-4 rounded-lg border-2 border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-300 ease-in-out"
        />

        {/* Password Input */}
        <Input
          type="password"
          placeholder="Enter your password"
          name="PASSWORD"
          id="password"
          onChange={(e) => handleChange("password", e)}
          className="p-4 rounded-lg border-2 border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-300 ease-in-out"
        />

        {/* Submit Button */}
        <div>
          <button
            type="button"
            onClick={handleSubmit}
            className="w-full py-3 bg-blue-500 text-white font-semibold text-lg rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transform transition duration-200 hover:scale-105"
          >
            Sign Up
          </button>
        </div>

        {/* Signin Link */}
        <div className="text-center mt-4">
          <p className="text-gray-700">
            Already have an account?{' '}
            <span
              onClick={() => authType("signin")}
              className="text-blue-500 cursor-pointer hover:underline"
            >
              Sign In
            </span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SellerSignup;
