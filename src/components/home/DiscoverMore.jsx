import { PiArrowLeftLight, PiArrowRightLight } from "react-icons/pi";
import Card from "../Card";
import sliding from "../../configuration/sliding";
import { useEffect } from "react";

const DiscoverMore = () => {
  const cards = [1, 2, 3, 4, 5, 6]; //just for ui purposes (will be removed)
  useEffect(() => {
    sliding();
  }, []);
  return (
    <div className=" font-roboto mt-24">
      <div className="flex flex-col gap-y-10 ">
        <div className="flex flex-col gap-y-2 md:flex-row md:justify-between md:items-center w-[90%] lg:w-[80%] xl:w-[70%]  mx-auto">
          <h1 className="text-3xl md:text-4xl font-semibold">
            Discover More.{" "}
            <span className="text-slate-400">
              Good things are waiting for you
            </span>
          </h1>
          <div className="flex gap-x-2 self-end mr-7">
            <button className="rounded-full p-1 hover:border-slate-400 hover:border-[1px] ">
              <PiArrowLeftLight />
            </button>
            <button className="rounded-full p-1 hover:border-slate-400 hover:border-[1px] ">
              <PiArrowRightLight />
            </button>
          </div>
        </div>
        {/* cards */}
 
        <ul
          className="w-full relative flex flex-shrink-0
        flex-nowrap gap-x-2 sm:gap-x-4 m-0 p-0 overflow-hidden cards
        md:pe-48 ps-[5%] xl:ps-[15%] touch-pan-y touch-pan-left "
        >
            <Card />
            <Card />
          {/* {cards.map((card, index) => (
          ))} */}
        </ul>
      </div>
    </div>
  );
};

export default DiscoverMore;
