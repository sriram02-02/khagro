import { Link } from "wouter";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">KH AGRO STOCKIST & EXPORTERS PVT. LTD.</h3>
            <p className="text-gray-300 mb-4">
              Your trusted partner for premium quality agricultural exports including rice, pulses, and authentic spices.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about">
                  <span className="text-gray-300 hover:text-white transition-colors cursor-pointer">About</span>
                </Link>
              </li>
              <li>
                <Link href="/products">
                  <span className="text-gray-300 hover:text-white transition-colors cursor-pointer">Products</span>
                </Link>
              </li>
              <li>
                <Link href="/custom-brand-solutions">
                  <span className="text-gray-300 hover:text-white transition-colors cursor-pointer">Custom Brand Solutions</span>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <span className="text-gray-300 hover:text-white transition-colors cursor-pointer">Contact</span>
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-300">
              <li>123 Trade Center, Global Business District</li>
              <li>+1 (555) 123-4567</li>
              <li>info@khagroexports.com</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 KH AGRO STOCKIST & EXPORTERS PVT. LTD. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
