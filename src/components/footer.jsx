import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-purple-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <div className="relative h-8 w-8">
                <img
                  src="/placeholder.svg?height=32&width=32"
                  alt="KidsTreasure Logo"
                  className="object-contain h-full w-full"
                />
              </div>
              <span className="text-xl font-bold text-white">KidsTreasure</span>
            </Link>
            <p className="text-purple-200 mb-6">
              Making childhood magical with safe, fun, and educational products for kids of all ages.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-purple-200 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-purple-200 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-purple-200 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-purple-200 hover:text-white transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/shop" className="text-purple-200 hover:text-white transition-colors">
                  Shop All
                </Link>
              </li>
              <li>
                <Link to="/categories" className="text-purple-200 hover:text-white transition-colors">
                  Categories
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-purple-200 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-purple-200 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-purple-200 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Customer Service</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/account" className="text-purple-200 hover:text-white transition-colors">
                  My Account
                </Link>
              </li>
              <li>
                <Link to="/orders" className="text-purple-200 hover:text-white transition-colors">
                  Order Tracking
                </Link>
              </li>
              <li>
                <Link to="/wishlist" className="text-purple-200 hover:text-white transition-colors">
                  Wishlist
                </Link>
              </li>
              <li>
                <Link to="/shipping" className="text-purple-200 hover:text-white transition-colors">
                  Shipping Policy
                </Link>
              </li>
              <li>
                <Link to="/returns" className="text-purple-200 hover:text-white transition-colors">
                  Returns & Exchanges
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-purple-200 hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-purple-300 mr-3 mt-0.5" />
                <span className="text-purple-200">
                  123 Toy Lane, Playful City
                  <br />
                  NY 12345, United States
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-purple-300 mr-3" />
                <a href="tel:+1234567890" className="text-purple-200 hover:text-white transition-colors">
                  (123) 456-7890
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-purple-300 mr-3" />
                <a
                  href="mailto:info@kidstreasure.com"
                  className="text-purple-200 hover:text-white transition-colors"
                >
                  info@kidstreasure.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="pt-8 border-t border-purple-800 text-center md:flex md:justify-between md:items-center">
          <p className="text-purple-300 text-sm">
            &copy; {new Date().getFullYear()} KidsTreasure. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex flex-wrap justify-center md:justify-end gap-4 text-sm text-purple-300">
            <Link to="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link to="/accessibility" className="hover:text-white transition-colors">
              Accessibility
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
