// Carousel.js
import React from 'react';
import { motion } from 'framer-motion';

const Carousel = () => {
  const cardWidth = 300; // Adjust this value based on your card size
  const numCards = 5; // Adjust this value based on the number of cards in your carousel

  return (
    <div
      style={{
        display: 'flex',
        width: `${cardWidth * numCards}px`, // Set the total width of the carousel
        overflow: 'hidden',
      }}
    >
      {Array.from({ length: numCards }, (_, index) => (
        <motion.div
          key={index}
          style={{
            width: `${cardWidth}px`,
            height: '200px', // Set the height of your card
            backgroundColor: 'lightblue', // Customize the card styling
            margin: '0 10px', // Adjust the margin between cards
          }}
          drag="x" // Enable horizontal drag
          dragConstraints={{ left: -(cardWidth * (numCards - 1)), right: 0 }} // Set drag constraints
        >
          {/* Your card content goes here */}
          Card {index + 1}
        </motion.div>
      ))}
    </div>
  );
};

export default Carousel;
