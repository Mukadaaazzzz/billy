import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const TourSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 30,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [timerExpired, setTimerExpired] = useState(false);

  const updateTimer = () => {
    let newTime = { ...timeLeft };
    if (--newTime.seconds < 0) {
      newTime.seconds = 59;
      if (--newTime.minutes < 0) {
        newTime.minutes = 59;
        if (--newTime.hours < 0) {
          newTime.hours = 23;
          if (--newTime.days < 0) {
            newTime.days = 0;
            setTimerExpired(true);
          }
        }
      }
    }
    return newTime;
  };

  useEffect(() => {
    let timer = setInterval(() => {
      if (!timerExpired) {
        setTimeLeft(updateTimer);
      } else {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [timerExpired]);

  const socialIcons = [
    { icon: 'instagram', color: 'bg-gradient-to-r from-purple-500 via-pink-500 to-red-500', link: 'https://instagram.com' },
    { icon: 'facebook', color: 'bg-blue-600', link: 'https://facebook.com' },
    { icon: 'twitter', color: 'bg-blue-400', link: 'https://twitter.com' },
    { icon: 'youtube', color: 'bg-red-600', link: 'https://youtube.com' }
  ];

  return (
    <div className="bg-gray-900 text-white py-20">
      <div className="container mx-auto px-3" style={{ marginTop: '20px' }}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-7 text-center font-serif" >
            The Gospel Journey Continues
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-xl text-gray-300 mb-10 text-center max-w-3xl mx-auto font-sans">
            Prepare your hearts for an unforgettable experience. Billy Brooks is hitting the road to spread the message of hope and love through soul-stirring gospel music.
          </p>
        </motion.div>

        <div className="text-center mb-16">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-pink-600 text-white px-8 py-3 rounded-full font-bold text-lg shadow-lg hover:bg-pink-700 transition duration-300 font-sans"
          >
            Get Tour Updates
          </motion.button>
        </div>

        <div className="text-center mb-16">
          <h3 className="text-2xl font-semibold mb-6 font-sans">
            {timerExpired ? 'Time\'s Up!' : 'Next Announcement In'}
          </h3>
          {!timerExpired && (
            <div className="flex justify-center space-x-4">
              {Object.entries(timeLeft).map(([unit, value]) => (
                <div key={unit} className="bg-pink-600 bg-opacity-10 rounded-lg p-4 min-w-[60px]">
                  <div className="text-3xl font-bold text-pink-500 font-sans">{value.toString().padStart(2, '0')}</div>
                  <div className="text-sm uppercase text-gray-400 font-sans">{unit}</div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="text-center mb-10">
          <h3 className="text-2xl font-semibold mb-6 font-sans">Stay Connected</h3>
          <div className="flex justify-center space-x-3">
            {socialIcons.map(({ icon, color, link }) => (
              <motion.a
                key={icon}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5 }}
                className={`${color} p-3 rounded-full text-white`}
              >
                <i className={`fab fa-${icon} text-xl`}></i>
              </motion.a>
            ))}
          </div>
        </div>

        <div className="text-center text-gray-400 italic font-sans">
          <p>"Music is the universal language of mankind." - Henry Wadsworth Longfellow</p>
        </div>
      </div>
    </div>
  );
};

export default TourSection;