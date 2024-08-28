import React from 'react';

function ContactInfo (){
  return (
    <div className="space-y-4">
      <div>
        <p className="flex items-center">
          <i className="fas fa-map-marker-alt text-purple-600 mr-2"></i>
          2130 Fulton Street, San Diego, CA 94117-1080 USA
        </p>
      </div>
      <div>
        <p className="flex items-center">
          <i className="fas fa-phone-alt text-purple-600 mr-2"></i>
          1-800-1234-567
        </p>
        <p className="flex items-center">
          <i className="fas fa-phone-alt text-purple-600 mr-2"></i>
          1-800-1234-567
        </p>
      </div>
      <div>
        <p className="flex items-center">
          <i className="fas fa-envelope text-purple-600 mr-2"></i>
          info@demolink.org
        </p>
      </div>
      <div className="flex space-x-4 mt-4">
        <i className="fab fa-facebook-f text-gray-500 hover:text-purple-600"></i>
        <i className="fab fa-twitter text-gray-500 hover:text-purple-600"></i>
        <i className="fab fa-instagram text-gray-500 hover:text-purple-600"></i>
        <i className="fab fa-pinterest-p text-gray-500 hover:text-purple-600"></i>
        <i className="fab fa-linkedin-in text-gray-500 hover:text-purple-600"></i>
        <i className="fab fa-snapchat-ghost text-gray-500 hover:text-purple-600"></i>
      </div>
    </div>
  );
};

export default ContactInfo;
