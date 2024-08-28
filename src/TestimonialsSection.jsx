import React from 'react';
import TestimonialCard from './TestimonialCard';

const TestimonialsSection = () => {
  const testimonials = [
    {
      rating: 5,
      text: 'Our company has great respect for the technical and management capabilities of Softlabs, whose people are highly competent, easy to work with and have delivered results that proved to be useful.',
      image: 'https://t4.ftcdn.net/jpg/08/76/91/07/360_F_876910780_5NgU583OTZRYJjnw0tMjDmMe7r9nuMCZ.jpg',
      name: 'Mildred Bates',
      designation: 'Regular Client',
      date: '2 days ago',
    },
    {
      rating: 5,
      text: 'Softlabs is an innovative and professional company that has provided us with valuable software development services. We are very happy with our decision to cooperate with them.',
      image: 'https://jadeblue.com/cdn/shop/articles/Formals_Wear_for_men.png?v=1708932379&width=1100',
      name: 'Marie Hanson',
      designation: 'Regular Client',
      date: '2 days ago',
    },
  ];

  return (
    <div className="bg-gray-100 py-16">
      <h2 className="text-3xl font-semibold text-center mb-12">Testimonials</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            rating={testimonial.rating}
            text={testimonial.text}
            image={testimonial.image}
            name={testimonial.name}
            designation={testimonial.designation}
            date={testimonial.date}
          />
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <span className="h-3 w-3 bg-purple-600 rounded-full mx-1"></span>
        <span className="h-3 w-3 bg-purple-300 rounded-full mx-1"></span>
        <span className="h-3 w-3 bg-purple-300 rounded-full mx-1"></span>
      </div>
    </div>
  );
};

export default TestimonialsSection;
