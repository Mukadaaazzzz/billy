import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Music, Headphones } from 'lucide-react';

const Hero = () => {
  const images = [
    '/hero1.jpg',
    '/hero2.jpg',
    '/hero3.jpg',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 7000); // Increased duration for a slower, more impactful transition
    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image Carousel */}
      <AnimatePresence initial={false}>
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          alt={`Hero ${currentIndex + 1}`}
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 1.5 }}
        />
      </AnimatePresence>

      {/* Overlay and Content */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/30 flex flex-col justify-center items-center text-white p-4">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center"
        >
          <h1 className="text-7xl font-bold mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-red-500">
            Billy Brooks
          </h1>
          <h2 className="text-3xl mb-6 text-center font-light tracking-wide">
             Rock & Gospel Artist
          </h2>
        </motion.div>

        <motion.p
          className="text-xl mb-8 max-w-2xl text-center leading-relaxed"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Experience the soul-stirring blend of country rock and gospel that has touched hearts across the nation. 
          Join Billy on a musical journey of faith, hope, and inspiration.
        </motion.p>

        <motion.div
          className="flex space-x-4"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.button
            className="bg-white text-black py-3 px-6 rounded-full font-bold text-lg flex items-center hover:bg-opacity-90 transition duration-300"
            whileHover={{ scale: 1.05, boxShadow: "0px 0px 8px rgb(255,255,255)" }}
            whileTap={{ scale: 0.95 }}
          >
            <Music className="mr-2" />
            Explore Music
          </motion.button>
          <motion.button
            className="bg-transparent border-2 border-white text-white py-3 px-6 rounded-full font-bold text-lg flex items-center hover:bg-white hover:text-black transition duration-300"
            whileHover={{ scale: 1.05, boxShadow: "0px 0px 8px rgb(255,255,255)" }}
            whileTap={{ scale: 0.95 }}
          >
            <Headphones className="mr-2" />
            Latest Album
          </motion.button>
        </motion.div>
      </div>

      {/* Navigation Arrows */}
      <motion.button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 p-2 rounded-full hover:bg-white/40 transition duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <ChevronLeft className="text-white" size={24} />
      </motion.button>

      <motion.button
        onClick={handleNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 p-2 rounded-full hover:bg-white/40 transition duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <ChevronRight className="text-white" size={24} />
      </motion.button>

      {/* Dots for Navigation */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <motion.button
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? 'bg-white' : 'bg-white/50'
            }`}
            onClick={() => setCurrentIndex(index)}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;