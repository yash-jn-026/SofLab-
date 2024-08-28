import React from 'react';

function BlogPost({ image, category, author, title, description, date })
 {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <span className="text-purple-600 text-xs font-semibold uppercase">{category}</span>
        <p className="text-gray-500 text-xs mb-2">by {author}</p>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        <p className="text-gray-400 text-xs">{date}</p>
      </div>
    </div>
  );
};

export default BlogPost;
