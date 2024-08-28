import React from 'react';

const TeamMember = ({ image, name, title, description, socialLinks }) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-lg text-center">
      <img src={image} alt={name} className="w-ful h-94  mx-auto mb-4 rounded-lg" />
      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="text-purple-600 mb-2">{title}</p>
      <p className="text-gray-600 text-sm">{description}</p>
      <div className="mt-4 flex justify-center space-x-3">
        {socialLinks.map((link, index) => (
          <a key={index} href={link.url} className="text-purple-600 hover:text-purple-800">
            <i className={link.iconClass}></i>
          </a>
        ))}
      </div>
    </div>
  );
};

export default TeamMember;
