import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Homeowner',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5,
      text: 'FurniWood transformed our living room completely! The quality is exceptional and the customer service was outstanding. Our sofa set arrived exactly as promised and looks even better than in the photos.',
      location: 'New York, NY'
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Interior Designer',
      avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5,
      text: 'I\'ve been working with FurniWood for over 3 years now. Their attention to detail and craftsmanship is unmatched. My clients are always impressed with the quality and durability of their furniture.',
      location: 'Los Angeles, CA'
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'Business Owner',
      avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5,
      text: 'We furnished our entire office with FurniWood\'s commercial collection. The process was smooth, delivery was on time, and the furniture has held up beautifully even with heavy daily use.',
      location: 'Chicago, IL'
    },
    {
      id: 4,
      name: 'David Thompson',
      role: 'Architect',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5,
      text: 'The custom dining table FurniWood created for our project exceeded all expectations. The craftsmanship is incredible and it became the centerpiece of the entire space.',
      location: 'Miami, FL'
    },
    {
      id: 5,
      name: 'Lisa Park',
      role: 'Restaurant Owner',
      avatar: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5,
      text: 'FurniWood helped us create the perfect ambiance for our restaurant. The furniture is not only beautiful but also practical for our daily operations. Highly recommended!',
      location: 'Seattle, WA'
    },
    {
      id: 6,
      name: 'Robert Wilson',
      role: 'Homeowner',
      avatar: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5,
      text: 'After 2 years, our bedroom set still looks and feels brand new. The investment was worth every penny. FurniWood\'s after-sales service is also excellent.',
      location: 'Boston, MA'
    }
  ];

  const stats = [
    { value: '500+', label: 'Happy Customers' },
    { value: '4.9/5', label: 'Average Rating' },
    { value: '99%', label: 'Satisfaction Rate' },
    { value: '15+', label: 'Years Experience' }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers have to say about 
            their experience with FurniWood furniture and service.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-amber-600 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              {/* Quote Icon */}
              <div className="flex items-center justify-between mb-4">
                <Quote className="text-amber-600" size={24} />
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < testimonial.rating
                          ? 'text-yellow-500 fill-current'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-600 mb-6 italic">
                "{testimonial.text}"
              </p>

              {/* Customer Info */}
              <div className="flex items-center space-x-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                  <p className="text-xs text-gray-500">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-amber-600 rounded-2xl p-8 lg:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Join Our Happy Customers?
            </h3>
            <p className="text-amber-100 mb-8 max-w-2xl mx-auto">
              Experience the FurniWood difference for yourself. Contact us today to start your 
              furniture journey and create the space of your dreams.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => {
                  window.open('https://wa.me/1234567890?text=Hello! I\'d like to get a quote for furniture.', '_blank');
                }}
                className="bg-green-500 text-white px-8 py-3 rounded-lg hover:bg-green-600 transition-colors font-medium"
              >
                Get Your Quote
              </button>
              <button
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-white text-amber-600 px-8 py-3 rounded-lg hover:bg-gray-50 transition-colors font-medium"
              >
                Visit Showroom
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;