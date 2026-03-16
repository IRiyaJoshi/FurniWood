import React from "react";
import { Users, Award, Clock, Heart } from "lucide-react";

const About: React.FC = () => {
  const stats = [
    {
      icon: Users,
      value: "500+",
      label: "Happy Customers",
      description: "Families trust us for their furniture needs",
    },
    {
      icon: Award,
      value: "15+",
      label: "Years Experience",
      description: "Crafting quality furniture since 2008",
    },
    {
      icon: Clock,
      value: "24/7",
      label: "Support",
      description: "Always here when you need us",
    },
    {
      icon: Heart,
      value: "99%",
      label: "Satisfaction",
      description: "Customer satisfaction rate",
    },
  ];

  const values = [
    {
      title: "Quality Craftsmanship",
      description:
        "Every piece is meticulously crafted by skilled artisans using premium materials and time-tested techniques.",
      image:
        "https://images.pexels.com/photos/5998120/pexels-photo-5998120.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      title: "Sustainable Materials",
      description:
        "We source our wood from sustainable forests and use eco-friendly finishes to protect our environment.",
      image:
        "https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      title: "Custom Solutions",
      description:
        "From concept to completion, we work closely with you to create furniture that perfectly fits your vision.",
      image:
        "https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
  ];

  return (
    <section className="section-spacing bg-gray-50 dark:bg-background transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-foreground mb-4">
            About FurniWood
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            For over 15 years, we've been creating beautiful, functional
            furniture that transforms houses into homes. Our passion for
            craftsmanship and dedication to quality has made us a trusted name
            in furniture.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-amber-100 dark:bg-amber-900 rounded-full mx-auto mb-4">
                <stat.icon
                  className="text-amber-600 dark:text-amber-400"
                  size={28}
                />
              </div>
              <div className="text-3xl font-bold text-gray-900 dark:text-foreground mb-2">
                {stat.value}
              </div>
              <div className="text-lg font-medium text-gray-800 dark:text-foreground mb-1">
                {stat.label}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-300">
                {stat.description}
              </div>
            </div>
          ))}
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-foreground">
              Our Story
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              Founded in 2008 by master craftsman Robert Wilson, FurniWood began
              as a small workshop with a simple vision: to create furniture that
              combines traditional craftsmanship with modern design.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              What started as a one-man operation has grown into a full-service
              furniture company, but our commitment to quality and attention to
              detail remains unchanged. Every piece that leaves our workshop is
              a testament to our dedication to excellence.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              Today, we're proud to serve hundreds of families across the
              region, helping them create beautiful, functional spaces that
              reflect their unique style and personality.
            </p>
          </div>
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/5998120/pexels-photo-5998120.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Furniture Workshop"
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-foreground text-center mb-12">
            Our Core Values
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white dark:bg-background rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={value.image}
                  alt={value.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-foreground mb-3">
                    {value.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mission Statement */}
        <div className="bg-amber-600 dark:bg-amber-900 rounded-2xl p-8 lg:p-12 text-center transition-colors duration-300">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-white dark:text-amber-400 mb-6">
              Our Mission
            </h3>
            <p className="text-amber-100 dark:text-amber-200 text-lg mb-6">
              To create exceptional furniture that enhances the way people live,
              work, and relax. We believe that great furniture should be both
              beautiful and functional, built to last for generations while
              reflecting the unique personality of each customer.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => {
                  const element = document.getElementById("products");
                  if (element) element.scrollIntoView({ behavior: "smooth" });
                }}
                className="bg-white dark:bg-background text-amber-600 dark:text-amber-400 px-8 py-3 rounded-lg hover:bg-gray-50 dark:hover:bg-amber-900 transition-colors font-medium"
              >
                View Our Collection
              </button>
              <button
                onClick={() => {
                  const element = document.getElementById("contact");
                  if (element) element.scrollIntoView({ behavior: "smooth" });
                }}
                className="border border-white dark:border-amber-400 text-white dark:text-amber-400 px-8 py-3 rounded-lg hover:bg-white hover:text-amber-600 dark:hover:bg-amber-900 dark:hover:text-amber-400 transition-colors font-medium"
              >
                Visit Our Showroom
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
