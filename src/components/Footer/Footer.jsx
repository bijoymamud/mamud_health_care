
import React from "react";
import { Facebook, Twitter, Linkedin } from "lucide-react";
import Container from "../container";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer
      className="border-t-2 border-amber-500 relative bg-[url('https://siddharthpetro.com/wp-content/uploads/2019/09/Footer-Background-Image.png')] bg-cover bg-center text-white py-10 md:mt-[250px]"
    >
      <Container>
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Section */}
          <div className="relative flex flex-col space-y-4 col-span-1">
            <div className="absolute -top-[290px] transform translate-y-[50%] border-2 border-amber-500">
              <img
                className="w-[250px]"
                src="https://i.ibb.co/djYQ4Ww/Black-and-White-Circle-Business-Logo-1.png"
                alt="logo"
              />
            </div>
          </div>

          {/* Right Section */}
          <div className="col-span-2">
            {/* Subscribe */}
            <div className="mb-6">
              <label htmlFor="email" className="block mb-2 text-md font-medium">
                Want to know more about ?
              </label>
              <div className="flex">
                
              <Link
                     to="/login"             
                     className="bg-pink-500 px-6 py-2 rounded-r-lg text-white hover:bg-pink-600">
                  Join with us ...
                </Link>
              </div>
            </div>

            {/* Footer Links */}
            <div className="grid grid-cols-3 text-sm">
              <div>
                <h6 className="font-semibold mb-2">Partnership</h6>
                <ul>
                  <li>Websites</li>
                  <li>Social Media</li>
                  <li>Branding</li>
                </ul>
              </div>
              <div>
                <h6 className="font-semibold mb-2">About</h6>
                <ul>
                  <li>Our Projects</li>
                  <li>Careers</li>
                </ul>
              </div>
              <div>
                <h6 className="font-semibold mb-2">Support</h6>
                <ul>
                  <li>Support Request</li>
                  <li>Contact</li>
                </ul>
              </div>
            </div>

            {/* Copyright and Social Icons */}
            <div className="mt-6 flex items-center justify-between text-sm">
              <p>All rights reserved © 2024 by Mamud Health Care</p>
              <div className="flex space-x-4">
                <a href="#" className="text-white hover:text-gray-300">
                  <Facebook size={20} />
                </a>
                <a href="#" className="text-white hover:text-gray-300">
                  <Twitter size={20} />
                </a>
                <a href="#" className="text-white hover:text-gray-300">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
