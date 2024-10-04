import React from 'react';
import { FaTwitter, FaEnvelope } from 'react-icons/fa';

const BioSection = () => {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <div className="relative w-full h-screen bg-black">
        <img
          src="/billy-brooks.jpg" // Update the path to Billy Brooks image
          alt="Billy Brooks"
          className="absolute inset-0 w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-bold">Billy Brooks Music</h1>
          <p className="mt-6 text-xl md:text-3xl font-light">
            Honoring a Legacy Through Music and Love
          </p>
        </div>
      </div>

      {/* Bio Content Section */}
      <div className="container mx-auto py-16 px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Side: Bio Text */}
          <div>
            <h2 className="text-4xl font-bold mb-6">A Legacy of Passion and Strength</h2>
            <p className="text-lg mb-4">
              Hello and welcome! I’m glad you are here. My legal name is Jeffery Theodore Medina. My father was Theodore Brooks Medina. His close friends called him Billy. So, “Billy Brooks Music” is dedicated to him, his memory and life. He grew up in the 40’s and 50’s in rural central California...
            </p>
            <p className="text-lg mb-4">
              I’ve spent most of my career in aviation and aerospace. When I raised my family, I put music aside for some time...
            </p>
            <p className="text-lg mb-4">
              Then in October 2023, I was diagnosed with an aggressive form of prostate cancer. My immediate thought… damn, really? Isn’t that the cat’s meow?...
            </p>
            <p className="text-lg mb-4">
              Hopefully, we will return to God, pray to heal our wounds and let the restoration to sanity begin. Carpe Diem et vade in pace.
            </p>
          </div>

          {/* Right Side: Image */}
          <div>
            <img
              src="/billy-young.jpg" // Update the path to the image of Billy
              alt="Young Billy Brooks"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="bg-gray-900 text-white py-8 text-center">
        <div className="flex justify-center space-x-6 mb-4">
          <a href="https://twitter.com/RocknRoller1964" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-3xl hover:text-gray-400" />
          </a>
          <a href="mailto:BillyBrooksMusic@pm.me">
            <FaEnvelope className="text-3xl hover:text-gray-400" />
          </a>
        </div>
        <p className="text-sm">
          © {new Date().getFullYear()} Billy Brooks Music. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default BioSection;
