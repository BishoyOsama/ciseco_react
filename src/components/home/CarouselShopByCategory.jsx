import { shopByCategoryData } from "../../data";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { GoArrowUpRight } from "react-icons/go";
import { forwardRef } from "react";

const CarouselShopByCategory = (
  { onDragEnd, carouselWidth, positionX },
  ref
) => {
  const SPRING_OPTIONS = {
    type: "spring",
    mass: 1,
    stiffness: 50,
    damping: 10,
  };

  return (
    <motion.ul
      className="innerCarousel w-[95%] h-full flex sm:flex-shrink-0 space-x-7"
      drag="x"
      dragConstraints={{ right: 0, left: -carouselWidth }}
      onDragEnd={onDragEnd}
      animate={{ x: positionX }}
      dragTransition={SPRING_OPTIONS}
    >
      {shopByCategoryData.map((item, index) => (
        <motion.li
          key={index}
          className=" w-[50%] relative sm:w-[55%] md:w-1/3 lg:w-1/4 shrink-0"
          ref={ref}
        >
          <Link
            className="w-full absolute h-full"
            onMouseDown={(e) => e.preventDefault()}
            draggable="true"
          >
            <div
              className={`${item.bgColor} flex-1 relative w-full rounded-2xl overflow-hidden group aspect-square`}
            >
              <div className="pt-14">
                <div className="w-[70%] sm:w-[80%] mx-auto h-full flex justify-center">
                  <img
                    src={item.img}
                    alt={item.kitsType}
                    className="object-cover w-full h-full rounded-2xl"
                  />
                </div>
                <span class="opacity-0 group-hover:opacity-100 absolute inset-0 h-full bg-black bg-opacity-10 transition-opacity"></span>
              </div>
            </div>
            <div className="mt-5 flex-1 text-center">
              <h5 className="text-base sm:text-lg text-neutral-900 dark:text-neutral-100 font-semibold">
                {item.kitsType}
              </h5>
              <p className="block mt-0.5 sm:mt-1.5 text-sm text-neutral-500 dark:text-neutral-400">
                {item.categoriesCount} categories
              </p>
            </div>
          </Link>
        </motion.li>
      ))}

      <motion.li className="w-[50%] relative sm:w-[55%] md:w-1/3 lg:w-1/4 shrink-0">
        <Link onMouseDown={(e) => e.preventDefault()}>
          <div
            className={`flex-1 flex justify-center items-center relative w-full rounded-2xl overflow-hidden group aspect-square bg-slate-100`}
          >
            <div className="w-full mx-auto h-full p-4 flex flex-col items-center justify-center">
              <div className="flex items-center gap-x-1">
                <p className="text-sm sm:text-lg font-semibold ">More collections</p>
                <GoArrowUpRight />
              </div>
              <span className="text-sm mt-1 text-slate-800">Show me more</span>
            </div>
            <span class="opacity-0 group-hover:opacity-100 absolute inset-0 bg-black bg-opacity-10 transition-opacity"></span>
          </div>
        </Link>
      </motion.li>
    </motion.ul>
  );
};

export default forwardRef(CarouselShopByCategory);
