import React from 'react';

function ContactForm(){
  return (
    <form className="space-y-4 max-w-md">
      <input
        type="text"
        placeholder="Name"
        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
      />
      <input
        type="email"
        placeholder="E-mail"
        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
      />
      <textarea
        placeholder="Message"
        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
        rows="4"
      ></textarea>
      <button
        type="submit"
        className="bg-gradient-to-r from-pink-500 to-yellow-500 text-white px-6 py-3 rounded-full text-lg font-semibold"
      >
        Send
      </button>
    </form>
  );
};

export default ContactForm;
