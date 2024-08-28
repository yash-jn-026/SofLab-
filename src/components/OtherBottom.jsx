import React from 'react'

function OtherBottom() {
  return (
    <div className=" text-white p-6 w-full bg-purple-950 mt-6">
      <div className=" max-w-6xl mx-auto grid md:grid-cols-4 gap-4 w-full">
        <div className=" bg-purple-700 p-4 flex flex-col items-center">
          <img src="https://img.icons8.com/ios-filled/50/ffffff/phone.png" alt="Mobile and Desktop Apps" />
          <h3 className="text-lg font-semibold mt-4">Mobile and Desktop Apps</h3>
          <p className="text-center mt-2">
            Our company delivers various types of mobile and desktop software as well as custom solutions for businesses.
          </p>
        </div>
        <div className="p-4 bg-purple-800 flex flex-col items-center">
          <img src="https://img.icons8.com/ios-filled/50/ffffff/star.png" alt="Corporate Solutions" />
          <h3 className="text-lg font-semibold mt-4">Corporate Solutions</h3>
          <p className="text-center mt-2">
            Need specific software for your company? Our team is ready to design and develop it for you!
          </p>
        </div>
        <div className="p-4 bg-purple-900 flex flex-col items-center">
          <img src="https://img.icons8.com/ios-filled/50/ffffff/headset.png" alt="24/7 Support" />
          <h3 className="text-lg font-semibold mt-4">24/7 Support</h3>
          <p className="text-center mt-2">
            We also provide full 24/7 client support. In case you have a problem with our apps, feel free to contact us anytime.
          </p>
        </div>
        <div className="p-4 flex flex-col items-center bg-gradient-to-r from-pink-500 to-yellow-500 rounded-md">
          <h3 className="text-sm font-semibold">Reliable Apps Since 2005</h3>
          <p className="text-center mt-2 text-lg font-bold">We Can Design an App of Any Complexity for Your Company</p>
          <button className="mt-4 bg-white text-purple-900 font-semibold py-2 px-4 rounded-full hover:bg-gray-100 transition duration-300">
            Get a Quote
          </button>
        </div>
      </div>
      </div>
  )
}

export default OtherBottom