import { PiArrowRightLight } from "react-icons/pi";
import { PiArrowLeftLight } from "react-icons/pi";
import { IoSearchOutline } from "react-icons/io5";
import data from "../../data";
import { useEffect, useState } from "react";

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [animation, setAnimation] = useState(false);
  const [called, setCalled] = useState(false);

  const handleHeroChanges = () => {
    if (!called) {
      if (currentImage === data.heroImage.length - 1) {
        setTimeout(() => {
          setAnimation(true);
          setCurrentImage(0);
        }, 3000);
      } else {
        setTimeout(() => {
          setAnimation(true);
          setCurrentImage(currentImage + 1);
        }, 3000);
      }
    }
  };

  setTimeout(() => {
    setAnimation(false);
  }, 600);

  const handlePerviousHeroPreview = () => {
    setCalled(true);
    const isFirstHero = currentImage === 0;
    const newHeroIndex = isFirstHero
      ? data.heroImage.length - 1
      : currentImage - 1;
    setAnimation(true);
    setCurrentImage(newHeroIndex);
    setCalled(false);
    /* setTimeout(() => {
    }, 3000); */
  };

  const handleNextHeroPreview = () => {
    setCalled(true);
    const isLastHero = currentImage === data.heroImage.length - 1;
    const newHeroIndex = isLastHero ? 0 : currentImage + 1;
    setAnimation(true);
    setCurrentImage(newHeroIndex);
    setCalled(false);
    /* setTimeout(() => {
    }, 3000); */
  };

  const handleDock = (index) => {
    setCalled(true);
    setAnimation(true);
    setCurrentImage(index);
    setCalled(false);
    /* setTimeout(() => {
    }, 3000); */
  };

  useEffect(() => {
    handleHeroChanges();
  }, [currentImage]);

  return (
    <div
      className={`w-screen h-max bg-hero bg-circles bg-center bg-contain relative flex overflow-hidden`}
    >
      <div className="w-full absolute flex justify-between top-[75%] lg:top-1/2 px-1 lg:px-4 text-2xl z-30">
        <button
          className="rounded-full p-1 hover:border-slate-400 hover:border-[1px] "
          onClick={handlePerviousHeroPreview}
        >
          <PiArrowLeftLight />
        </button>
        <button
          className="rounded-full p-1 hover:border-slate-400 hover:border-[1px] "
          onClick={handleNextHeroPreview}
        >
          <PiArrowRightLight />
        </button>
      </div>

      <div className="w-full px-0 lg:px-[4rem] xl:px-[16rem] mx-auto h-full relative pt-16 sm:py-20 lg:py-44 flex flex-col gap-y-16 lg:block items-center">
        <div
          className={`w-full space-y-8 px-2 min-[320]:px-[4rem] lg:max-w-3xl h-full font-roboto lg:relative z-[20]  ${
            animation ? "leftExclusive leftExclusiveContent" : null
          }  `}
        >
          <p className="text-slate-700 text-lg">
            In this season, find the best 🔥
          </p>
          <h1 className="text-slate-800 font-bold w-[90%] lg:w-[60%] xl:w-full text-3xl leading-8 lg:text-[3rem] xl:text-[4rem] min-[1400px]:text-[5rem] lg:leading-[3rem] xl:leading-[5rem]">
            Exclusive collection for everyone
          </h1>

          <button
            className={`flex items-center px-5 py-2 lg:px-9 lg:py-3 bg-black rounded-full text-sm lg:text-xl font-thin text-white gap-x-2 ${
              animation ? "leftExclusiveButton" : null
            } `}
          >
            Explore now{" "}
            <span className="text-lg">
              {" "}
              <IoSearchOutline />{" "}
            </span>
          </button>
        </div>
        <div className="h-full lg:absolute right-20 bottom-0 top-0 max-w-xl xl:max-w-3xl 2xl:max-w-4xl">
          {data.heroImage.map((imageSrc, index) => (
            <img
              key={index}
              src={imageSrc}
              alt="Exclusive collection for everyone"
              className={`w-full object-contain object-right-bottom h-full ${
                currentImage === index ? "animate-heroImage" : "hidden"
              }`}
            />
          ))}
        </div>
      </div>

      <div className="absolute bottom-1 w-fit left-1/2 flex justify-center -translate-x-1/2">
        {data.heroImage.map((imageDock, index) => (
          <div
            className="py-1.5 cursor-pointer px-2 relative"
            key={index}
            onClick={() => handleDock(index)}
          >
            <div className="relative w-20 h-1 bg-white rounded-lg shadow-lg">
              <div
                className={`${
                  currentImage === index ? "dock_animation" : null
                }  absolute inset-0 rounded-md`}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
