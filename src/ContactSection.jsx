import React from 'react';
import ContactInfo from './ContactInfo';
import ContactForm from './ContactForm';
import GoogleMap from './GoogleMap';


const ContactSection = () => {
  return (
    <div className="bg-gray-100 py-16 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <ContactInfo/>
        <ContactForm />
        <GoogleMap />
      </div>
    </div>
  );
};

export default ContactSection;
