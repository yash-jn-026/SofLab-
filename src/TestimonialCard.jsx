import React from "react";

function TestimonialCard({ rating, text, image, name, designation, date }) {
  return (
    <div>
      {" "}
      <div className="bg-white rounded-lg p-6 shadow-lg">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            {[...Array(rating)].map((star, index) => (
              <i key={index} className="fas fa-star text-yellow-500"></i>
            ))}
          </div>
          <span className="text-gray-500 text-sm">{date}</span>
        </div>
        <p className="text-gray-600 italic mb-4">"{text}"</p>
        <div className="flex items-center">
          <img src={image} alt={name} className="w-10 h-10 rounded-full mr-3" />
          <div>
            <p className="text-purple-600 font-semibold">{name}</p>
            <p className="text-gray-500 text-sm">{designation}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestimonialCard;
