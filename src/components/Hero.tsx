import React from "react";
import { ArrowRight, Star, MessageCircle } from "lucide-react";

const Hero: React.FC = () => {
  const handleWhatsAppClick = () => {
    window.open(
      "https://wa.me/1234567890?text=Hello! I'd like to know more about your furniture collection.",
      "_blank"
    );
  };

  const scrollToProducts = () => {
    const element = document.getElementById("products");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative bg-gradient-to-r from-amber-50 to-amber-100 dark:from-background dark:to-background overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-foreground leading-tight">
                Premium
                <span className="block text-amber-600 dark:text-amber-400">
                  Furniture
                </span>
                <span className="block text-gray-800 dark:text-foreground">
                  Collection
                </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl">
                Transform your space with our handcrafted furniture. From
                elegant dining sets to cozy living room pieces, discover quality
                that lasts generations.
              </p>
            </div>

            {/* Stats */}
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-2">
                <Star className="text-yellow-500 fill-current" size={20} />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
                  4.9/5 Rating
                </span>
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-300">
                <span className="font-bold text-amber-600 dark:text-amber-400">
                  500+
                </span>{" "}
                Happy Customers
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-300">
                <span className="font-bold text-amber-600 dark:text-amber-400">
                  15+
                </span>{" "}
                Years Experience
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button
                onClick={scrollToProducts}
                className="bg-amber-600 text-white px-8 py-4 rounded-lg hover:bg-amber-700 dark:bg-amber-400 dark:text-background dark:hover:bg-amber-500 transition-colors flex items-center justify-center space-x-2 group"
              >
                <span className="font-medium">Explore Collection</span>
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>
              <button
                onClick={handleWhatsAppClick}
                className="bg-green-500 text-white px-8 py-4 rounded-lg hover:bg-green-600 transition-colors flex items-center justify-center space-x-2"
              >
                <MessageCircle size={20} />
                <span className="font-medium">Get Quote</span>
              </button>
            </div>
          </div>

          {/* Right Column - Hero Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Premium Furniture Showroom"
                className="w-full h-96 lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 bg-white dark:bg-background rounded-full p-4 shadow-lg transition-colors duration-300">
              <div className="text-center">
                <div className="text-2xl font-bold text-amber-600 dark:text-amber-400">
                  25%
                </div>
                <div className="text-xs text-gray-600 dark:text-gray-200">
                  OFF
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -left-6 bg-white dark:bg-background rounded-xl p-4 shadow-lg transition-colors duration-300">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900 rounded-full flex items-center justify-center">
                  <Star
                    className="text-amber-600 dark:text-amber-400 fill-current"
                    size={20}
                  />
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-900 dark:text-foreground">
                    Premium Quality
                  </div>
                  <div className="text-xs text-gray-600 dark:text-gray-200">
                    Handcrafted Excellence
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
