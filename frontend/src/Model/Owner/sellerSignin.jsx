import React from 'react';
import Input from '../../Components/Input';
import { BACKEND_URL } from '../../../config';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const SellerSignin = ({ authType }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
  });

  function handleChange({ type, e }) {
    setFormData({
      ...formData,
      [type]: e.target.value,
    });
  }

  async function handleSubmit() {
    try {
      const response = await axios.post(`${BACKEND_URL}/v1/owner/signin`, formData);
      toast.success('Signin Successful');
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('username', response.data.username);
      setTimeout(() => {
        navigate('/seller/dashboard');
      }, 2000);
    } catch (error) {
      toast.error('Invalid credentials');
      console.log(error);
    }
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-500 via-indigo-400 to-purple-600">
      <div className="w-full max-w-sm p-8 bg-white rounded-xl shadow-lg transform transition-all hover:scale-105 duration-300">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Sign In</h1>

        <div className="space-y-4">
          {/* Email Input */}
          <div className="flex flex-col">
            <Input
              type="email"
              placeholder="john.doe@example.com"
              name="Email"
              id="email"
              value={formData.email}
              onChange={(e) => handleChange({ type: 'email', e })}
              className="p-4 rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 hover:border-blue-400"
            />
          </div>

          {/* Password Input */}
          <div className="flex flex-col">
            <Input
              type="password"
              placeholder="••••••••"
              name="Password"
              id="password"
              value={formData.password}
              onChange={(e) => handleChange({ type: 'password', e })}
              className="p-4 rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 hover:border-blue-400"
            />
          </div>

          {/* Submit Button */}
          <button
            onClick={handleSubmit}
            className="w-full py-3 bg-blue-600 text-white font-bold text-lg rounded-lg transform transition-all duration-300 hover:bg-blue-700 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Login
          </button>

          {/* Signup Link */}
          <p className="text-center text-gray-600 mt-4">
            Don’t have an account?{' '}
            <a
              href="#"
              className="text-blue-600 font-semibold hover:underline"
              onClick={() => authType("signup")}
            >
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SellerSignin;
