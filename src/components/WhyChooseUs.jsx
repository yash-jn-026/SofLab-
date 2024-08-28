import React, { useEffect, useRef } from 'react';

function WhyChooseUs() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slideUp');
            entry.target.classList.remove('opacity-0');
          } else {
            // Remove the animation classes when the element exits the viewport
            entry.target.classList.remove('animate-slideUp');
            entry.target.classList.add('opacity-0');
          }
        });
      },
      {
        threshold: 0.2, // Trigger when 20% of the section is visible
      }
    );

    const elements = sectionRef.current.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div ref={sectionRef} className="bg-white py-12 mt-36 mb-12">
      <div className="max-w-7xl mx-auto text-center flex flex-col">
        <div className="flex flex-col w-full justify-center text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 animate-on-scroll opacity-0">Why Choose Us</h2>
          <p className="flex flex-col text-gray-600 mb-12 leading-relaxed text-lg justify-center items-center animate-on-scroll opacity-0">
            Our clients have been choosing Softlabs for a number of reasons including reliability, latest technologies, <br />and constant updates & support. Read more about other advantages below.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-16">
          <div className="flex flex-col items-center drop-shadow-md animate-on-scroll opacity-0">
            <img src="https://img.icons8.com/color/100/000000/clock--v1.png" alt="Quick Results" />
            <h3 className="text-lg font-semibold mt-4">Quick Results</h3>
            <p className="text-lg text-gray-600 mt-2 text-center">
              We work quickly and efficiently to provide the best results.
            </p>
          </div>
          <div className="flex flex-col items-center drop-shadow-md animate-on-scroll opacity-0">
            <img src="https://img.icons8.com/color/100/000000/computer.png" alt="Powerful Apps" />
            <h3 className="text-lg font-semibold mt-4">Powerful Apps</h3>
            <p className="text-lg text-gray-600 mt-2 text-center">
              Our team offers a wide variety of powerful and sustainable apps.
            </p>
          </div>
          <div className="flex flex-col items-center drop-shadow-md animate-on-scroll opacity-0">
            <img src="https://img.icons8.com/color/100/000000/money.png" alt="Money Saving" />
            <h3 className="text-lg font-semibold mt-4">Money Saving</h3>
            <p className="text-lg text-gray-600 mt-2 text-center">
              Our products cost less than their analogs by other companies.
            </p>
          </div>
          <div className="flex flex-col items-center drop-shadow-md animate-on-scroll opacity-0">
            <img src="https://img.icons8.com/color/100/000000/support.png" alt="Efficient Support" />
            <h3 className="text-lg font-semibold mt-4">Efficient Support</h3>
            <p className="text-lg text-gray-600 mt-2 text-center">
              Softlabs offers extensive support to its customers all over the world.
            </p>
          </div>
          <div className="flex flex-col items-center drop-shadow-md animate-on-scroll opacity-0">
            <img src="https://img.icons8.com/color/100/000000/idea.png" alt="Innovative Technologies" />
            <h3 className="text-lg font-semibold mt-4">Innovative Technologies</h3>
            <p className="text-lg text-gray-600 mt-2 text-center">
              Our developers use the latest technologies to deliver the best apps.
            </p>
          </div>
          <div className="flex flex-col items-center drop-shadow-md animate-on-scroll opacity-0">
            <img src="https://img.icons8.com/color/100/000000/user.png" alt="Great Usability" />
            <h3 className="text-lg font-semibold mt-4">Great Usability</h3>
            <p className="text-lg text-gray-600 mt-2 text-center">
              Improved usability and UX are distinctive features of our products.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyChooseUs;
