import React, { useState } from 'react';
import { Star, MessageCircle, Eye, ShoppingCart } from 'lucide-react';

const Products: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProduct, setSelectedProduct] = useState<any>(null);

  const categories = ['All', 'Living Room', 'Dining Room', 'Bedroom', 'Office'];

  const products = [
    {
      id: 1,
      name: 'Luxury Sofa Set',
      category: 'Living Room',
      price: '$2,499',
      originalPrice: '$3,299',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
      rating: 4.9,
      reviews: 127,
      description: 'Premium leather sofa set with ergonomic design and superior comfort.',
      specifications: {
        material: 'Genuine Italian Leather',
        dimensions: '220cm x 95cm x 85cm',
        weight: '85kg',
        color: 'Available in 6 colors',
        warranty: '5 years'
      },
      features: ['Ergonomic Design', 'Premium Leather', 'Lifetime Support', 'Free Delivery']
    },
    {
      id: 2,
      name: 'Elegant Dining Table',
      category: 'Dining Room',
      price: '$1,299',
      originalPrice: '$1,699',
      image: 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=800',
      rating: 4.8,
      reviews: 89,
      description: 'Solid wood dining table perfect for family gatherings and special occasions.',
      specifications: {
        material: 'Solid Oak Wood',
        dimensions: '180cm x 90cm x 75cm',
        weight: '65kg',
        color: 'Natural Oak, Walnut, Cherry',
        warranty: '3 years'
      },
      features: ['Solid Wood', 'Seats 6 People', 'Scratch Resistant', 'Easy Assembly']
    },
    {
      id: 3,
      name: 'King Size Bed Frame',
      category: 'Bedroom',
      price: '$899',
      originalPrice: '$1,199',
      image: 'https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=800',
      rating: 4.7,
      reviews: 156,
      description: 'Modern bed frame with built-in storage and premium headboard design.',
      specifications: {
        material: 'Engineered Wood & Metal',
        dimensions: '210cm x 180cm x 120cm',
        weight: '45kg',
        color: 'White, Black, Natural Wood',
        warranty: '2 years'
      },
      features: ['Built-in Storage', 'Premium Headboard', 'Easy Assembly', 'Sturdy Construction']
    },
    {
      id: 4,
      name: 'Executive Office Desk',
      category: 'Office',
      price: '$699',
      originalPrice: '$899',
      image: 'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=800',
      rating: 4.6,
      reviews: 73,
      description: 'Professional office desk with ample storage and modern design.',
      specifications: {
        material: 'Engineered Wood & Steel',
        dimensions: '150cm x 70cm x 75cm',
        weight: '35kg',
        color: 'Dark Walnut, Light Oak',
        warranty: '2 years'
      },
      features: ['Cable Management', 'Multiple Drawers', 'Spacious Surface', 'Professional Look']
    },
    {
      id: 5,
      name: 'Comfortable Armchair',
      category: 'Living Room',
      price: '$599',
      originalPrice: '$799',
      image: 'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=800',
      rating: 4.8,
      reviews: 92,
      description: 'Ergonomic armchair with premium fabric and excellent lumbar support.',
      specifications: {
        material: 'Premium Fabric & Foam',
        dimensions: '75cm x 80cm x 95cm',
        weight: '25kg',
        color: 'Grey, Beige, Navy Blue',
        warranty: '3 years'
      },
      features: ['Ergonomic Design', 'Premium Fabric', 'Lumbar Support', 'Swivel Base']
    },
    {
      id: 6,
      name: 'Modern Wardrobe',
      category: 'Bedroom',
      price: '$1,199',
      originalPrice: '$1,499',
      image: 'https://images.pexels.com/photos/1571454/pexels-photo-1571454.jpeg?auto=compress&cs=tinysrgb&w=800',
      rating: 4.9,
      reviews: 68,
      description: 'Spacious wardrobe with sliding doors and organized storage compartments.',
      specifications: {
        material: 'Engineered Wood & Glass',
        dimensions: '200cm x 60cm x 220cm',
        weight: '85kg',
        color: 'White, Black, Wood Grain',
        warranty: '3 years'
      },
      features: ['Sliding Doors', 'Multiple Compartments', 'Mirror Panel', 'Soft Close']
    }
  ];

  const filteredProducts = activeCategory === 'All' 
    ? products 
    : products.filter(product => product.category === activeCategory);

  const handleWhatsAppInquiry = (product: any) => {
    const message = `Hello! I'm interested in the ${product.name} (${product.price}). Could you provide more details?`;
    window.open(`https://wa.me/1234567890?text=${encodeURIComponent(message)}`, '_blank');
  };

  const ProductModal = ({ product, onClose }: { product: any; onClose: () => void }) => (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-4xl max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-2xl font-bold text-gray-900">{product.name}</h3>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              ×
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(product.rating)
                          ? 'text-yellow-500 fill-current'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-600">({product.reviews} reviews)</span>
              </div>
              
              <div className="flex items-center space-x-2">
                <span className="text-2xl font-bold text-amber-600">{product.price}</span>
                <span className="text-lg text-gray-500 line-through">{product.originalPrice}</span>
              </div>
              
              <p className="text-gray-600">{product.description}</p>
              
              <div className="space-y-2">
                <h4 className="font-semibold text-gray-900">Specifications:</h4>
                <div className="grid grid-cols-1 gap-2 text-sm">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key} className="flex justify-between">
                      <span className="capitalize text-gray-600">{key}:</span>
                      <span className="text-gray-900">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="space-y-2">
                <h4 className="font-semibold text-gray-900">Features:</h4>
                <div className="grid grid-cols-2 gap-2">
                  {product.features.map((feature: string, index: number) => (
                    <div key={index} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-amber-500 rounded-full mr-2"></div>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
              
              <button
                onClick={() => handleWhatsAppInquiry(product)}
                className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition-colors flex items-center justify-center space-x-2"
              >
                <MessageCircle size={20} />
                <span>Inquire on WhatsApp</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Products
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover our premium furniture collection with detailed specifications and competitive prices. 
            Each piece is crafted with care and built to last.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                activeCategory === category
                  ? 'bg-amber-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50 shadow-sm'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4 bg-red-500 text-white px-2 py-1 rounded text-sm font-medium">
                  25% OFF
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
                  <span className="text-sm text-gray-500">{product.category}</span>
                </div>
                
                <div className="flex items-center space-x-2 mb-3">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(product.rating)
                            ? 'text-yellow-500 fill-current'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">({product.reviews})</span>
                </div>
                
                <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-xl font-bold text-amber-600">{product.price}</span>
                    <span className="text-sm text-gray-500 line-through">{product.originalPrice}</span>
                  </div>
                </div>
                
                <div className="flex space-x-2">
                  <button
                    onClick={() => setSelectedProduct(product)}
                    className="flex-1 bg-gray-100 text-gray-700 py-2 rounded-lg hover:bg-gray-200 transition-colors flex items-center justify-center space-x-2"
                  >
                    <Eye size={16} />
                    <span>View Details</span>
                  </button>
                  <button
                    onClick={() => handleWhatsAppInquiry(product)}
                    className="flex-1 bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition-colors flex items-center justify-center space-x-2"
                  >
                    <MessageCircle size={16} />
                    <span>Inquire</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Product Modal */}
        {selectedProduct && (
          <ProductModal
            product={selectedProduct}
            onClose={() => setSelectedProduct(null)}
          />
        )}
      </div>
    </section>
  );
};

export default Products;