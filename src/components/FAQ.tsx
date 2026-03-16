import React, { useState } from 'react';
import { Plus, Minus, MessageCircle, Phone, Mail } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqs = [
    {
      question: 'What types of furniture do you offer?',
      answer: 'We offer a comprehensive range of furniture including living room sets, dining room furniture, bedroom collections, office furniture, and outdoor pieces. Our catalog includes sofas, chairs, tables, beds, wardrobes, desks, and custom-made pieces tailored to your specific needs.'
    },
    {
      question: 'Do you provide custom furniture design services?',
      answer: 'Yes! We specialize in custom furniture design. Our skilled craftsmen can create pieces according to your specifications, room dimensions, and style preferences. We provide 3D visualization, material selection, and work closely with you throughout the design process.'
    },
    {
      question: 'What is your delivery and setup process?',
      answer: 'We offer free delivery within 50km of our showroom. Our professional delivery team will bring your furniture to your home and set it up in your desired location. We also provide assembly services and ensure everything is properly positioned and functional before we leave.'
    },
    {
      question: 'What materials do you use in your furniture?',
      answer: 'We use only premium materials including solid wood (oak, walnut, cherry), genuine leather, high-quality fabrics, and durable hardware. All our wood is sourced from sustainable forests, and we use eco-friendly finishes and adhesives.'
    },
    {
      question: 'Do you offer warranties on your furniture?',
      answer: 'Yes, we provide comprehensive warranties on all our furniture. Standard pieces come with a 2-3 year warranty, while premium items may have up to 5 years coverage. Our warranty covers manufacturing defects and structural issues.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept cash, all major credit cards, bank transfers, and offer flexible payment plans. For larger purchases, we provide financing options with competitive interest rates. We also accept partial payments during the manufacturing process for custom orders.'
    },
    {
      question: 'How long does it take to receive my furniture?',
      answer: 'For in-stock items, delivery typically takes 3-7 business days. Custom-made pieces usually take 2-4 weeks depending on the complexity of the design. We provide regular updates on your order status and will notify you as soon as your furniture is ready.'
    },
    {
      question: 'Do you offer furniture repair and maintenance services?',
      answer: 'Absolutely! We provide comprehensive repair and maintenance services for all types of furniture, not just items purchased from us. Our skilled technicians can handle everything from minor scratches to major structural repairs.'
    },
    {
      question: 'Can I return or exchange furniture if I\'m not satisfied?',
      answer: 'We offer a 30-day return policy for standard items in original condition. Custom-made pieces are non-returnable unless there are manufacturing defects. We also offer exchanges if you\'re not completely satisfied with your purchase.'
    },
    {
      question: 'Do you have a showroom where I can see the furniture in person?',
      answer: 'Yes, we have a large showroom where you can see and test our furniture collection. Our showroom is open Monday to Saturday, 9 AM to 7 PM, and Sunday 10 AM to 5 PM. Our design consultants are available to help you make the best choices for your space.'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our furniture, services, and policies. 
            Can't find what you're looking for? Contact us directly.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4 mb-12">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-gray-50 rounded-lg overflow-hidden">
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-100 transition-colors"
              >
                <span className="font-medium text-gray-900">{faq.question}</span>
                {openItems.includes(index) ? (
                  <Minus className="text-amber-600 flex-shrink-0" size={20} />
                ) : (
                  <Plus className="text-amber-600 flex-shrink-0" size={20} />
                )}
              </button>
              {openItems.includes(index) && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact Options */}
        <div className="bg-amber-50 rounded-2xl p-8">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Still Have Questions?
            </h3>
            <p className="text-gray-600">
              Our team is here to help! Reach out to us through any of these channels:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mx-auto mb-4">
                <MessageCircle className="text-green-600" size={24} />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">WhatsApp</h4>
              <p className="text-gray-600 text-sm mb-3">Get instant answers to your questions</p>
              <button
                onClick={() => window.open('https://wa.me/1234567890?text=Hello! I have a question about your furniture.', '_blank')}
                className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors text-sm"
              >
                Chat Now
              </button>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mx-auto mb-4">
                <Phone className="text-blue-600" size={24} />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Phone</h4>
              <p className="text-gray-600 text-sm mb-3">Speak directly with our experts</p>
              <a
                href="tel:+1234567890"
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors text-sm inline-block"
              >
                Call Us
              </a>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-purple-100 rounded-full mx-auto mb-4">
                <Mail className="text-purple-600" size={24} />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Email</h4>
              <p className="text-gray-600 text-sm mb-3">Detailed inquiries and support</p>
              <a
                href="mailto:info@furniwood.com"
                className="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition-colors text-sm inline-block"
              >
                Email Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;