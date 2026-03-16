import React from "react";
import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Phone,
  Mail,
  MapPin,
  MessageCircle,
} from "lucide-react";

const Footer: React.FC = () => {
  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Products", href: "#products" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ];

  const categories = [
    { name: "Living Room", href: "#products" },
    { name: "Dining Room", href: "#products" },
    { name: "Bedroom", href: "#products" },
    { name: "Office Furniture", href: "#products" },
    { name: "Custom Design", href: "#services" },
    { name: "Repair Services", href: "#services" },
  ];

  const services = [
    { name: "Custom Design", href: "#services" },
    { name: "Free Delivery", href: "#services" },
    { name: "Setup Service", href: "#services" },
    { name: "Repair & Maintenance", href: "#services" },
    { name: "Interior Consultation", href: "#services" },
    { name: "Warranty Support", href: "#services" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.replace("#", ""));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gray-900 dark:bg-background text-white dark:text-foreground transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="text-2xl font-bold text-amber-400 dark:text-amber-400">
              FurniWood
            </div>
            <p className="text-gray-300 dark:text-gray-300">
              Creating beautiful, functional furniture that transforms houses
              into homes for over 15 years.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Phone size={16} className="text-amber-400" />
                <a
                  href="tel:+15551234567"
                  className="text-gray-300 hover:text-white dark:hover:text-amber-400 transition-colors"
                >
                  +1 (555) 123-4567
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={16} className="text-amber-400" />
                <a
                  href="mailto:info@furniwood.com"
                  className="text-gray-300 hover:text-white dark:hover:text-amber-400 transition-colors"
                >
                  info@furniwood.com
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin size={16} className="text-amber-400" />
                <span className="text-gray-300 dark:text-gray-300">
                  123 Furniture Ave, NY 10001
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-white dark:hover:text-amber-400 transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              {categories.map((category) => (
                <li key={category.name}>
                  <button
                    onClick={() => scrollToSection(category.href)}
                    className="text-gray-300 hover:text-white dark:hover:text-amber-400 transition-colors"
                  >
                    {category.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <button
                    onClick={() => scrollToSection(service.href)}
                    className="text-gray-300 hover:text-white dark:hover:text-amber-400 transition-colors"
                  >
                    {service.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
          {/* Social Media */}
          <div className="flex items-center space-x-4">
            <span className="text-gray-300 dark:text-gray-300">Follow us:</span>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-300 hover:text-white dark:hover:text-amber-400 transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white dark:hover:text-amber-400 transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white dark:hover:text-amber-400 transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white dark:hover:text-amber-400 transition-colors"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* WhatsApp CTA */}
          <div className="flex items-center space-x-4">
            <span className="text-gray-300 dark:text-gray-300">Need help?</span>
            <button
              onClick={() =>
                window.open(
                  "https://wa.me/15551234567?text=Hello! I need help with furniture.",
                  "_blank"
                )
              }
              className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors flex items-center space-x-2"
            >
              <MessageCircle size={16} />
              <span>WhatsApp Us</span>
            </button>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 dark:border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 dark:text-gray-400">
            © 2024 FurniWood. All rights reserved. | Privacy Policy | Terms of
            Service
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
