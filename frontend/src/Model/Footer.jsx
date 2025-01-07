import React from 'react';
import { useNavigate } from 'react-router-dom'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  const navigate = useNavigate()
  return (
    <footer className="bg-gray-900 text-white py-12 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* About Section */}
          <div>
            <h3 className="text-2xl font-bold mb-4">About Us</h3>
            <p className="text-lg mb-4">
              We are a company dedicated to providing the best experiences and services to our customers.
            </p>
            <p className="text-sm">Follow us for more updates.</p>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="hover:text-blue-400">Home</a></li>
              <li><a href="/about" className="hover:text-blue-400">About Us</a></li>
              <li><a href="/services" className="hover:text-blue-400">Services</a></li>
              <li><a href="/contact" className="hover:text-blue-400">Contact</a></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Contact Us</h3>
            <p className="mb-2"><strong>Email:</strong> support@company.com</p>
            <p><strong>Phone:</strong> +123 456 7890</p>
          </div>

          {/* Social Media Section */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-2xl font-bold mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-3xl hover:text-blue-500">
                <FaFacebook />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-3xl hover:text-blue-400">
                <FaTwitter />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-3xl hover:text-pink-500">
                <FaInstagram />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-3xl hover:text-blue-700">
                <FaLinkedin />
              </a>
              
            </div>
            <div>
        <h1>Sign Options</h1>
          <ul>
            <li className='cursor-pointer' onClick={()=>{navigate("/admin/auth")}}>Admin</li>
            <li className='cursor-pointer' onClick={()=>{navigate("/seller/auth")}}>Seller</li>
          </ul>
        </div>
          </div>

        </div>
      </div>
      

      {/* Footer Bottom */}
      <div className="text-center mt-12 border-t border-gray-700 pt-6">
        <p className="text-sm">&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
      </div>
      
    </footer>
  );
};

export default Footer;
