import { motion } from "framer-motion";
import { newArrivals as cards } from "../../data";
import { Link } from "react-router-dom";
import { forwardRef, useState, useMemo } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa6";
import { IoBagHandle } from "react-icons/io5";
import { BsArrowsFullscreen } from "react-icons/bs";
import RadioGroup from "./RadioGroup";
import { IoMdStar } from "react-icons/io";

const CarouselNewArrivals = ({ onDragEnd, carouselWidth, positionX }, ref) => {
  const sizes = ["xs", "s", "m", "l", "xl"];
  const USDollar = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  const [colorCards, setColorCards] = useState(cards);

  const handleColorChange = useMemo(() => {
    return (cardId, colorLabel, loved) => {
      setColorCards((prevCards) => {
        return prevCards.map((card) => {
          if (card.id === cardId) {
            return { ...card, selectedColor: colorLabel, loved: loved };
          }
          return card;
        });
      });
    };
  }, []);

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
      {colorCards.map((item, index) => (
        <motion.li
          key={index}
          className="relative w-10/12 sm:w-1/2 md:w-1/3 xl:w-1/4 shrink-0"
          ref={ref}
        >
          <Link
            className="w-full absolute h-full"
            onMouseDown={(e) => e.preventDefault()}
            draggable="true"
          >
            <div
              className={`flex-1 relative group w-full rounded-2xl overflow-hidden group aspect-[9.5/10] bg-slate-100`}
            >
              <img
                src={item.image}
                alt="product"
                className="w-full object-contain"
              />
              <div className="absolute inset-0  p-2 ">
                <div className="flex justify-between h-fit">
                  {item.flag && (
                    <p className="rounded-full flex items-center justify-center px-2.5 py-1.5 text-xs bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300">
                      {item.flagIcon}{" "}
                      <span className="ml-1 leading-none">{item.flag}</span>
                    </p>
                  )}
                  <button
                    className="bg-white rounded-full p-2 absolute right-2 "
                    onClick={() =>
                      handleColorChange(
                        item.id,
                        item.selectedColor,
                        !item.loved
                      )
                    }
                  >
                    {item.loved ? (
                      <FaHeart className="text-red-600" />
                    ) : (
                      <FaRegHeart />
                    )}
                  </button>
                </div>

                <div className="flex items-center w-full px-2 sm:px-0 justify-center absolute gap-x-2 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all bottom-0 group-hover:bottom-5 left-1/2 -translate-x-1/2">
                  {item.clothe &&
                    sizes.map((size, index) => (
                      <div
                        key={index}
                        className="bg-white w-10 h-10 text-sm flex hover:text-white hover:bg-slate-900 transition-colors font-bold text-slate-700 uppercase items-center justify-center rounded-lg"
                      >
                        <p>{size}</p>
                      </div>
                    ))}

                  {!item.clothe && (
                    <div className="w-full px-2 flex justify-center gap-x-3 items-center">
                      <button
                        className="w-1/2 flex items-baseline gap-x-1 justify-center rounded-full 
                      transition-colors text-xs py-2 px-4 disabled:bg-opacity-90 bg-slate-900 
                      dark:bg-slate-100 hover:bg-slate-800 text-slate-50 dark:text-slate-800 
                      shadow-xl focus:outline-none focus:ring-4 focus:ring-offset-1 focus:ring-blue-700 dark:focus:ring-offset-0"
                      >
                        <IoBagHandle /> <span>Add to bag</span>{" "}
                      </button>
                      <button
                        className="w-1/2 flex gap-x-1 items-baseline justify-center rounded-full 
                      transition-colors text-xs py-2 px-4 bg-white text-slate-700 dark:bg-slate-900 dark:text-slate-300 hover:bg-gray-100 dark:hover:bg-slate-800 ml-1.5  
                      hover:text-slate-900  shadow-lg focus:outline-none 
                      focus:ring-2 focus:ring-offset-2 focus:ring-red-600 dark:focus:ring-offset-0"
                      >
                        <BsArrowsFullscreen className="text-[0.7rem]" />{" "}
                        <span>Quick view</span>{" "}
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="flex flex-col mt-5">
              {(item.clothe || item.bags) && (
                <div className="flex ml-1 mb-2">
                  {item.colors.map((color, idx) => (
                    <div key={idx}>
                      <label htmlFor={item.id} className="w-full h-fit">
                        <input
                          className="hidden"
                          type="radio"
                          name={item.productName}
                          id={item.id}
                          value={color.label}
                          checked={item.selectedColor === color.label}
                          onChange={() =>
                            handleColorChange(item.id, color.label, item.loved)
                          }
                        />
                        <div
                          onClick={() =>
                            handleColorChange(item.id, color.label, item.loved)
                          }
                          className={`radio-dock w-7 h-3 ${
                            idx > 0 ? "ml-3" : null
                          } aspect-video rounded-xl overflow-hidden ring-black ${
                            item.selectedColor === color.label ? "ring-1" : null
                          } ring-offset-2`}
                        >
                          <img
                            src={color.src}
                            alt=""
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </label>
                    </div>
                  ))}
                </div>
              )}
              {!item.clothe && !item.bags && (
                <div className="flex ml-1 mb-2">
                  {item.colors.map((color, idx) => (
                    <div key={idx}>
                      <label htmlFor={item.id} className="w-full h-fit">
                        <input
                          className="hidden"
                          type="radio"
                          name={item.productName}
                          id={item.id}
                          value={color.label}
                          checked={item.selectedColor === color.label}
                          onChange={() =>
                            handleColorChange(item.id, color.label, item.loved)
                          }
                        />
                        <div
                          onClick={() =>
                            handleColorChange(item.id, color.label, item.loved)
                          }
                          className={`radio-dock w-4 h-4 ${
                            idx > 0 ? "ml-3" : null
                          } aspect-video rounded-full overflow-hidden ${
                            color.src
                          } ${`ring-${color.src.slice(3)}`} ${
                            item.selectedColor === color.label ? "ring-1" : null
                          } ring-offset-2`}
                        ></div>
                      </label>
                    </div>
                  ))}
                </div>
              )}
              <div className="flex flex-col gap-y-1">
                <h3 className="text-base font-semibold ">{item.productName}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 ">
                  {item.caption}
                </p>
                <div className="flex justify-between">
                  <p
                    className="text-green-500 !leading-none h-fit flex items-center border-2 border-green-500 rounded-lg py-1 
                px-2 md:py-1.5 md:px-2.5 text-sm font-medium"
                  >
                    {USDollar.format(item.price)}
                  </p>

                  <div className="flex items-center">
                    <span className="text-[#fb923c]">
                      <IoMdStar />
                    </span>
                    <span className="text-sm ml-1 gap-x-1 text-slate-500 dark:text-slate-400 flex">
                      <p>{item.reviews.rate}</p>
                      <p>({item.reviews.count} reviews)</p>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </motion.li>
      ))}
    </motion.ul>
  );
};

export default forwardRef(CarouselNewArrivals);
