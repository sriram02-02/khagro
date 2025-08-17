import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/products", label: "Products" },
    { href: "/custom-brand-solutions", label: "Custom Brand Solutions" },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-white via-blue-50 to-white shadow-xl fixed w-full top-0 z-50 border-b-2 border-brand-blue/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <Link href="/">
              <div className="flex items-center space-x-3">
                <img 
                  src="https://drive.google.com/uc?export=view&id=1PhswZMhoPaAGb_9iGAolI6PUFouF_iuj" 
                  alt="Sri Chakra Logo" 
                  className="h-12 w-12 object-contain"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    const fallback = target.nextElementSibling as HTMLDivElement | null;
                    target.style.display = 'none';
                    if (fallback) {
                      fallback.style.display = 'flex';
                    }
                  }}
                />
                <div className="bg-gradient-to-br from-brand-blue to-blue-700 p-2 rounded-lg" style={{ display: 'none' }}>
                  <span className="text-white font-bold text-lg">🌾</span>
                </div>
                <h1 className="text-lg font-bold bg-gradient-to-r from-brand-blue to-blue-700 bg-clip-text text-transparent">
                  KH AGRO STOCKIST & EXPORTERS PVT. LTD.
                </h1>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-1">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href}>
                  <span
                    className={`px-4 py-2 text-sm font-medium transition-all duration-300 cursor-pointer rounded-lg ${
                      location === item.href
                        ? "bg-gradient-to-r from-brand-blue to-blue-600 text-white shadow-lg transform scale-105"
                        : "text-brand-gray hover:text-brand-blue hover:bg-blue-50 hover:shadow-md"
                    }`}
                  >
                    {item.label}
                  </span>
                </Link>
              ))}
              <Link href="/contact">
                <Button className="bg-gradient-to-r from-brand-orange to-orange-600 text-white hover:from-orange-600 hover:to-orange-700 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ml-4">
                  Contact
                </Button>
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMobileMenu}
              className="text-brand-gray hover:text-brand-blue"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gradient-to-b from-blue-50 to-white border-t-2 border-brand-blue/20 shadow-lg">
          <div className="px-4 pt-4 pb-6 space-y-2">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <span
                  className={`block px-4 py-3 text-base font-medium rounded-lg cursor-pointer transition-all duration-300 ${
                    location === item.href
                      ? "bg-gradient-to-r from-brand-blue to-blue-600 text-white shadow-lg"
                      : "text-brand-gray hover:text-brand-blue hover:bg-blue-50 hover:shadow-md"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </span>
              </Link>
            ))}
            <Link href="/contact">
              <span
                className="block px-4 py-3 text-base font-medium bg-gradient-to-r from-brand-orange to-orange-600 text-white rounded-lg cursor-pointer hover:from-orange-600 hover:to-orange-700 shadow-lg hover:shadow-xl transition-all duration-300 mt-4"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </span>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
