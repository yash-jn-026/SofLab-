import React from 'react';
import ValueCard from './ValueCard';
import { faUserTie, faCogs, faBullseye, faLightbulb } from '@fortawesome/free-solid-svg-icons';

const ValuesSection = () => {
  const values = [
    {
      icon: faUserTie,
      title: 'Customer Focus',
      description: 'Customers are our #1 priority and we focus on what they need in every project we work on.',
    },
    {
      icon: faCogs,
      title: 'Employee Empowerment',
      description: 'We empower our employees with necessary tools and resources to develop the best apps.',
    },
    {
      icon: faBullseye,
      title: 'Open & Honest',
      description: 'Softlabs is an open and highly honest team of developers who know what our clients need.',
    },
    {
      icon: faLightbulb,
      title: 'Innovative Ideas',
      description: 'Our products are based on innovative and creative ideas delivered by our team.',
    },
  ];

  return (
    <div className="bg-gray-100 py-16">
      <h2 className="text-3xl font-semibold text-center mb-12">Our Values</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {values.map((value, index) => (
          <ValueCard
            key={index}
            icon={value.icon}
            title={value.title}
            description={value.description}
          />
        ))}
      </div>
    </div>
  );
};

export default ValuesSection;
