import React from 'react';

function GoogleMap(){
  return (
    <div className="h-64 w-full">
      <iframe
        title="Google Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345098393!2d144.95592831550426!3d-37.817209979751554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f0b2f1e7%3A0x5045675218ce6e0!2sFulton%20St%2C%20Melbourne%20VIC%203000%2C%20Australia!5e0!3m2!1sen!2sus!4v1614931681665!5m2!1sen!2sus"
        className="w-full h-full border-0"
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default GoogleMap;
