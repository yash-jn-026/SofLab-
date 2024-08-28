import React from "react";
import imageBg from "../assets/image.png";

function AboutUs() {
  return (
    <>
    <div className="mb-28">
        <div className="text-black text-center  justify-center items-center py-16 mr-12 ">
          <h1 className="text-3xl font-bold justify-center text-center pb-8">A few words about us</h1>
          <p className="flex flex-col text-gray-600 mb-12 leading-relaxed text-lg  justify-center items-center">
            SoftLabs Innovative Solutions is a cutting-edge software development and 
            design agency that specializes in creating <br /> innovative and user-friendly 
            solutions for businesses of all sizes. We work closely with clients tobr <br />
            develop high-quality, responsive, and user-focused products and services.
          </p>
        </div>


        <div className="flex flex-row justify-center space-x-4 items-end">
        <div className=" flex flex-col right">

        <div className=" mb-8 lg:mb-0">
          <img
            src={imageBg} // Replace with your image source
            alt="Softlabs Innovative Solutions"
            className="rounded-md shadow-lg w-96 h-full"
          />
        </div>

        </div>
            <div className="flex flex-col bar w-1/2 ml-12  space-y-4 ">       
           
           <div className="flex flex-row">
           <div className="">
              <span>UI Design</span>
              <span>    </span>
              </div>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-purple-600 h-2 rounded-full"
                style={{ width: "75%" }}
              ></div>
           </div>


           <div className="flex flex-row">
           <div className="">
              <span>Software devlopemnt</span>
              <span className=""></span>
              </div>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-purple-600 h-2 rounded-full"
                style={{ width: "50%" }}
              ></div>

           </div>

           <button className="bg-gradient-to-r from-pink-500 to-yellow-500 text-white py-2 px-6 rounded-full text-lg w-1/3 hover:opacity-90 transition-opacity">
            Learn More
          </button>
           
           
            </div>
          </div>
          </div>
           

     </>
      
  );
}

export default AboutUs;







