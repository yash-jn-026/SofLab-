import React from 'react';

function WhyChooseUs() {
  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
        <p className="text-gray-600 mb-12">
          Our clients have been choosing Softlabs for a number of reasons including reliability, latest technologies, and constant updates & support. Read more about other advantages below.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="flex flex-col items-center">
            <img src="https://img.icons8.com/color/100/000000/clock--v1.png" alt="Quick Results" />
            <h3 className="text-lg font-semibold mt-4">Quick Results</h3>
            <p className="text-gray-600 mt-2 text-center">
              We work quickly and efficiently to provide the best results.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <img src="https://img.icons8.com/color/100/000000/computer.png" alt="Powerful Apps" />
            <h3 className="text-lg font-semibold mt-4">Powerful Apps</h3>
            <p className="text-gray-600 mt-2 text-center">
              Our team offers a wide variety of powerful and sustainable apps.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <img src="https://img.icons8.com/color/100/000000/money.png" alt="Money Saving" />
            <h3 className="text-lg font-semibold mt-4">Money Saving</h3>
            <p className="text-gray-600 mt-2 text-center">
              Our products cost less than their analogs by other companies.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <img src="https://img.icons8.com/color/100/000000/support.png" alt="Efficient Support" />
            <h3 className="text-lg font-semibold mt-4">Efficient Support</h3>
            <p className="text-gray-600 mt-2 text-center">
              Softlabs offers extensive support to its customers all over the world.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <img src="https://img.icons8.com/color/100/000000/idea.png" alt="Innovative Technologies" />
            <h3 className="text-lg font-semibold mt-4">Innovative Technologies</h3>
            <p className="text-gray-600 mt-2 text-center">
              Our developers use the latest technologies to deliver the best apps.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <img src="https://img.icons8.com/color/100/000000/phone.png" alt="Great Usability" />
            <h3 className="text-lg font-semibold mt-4">Great Usability</h3>
            <p className="text-gray-600 mt-2 text-center">
              Improved usability and UX are distinctive features of our products.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyChooseUs;
