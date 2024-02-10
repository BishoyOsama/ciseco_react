import { motion } from "framer-motion";
import { chosenByExpertsData } from "../../data";
import { Link } from "react-router-dom";
import { GoArrowUpRight } from "react-icons/go";
import { IoMdStar } from "react-icons/io";
import { forwardRef } from "react";

const CarouselChosenByExperts = (
  { onDragEnd, carouselWidth, positionX },
  ref
) => {
  const USDollar = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  const SPRING_OPTIONS = {
    type: "spring",
    mass: 1,
    stiffness: 50,
    damping: 10,
  };
  return (
    <motion.ul
      className="innerCarousel w-full sm:w-[95%] h-full flex sm:flex-shrink-0 space-x-7"
      drag="x"
      dragConstraints={{ right: 0, left: -carouselWidth }}
      onDragEnd={onDragEnd}
      animate={{ x: positionX }}
      dragTransition={SPRING_OPTIONS}
    >
      {chosenByExpertsData.map((item, index) => (
        <motion.li
          key={index}
          className="w-full sm:w-3/5 md:w-1/2 xl:w-1/3 relative shrink-0"
          ref={ref}
        >
          <Link
            className="w-full absolute h-full"
            onMouseDown={(e) => e.preventDefault()}
            draggable="true"
          >
            <div className="w-full flex flex-col gap-y-3">
              <div
                className={`bg-slate-100 flex-1 relative w-full rounded-2xl overflow-hidden group`}
              >
                <div className="w-[70%] sm:w-[80%] mx-auto h-full flex justify-center">
                  <img
                    src={item.images.mainImage}
                    alt=""
                    className="object-cover w-full h-full rounded-2xl"
                  />
                </div>
              </div>
              <div className="grid grid-cols-3 gap-x-3">
                {item.images.sideImages.map((image, index) => (
                  <div className="rounded-2xl aspect-video" key={index}>
                    <img src={image} alt="" className="object-cover w-full" />
                  </div>
                ))}
              </div>
              <div className="flex justify-between">
                <div className="flex flex-col justify-between">
                  <h3 className="font-bold text-lg">{item.productName}</h3>
                  <div className="text-sm sm:text-[1rem] mt-3 flex items-center text-slate-500 dark:text-slate-400">
                    {item.color && (
                      <p className="border-r-2 pr-2 py-0">{item.color}</p>
                    )}
                    {item.AvailableSizes && (
                      <p className="border-r-2 pr-2 py-0">
                        {item.AvailableSizes} Available Sizes
                      </p>
                    )}
                    <p className="flex items-center gap-x-1 pl-2">
                      <span className="text-[#fb923c]">
                        <IoMdStar />{" "}
                      </span>{" "}
                      4.9 (269 reviews)
                    </p>
                  </div>
                </div>
                <div className="">
                  <div
                    className="flex items-center border-2 border-green-500 rounded-lg py-1 
                px-2 md:py-1.5 md:px-2.5 text-sm font-medium"
                  >
                    <span className="text-green-500 !leading-none">
                      {USDollar.format(item.price)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </motion.li>
      ))}

      <motion.li className="w-full sm:w-3/5 md:w-1/2 xl:w-1/3 relative shrink-0">
        <Link onMouseDown={(e) => e.preventDefault()}>
          <div
            className={`flex-1 flex justify-center items-center relative w-full rounded-2xl overflow-hidden group aspect-square bg-slate-100`}
          >
            <div className="w-full mx-auto h-full p-4 flex flex-col items-center justify-center">
              <div className="flex items-center gap-x-1">
                <p className="text-sm sm:text-lg font-semibold ">
                  More collections
                </p>
                <GoArrowUpRight />
              </div>
              <span className="text-sm mt-1 text-slate-800">Show me more</span>
            </div>
          </div>
        </Link>
      </motion.li>
    </motion.ul>
  );
};

export default forwardRef(CarouselChosenByExperts);
