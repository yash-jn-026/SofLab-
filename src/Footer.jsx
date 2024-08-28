import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa"; 
import { FiSend } from "react-icons/fi"; 

function Footer() {
  return (
    <div className="bg-purple-800 py-8 px-4 md:px-16">
      <div className="flex flex-col md:flex-row justify-between items-start space-y-8 md:space-y-0">
        <div className="md:w-1/4">
       
          <p className="text-white mt-4">
            We always make our customers happy by providing as many choices as possible.
          </p>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-[#7F56D9]"><FaFacebookF /></a>
            <a href="#" className="text-[#7F56D9]"><FaTwitter /></a>
            <a href="#" className="text-[#7F56D9]"><FaInstagram /></a>
          </div>
        </div>

        <div className="md:w-1/5">
          <h3 className="font-poppins font-semibold text-lg text-white">About</h3>
          <ul className="mt-4 space-y-2 text-white">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Features</a></li>
            <li><a href="#">News</a></li>
            <li><a href="#">Menu</a></li>
          </ul>
        </div>

        <div className="md:w-1/5">
          <h3 className="font-poppins font-semibold text-lg text-white">Company</h3>
          <ul className="mt-4 space-y-2 text-white">
            <li><a href="#">Why us </a></li>
            <li><a href="#">Partner With Us</a></li>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
        </div>

        <div className="md:w-1/5">
          <h3 className="font-poppins font-semibold text-lg text-white">Support</h3>
          <ul className="mt-4 space-y-2 text-white">
            <li><a href="#">Account</a></li>
            <li><a href="#">Support Center</a></li>
            <li><a href="#">Feedback</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>

        <div className="md:w-1/4">
          <h3 className="font-poppins font-semibold text-lg text-white">Subscribe on our destination review newsletters</h3>
          <form className="mt-4 flex items-center">
            <input 
              type="email" 
              placeholder="Your Email" 
              className="p-3 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#7F56D9] flex-grow"
            />
            <button 
              type="submit" 
              className="p-3 bg-[#7F56D9] text-white rounded-r-lg">
              <FiSend />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Footer;
