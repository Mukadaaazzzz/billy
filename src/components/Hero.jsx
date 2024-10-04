import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Box, Typography, IconButton } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

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
    }, 5000);
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
    <Box
      sx={{
        position: 'relative',
        height: '100vh',
        width: '100%',
        overflow: 'hidden',
        backgroundColor: '#000',
      }}
    >
      <AnimatePresence initial={false}>
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
      </AnimatePresence>

      {/* Overlay and Content */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'white',
          textAlign: 'center',
          padding: { xs: '1rem', md: '3rem' },
        }}
      >
        {/* Hero Title */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <Typography
            variant="h1"
            sx={{
              fontWeight: 'bold',
              fontSize: { xs: '3rem', sm: '4rem', md: '5rem' },
              textShadow: '3px 3px 15px rgba(0, 0, 0, 0.8)',
              fontFamily: "'Playfair Display', serif",
            }}
          >
            Billy Brooks
          </Typography>
        </motion.div>

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <Typography
            variant="h2"
            sx={{
              fontWeight: '300',
              fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' },
              marginTop: { xs: '1.5rem', md: '2.5rem' },
              fontFamily: "'Montserrat', sans-serif",
              textShadow: '2px 2px 10px rgba(0, 0, 0, 0.8)',
            }}
          >
            Inspiring Gospel Music Artist
          </Typography>
        </motion.div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
        >
          <Typography
            variant="body1"
            sx={{
              maxWidth: '700px',
              fontSize: { xs: '1rem', md: '1.2rem' },
              marginTop: { xs: '1rem', md: '1.5rem' },
              lineHeight: 1.6,
              fontFamily: "'Montserrat', sans-serif",
              textShadow: '1px 1px 5px rgba(0, 0, 0, 0.7)',
            }}
          >
            Billy Brooks uses the power of music to uplift and transform lives.
            Join him on this spiritual journey of love and praise.
          </Typography>
        </motion.div>

        {/* Call to Action Button */}
        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.96 }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9 }}
          style={{
            padding: '12px 36px',
            fontSize: '1.2rem',
            fontWeight: 'bold',
            color: '#fff',
            backgroundColor: '#e91e63',
            border: 'none',
            borderRadius: '30px',
            cursor: 'pointer',
            boxShadow: '0 6px 12px rgba(0, 0, 0, 0.2)',
            fontFamily: "'Montserrat', sans-serif",
            marginTop: '2rem',
          }}
        >
          Explore the Music
        </motion.button>
      </Box>

      {/* Navigation Arrows */}
      <IconButton
        onClick={handlePrev}
        sx={{
          position: 'absolute',
          top: '40%',
          left: '20px',
          transform: 'translateY(-50%)',
          color: 'white',
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.8)' },
        }}
      >
        <ArrowBackIosNewIcon />
      </IconButton>

      <IconButton
        onClick={handleNext}
        sx={{
          position: 'absolute',
          top: '40%',
          right: '20px',
          transform: 'translateY(-50%)',
          color: 'white',
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.8)' },
        }}
      >
        <ArrowForwardIosIcon />
      </IconButton>

      {/* Dots for Navigation */}
      <Box
        sx={{
          position: 'absolute',
          bottom: '30px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          gap: '8px',
        }}
      >
        {images.map((_, index) => (
          <Box
            key={index}
            sx={{
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              backgroundColor: index === currentIndex ? '#e91e63' : 'rgba(255, 255, 255, 0.6)',
              transition: 'background-color 0.3s ease',
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default Hero;
