import React from 'react';
import PricingCard from './PricingCard';

function PricingSection() {
  const plans = [
    {
      title: 'Silver',
      description: 'This option is perfect if you need a simple app for your corporate or personal needs and don’t want to overpay for its development.',
      price: '$100.00/mo',
      isHighlighted: false,
    },
    {
      title: 'Gold',
      description: 'This offer provides you with extended support for your future application as well as fair pricing and more useful features for your app.',
      price: '$149.00/mo',
      isHighlighted: true,
    },
    {
      title: 'Diamond',
      description: 'Choose this plan if you need a powerful application for your business with lots of features, extended support, and full integration into your workflow.',
      price: '$199.00/mo',
      isHighlighted: false,
    },
  ];

  return (
    <div className="bg-gray-100 py-16 px-4">
      <h2 className="text-3xl font-semibold text-center mb-12">Pricing</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <PricingCard
            key={index}
            title={plan.title}
            description={plan.description}
            price={plan.price}
            isHighlighted={plan.isHighlighted}
          />
        ))}
      </div>
    </div>
  );
};

export default PricingSection;
