import React from "react";
import HerosectionBottom from "./herosectionBottom";

function HeroSectionLeft() {
  return (
    <>
    <div className="flex flex-col pt-16 mt-16 ">
      <div className="relative flex items-center justify-start  w-fit h-fit p-8">
        <div className="icons flex flex-col w-1/2 space-y-8  ">
          <ul>
            <li>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://img.icons8.com/ios-filled/50/000000/facebook-new.png "
                  className="w-4 opacity-50"
                  alt="Facebook"
                />
              </a>
            </li>
            <li>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://img.icons8.com/ios-filled/50/000000/twitter.png"
                  className="w-4 opacity-50"
                  alt="Twitter"
                />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://img.icons8.com/ios-filled/50/000000/instagram-new.png"
                  className="w-4 opacity-50"
                  alt="Instagram"
                />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://img.icons8.com/ios-filled/50/000000/linkedin.png"
                  className="w-4 opacity-50"
                  alt="LinkedIn"
                />
              </a>
            </li>
            <li>
              <a
                href="https://www.github.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://img.icons8.com/ios-filled/50/000000/github.png"
                  className="w-4 opacity-50"
                  alt="GitHub"
                />
              </a>
            </li>
          </ul>
        </div>

        <div className="text-left">
          <h1 className="text-white text-5xl font-bold mb-6">
            Providing Reliable Software
          </h1>
          <button className="bg-gradient-to-r from-pink-500 to-yellow-500 text-white py-2 px-6 rounded-full text-lg hover:opacity-90 transition-opacity">
            Learn More
          </button>
        </div>
      </div>

      
    </div>
    <HerosectionBottom/>
    
    </>
  );
}

export default HeroSectionLeft;
