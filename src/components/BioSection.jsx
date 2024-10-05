import React from 'react';
import { FaTwitter, FaEnvelope, FaSpotify, FaYoutube, FaInstagram } from 'react-icons/fa';
import { motion } from 'framer-motion';

const BioSection = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <div className="relative w-full h-screen bg-black">
        <img
          src="/billy-brooks.jpg"
          alt="Billy Brooks"
          className="absolute inset-0 w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center text-white px-4">
          <motion.h1 className="text-5xl md:text-7xl font-bold" {...fadeIn}>
            Billy Brooks Music
          </motion.h1>
          <motion.p 
            className="mt-6 text-xl md:text-3xl font-bold"
            {...fadeIn}
            transition={{ delay: 0.2 }}
          >
            Honoring a Legacy Through Music and Love
          </motion.p>
        </div>
      </div>

      {/* Bio Content Section */}
      <div className="container mx-auto py-16 px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Side: Bio Text */}
          <motion.div {...fadeIn}>
            <h2 className="text-4xl font-bold mb-6">A Legacy of Passion and Strength</h2>
            <p className="text-lg mb-4">
              Hello and welcome! I'm glad you are here. My legal name is Jeffery Theodore Medina. My father was Theodore Brooks Medina. His close friends called him Billy. So, "Billy Brooks Music" is dedicated to him, his memory and life. He grew up in the 40's and 50's in rural central California...
            </p>
            <p className="text-lg mb-4">
              I've spent most of my career in aviation and aerospace. When I raised my family, I put music aside for some time...
            </p>
            <p className="text-lg mb-4">
              Then in October 2023, I was diagnosed with an aggressive form of prostate cancer. My immediate thought… damn, really? Isn't that the cat's meow?...
            </p>
            <p className="text-lg mb-4">
              Hopefully, we will return to God, pray to heal our wounds and let the restoration to sanity begin. Carpe Diem et vade in pace.
            </p>
          </motion.div>

          {/* Right Side: Image */}
          <motion.div {...fadeIn} transition={{ delay: 0.2 }}>
            <img
              src="/billy-young.jpg"
              alt="Young Billy Brooks"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </motion.div>
        </div>
      </div>

      {/* Music Section */}
      <motion.div 
        className="bg-gray-100 py-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-4xl font-bold mb-8 text-center">Featured Music</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['Song 1', 'Song 2', 'Song 3'].map((song, index) => (
              <motion.div 
                key={song}
                className="bg-white p-6 rounded-lg shadow-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <h3 className="text-xl font-semibold mb-2">{song}</h3>
                <p className="text-gray-600 mb-4">Album: Life's Journey</p>
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">
                  Listen Now
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Upcoming Events Section */}
      <motion.div 
        className="container mx-auto py-16 px-4 md:px-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-bold mb-8 text-center">Upcoming Events</h2>
        <div className="space-y-6">
          {['Event 1', 'Event 2', 'Event 3'].map((event, index) => (
            <motion.div 
              key={event}
              className="bg-gray-50 p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <h3 className="text-xl font-semibold mb-2">{event}</h3>
              <p className="text-gray-600">Date: TBA</p>
              <p className="text-gray-600">Venue: TBA</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Newsletter Signup */}
      <motion.div 
        className="bg-gray-900 text-white py-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Connected</h2>
          <p className="mb-6">Sign up for our newsletter to receive updates on new music and events.</p>
          <form className="max-w-md mx-auto">
            <div className="flex">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-grow px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
              />
              <button 
                type="submit" 
                className="bg-blue-500 text-white px-6 py-2 rounded-r-md hover:bg-blue-600 transition duration-300"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </motion.div>

      {/* Footer Section */}
      <div className="bg-gray-900 text-white py-8 text-center">
        <div className="flex justify-center space-x-6 mb-4">
          <a href="https://twitter.com/RocknRoller1964" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-3xl hover:text-gray-400 transition duration-300" />
          </a>
          <a href="mailto:BillyBrooksMusic@pm.me">
            <FaEnvelope className="text-3xl hover:text-gray-400 transition duration-300" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FaSpotify className="text-3xl hover:text-gray-400 transition duration-300" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FaYoutube className="text-3xl hover:text-gray-400 transition duration-300" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-3xl hover:text-gray-400 transition duration-300" />
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