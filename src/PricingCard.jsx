import React from 'react';

const PricingCard = ({ title, description, price, isHighlighted }) => {
  return (
    <div 
      className={`p-8 rounded-lg shadow-lg transition duration-300 transform hover:scale-105 
        ${isHighlighted 
          ? 'bg-gradient-to-r from-purple-600 to-purple-800 text-white' 
          : 'bg-white hover:bg-gradient-to-r hover:from-purple-600 hover:to-purple-800 hover:text-white'}`
      }
    >
      <h3 className={`text-xl font-semibold mb-4 ${isHighlighted ? 'text-white' : 'text-gray-800'}`}>
        {title}
      </h3>
      <p className={`text-sm ${isHighlighted ? 'text-gray-200' : 'text-gray-600'} mb-6`}>
        {description}
      </p>
      <div className="text-3xl font-bold mb-4">{price}</div>
      <button className="bg-gradient-to-r from-pink-500 to-yellow-500 text-white px-6 py-3 rounded-full text-lg font-semibold">
        Buy Now
      </button>
    </div>
  );
};

export default PricingCard;
