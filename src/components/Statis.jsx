import React from 'react'

function Statis() {
  return (
    <section className="bg-purple-800 text-white py-16 px-4">

        <div className='flex justify-center items-center pb-12 text-5xl'> 
            <h1>Statistics</h1>
        </div>
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Left Section */}
      <div className="flex flex-col justify-center">
        <blockquote className="text-lg">
          <span className="text-4xl leading-none">“</span>
          At Softlabs, we aim to provide top quality software development services to a greater number of individual and corporate customers than any other company in the USA or abroad. Our apps help our clients grow professionally and personally.
        </blockquote>
        <p className="mt-4 font-bold text-yellow-400">Samuel Chapman</p>
        <p className="text-gray-300">CEO & Founder of Softlabs</p>
      </div>

      {/* Right Section */}
      <div className="flex flex-col justify-center">
        
        <p className="mb-8">
          With the development of online and mobile apps, our number of clients has increased significantly.
        </p>
        <div className="flex flex-col space-y-8">
          <div className="flex items-center">
            <div className="w-16 h-16 border-4 border-yellow-500 rounded-full flex items-center justify-center text-lg font-bold ">
              50%
            </div>
            <p className="ml-4">Innovations</p>
          </div>
          <div className="flex items-center">
            <div className="w-16 h-16 border-4 border-yellow-500 rounded-full flex items-center justify-center text-lg font-bold">
              100%
            </div>
            <p className="ml-4">Results</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Statis





