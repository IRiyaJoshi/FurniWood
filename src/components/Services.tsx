import React from "react";
import {
  Home,
  Truck,
  Wrench,
  Palette,
  MessageCircle,
  Clock,
} from "lucide-react";

const Services: React.FC = () => {
  const services = [
    {
      icon: Home,
      title: "Custom Furniture Design",
      description:
        "Tailored furniture solutions designed specifically for your space and style preferences.",
      features: [
        "Personalized Design",
        "3D Visualization",
        "Quality Materials",
      ],
    },
    {
      icon: Truck,
      title: "Free Delivery & Setup",
      description:
        "Complimentary delivery and professional setup service within 50km radius.",
      features: ["Free Delivery", "Professional Setup", "Damage Protection"],
    },
    {
      icon: Wrench,
      title: "Repair & Maintenance",
      description:
        "Expert repair services to keep your furniture looking and functioning like new.",
      features: ["Expert Repairs", "Maintenance Tips", "Warranty Support"],
    },
    {
      icon: Palette,
      title: "Interior Consultation",
      description:
        "Professional interior design consultation to help you choose the perfect pieces.",
      features: ["Design Consultation", "Color Matching", "Space Planning"],
    },
    {
      icon: Clock,
      title: "Quick Turnaround",
      description:
        "Fast production and delivery times without compromising on quality.",
      features: ["Express Orders", "Time Tracking", "Priority Support"],
    },
    {
      icon: MessageCircle,
      title: "24/7 Support",
      description:
        "Round-the-clock customer support via WhatsApp and phone for all your needs.",
      features: ["WhatsApp Support", "Phone Support", "Live Chat"],
    },
  ];

  const handleWhatsAppClick = () => {
    window.open(
      "https://wa.me/1234567890?text=Hello! I'd like to know more about your services.",
      "_blank"
    );
  };

  return (
    <section className="section-spacing bg-white dark:bg-background transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-foreground mb-4">
            Our Premium Services
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We provide comprehensive furniture solutions from custom design to
            delivery and maintenance. Experience excellence at every step of
            your furniture journey.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white dark:bg-background rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 border border-gray-100 dark:border-gray-800"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-amber-100 dark:bg-amber-900 rounded-full mb-6">
                <service.icon
                  className="text-amber-600 dark:text-amber-400"
                  size={32}
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-center text-sm text-gray-700 dark:text-gray-200"
                  >
                    <div className="w-2 h-2 bg-amber-500 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-amber-600 to-amber-700 dark:from-amber-900 dark:to-amber-900 rounded-2xl p-8 text-center transition-colors duration-300">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-white dark:text-amber-400 mb-4">
              Ready to Transform Your Space?
            </h3>
            <p className="text-amber-100 dark:text-amber-200 mb-8 text-lg">
              Get in touch with our experts today and let us help you create the
              perfect furniture solution for your home or office.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleWhatsAppClick}
                className="bg-green-500 text-white px-8 py-3 rounded-lg hover:bg-green-600 transition-colors flex items-center justify-center space-x-2"
              >
                <MessageCircle size={20} />
                <span>WhatsApp Consultation</span>
              </button>
              <button
                onClick={() => {
                  const element = document.getElementById("contact");
                  if (element) element.scrollIntoView({ behavior: "smooth" });
                }}
                className="bg-white dark:bg-background text-amber-600 dark:text-amber-400 px-8 py-3 rounded-lg hover:bg-gray-50 dark:hover:bg-amber-900 transition-colors font-medium"
              >
                Schedule Visit
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
