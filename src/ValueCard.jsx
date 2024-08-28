import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserTie, faCogs, faBullseye, faLightbulb } from '@fortawesome/free-solid-svg-icons';

const ValueCard = ({ icon, title, description }) => {
  return (
    <div className="text-center px-6">
      <div className="bg-purple-600 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
        <FontAwesomeIcon icon={icon} className="text-white text-3xl" />
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
};

export default ValueCard;
