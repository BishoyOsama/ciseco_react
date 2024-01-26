import { forwardRef, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { cardData } from "../data";
import { Link } from "react-router-dom";

const Card = ({ onDragEnd, carouselWidth, dragControls, positionX }, ref) => {
  const SPRING_OPTIONS = {
    type: "spring",
    mass: 3,
    stiffness: 400,
    damping: 50,
  };

  return (
    <>
      <motion.ul
        className="inner-carousel cards flex flex-shrink-0 ps-[5%] lg:ps-[10%] xl:ps-[15%] active:cursor-grabbing cursor-grab"
        drag="x"
        dragConstraints={{ right: 0, left: -(carouselWidth + 300) }}
        onDragEnd={onDragEnd}
        dragControls={dragControls}
        animate={{ x: positionX }}
        dragElastic={0.2}
        dragTransition={SPRING_OPTIONS}
      >
        {cardData.map((card, index) => (
          <motion.li
            className={`relative aspect-[16/9] w-[95%] sm:w-[70%] md:w-[65%]
                  lg:w-[50%] xl:w-[40%] 2xl:w-[30%] h-full rounded-xl p-4 sm:p-5 flex flex-shrink-0
                  font-roboto z-10 card-item mr-5`}
            key={index}
            ref={ref}
            style={{ backgroundColor: `${card.bgColor}` }}
          >

              <div className="absolute  sm:left-4 w-fit sm:w-full flex flex-col items-start h-[80%]  z-10">
                <div className="flex flex-col gap-y-1">
                  <p className="text-sm">{card.p}</p>
                  <h3 className="font-semibold text-xl sm:text-2xl">
                    {card.h1}
                    <br />
                    {card.h2}
                  </h3>
                </div>
                <Link to="home" className="absolute bottom-0 text-sm sm:text-[1rem] py-2 px-3 sm:py-3 sm:px-6 bg-white rounded-full">
                  show me all
                </Link>
              </div>
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[40%]">
                <img
                  src={card.image}
                  alt=""
                  className="w-full object-contain mx-auto"
                />
              </div>

          </motion.li>
        ))}
      </motion.ul>
    </>
  );
};

export default forwardRef(Card);
