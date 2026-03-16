import React, { useState } from "react";
import { Menu, X, Phone, MessageCircle } from "lucide-react";

interface HeaderProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

const Header: React.FC<HeaderProps> = ({ activeSection, onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = [
    { id: "home", label: "Home" },
    { id: "services", label: "Services" },
    { id: "about", label: "About Us" },
    { id: "gallery", label: "Gallery" },
    { id: "products", label: "Products" },
    { id: "testimonials", label: "Reviews" },
    { id: "faq", label: "FAQ" },
    { id: "contact", label: "Contact" },
  ];

  const handleWhatsAppClick = () => {
    window.open(
      "https://wa.me/1234567890?text=Hello! I'm interested in your furniture collection.",
      "_blank"
    );
  };

  return (
    <header className="bg-white dark:bg-background shadow-lg sticky top-0 z-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <div className="text-2xl font-bold text-amber-400 dark:text-amber-400">
              FurniWood
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                  activeSection === item.id
                    ? "text-amber-600 border-b-2 border-amber-600 dark:text-amber-400 dark:border-amber-400"
                    : "text-gray-700 hover:text-amber-600 dark:text-gray-200 dark:hover:text-amber-400"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Contact Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="tel:+1234567890"
              className="flex items-center space-x-2 text-gray-700 hover:text-amber-600 dark:text-gray-200 dark:hover:text-amber-400 transition-colors"
            >
              <Phone size={18} />
              <span className="text-sm">Call Us</span>
            </a>
            <button
              onClick={handleWhatsAppClick}
              className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors flex items-center space-x-2"
            >
              <MessageCircle size={18} />
              <span>WhatsApp</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-amber-600 dark:text-gray-200 dark:hover:text-amber-400 focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white dark:bg-background border-t border-gray-100 dark:border-gray-800 transition-colors duration-300">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onNavigate(item.id);
                    setIsMenuOpen(false);
                  }}
                  className={`block w-full text-left px-3 py-2 text-base font-medium transition-colors duration-200 ${
                    activeSection === item.id
                      ? "text-amber-600 bg-amber-50 dark:text-amber-400 dark:bg-background"
                      : "text-gray-700 hover:text-amber-600 hover:bg-gray-50 dark:text-gray-200 dark:hover:text-amber-400 dark:hover:bg-background"
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-4 border-t border-gray-100 dark:border-gray-800">
                <button
                  onClick={handleWhatsAppClick}
                  className="w-full bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors flex items-center justify-center space-x-2"
                >
                  <MessageCircle size={18} />
                  <span>WhatsApp Inquiry</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
