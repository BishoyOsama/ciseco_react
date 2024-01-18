import { PiArrowLeftLight, PiArrowRightLight } from "react-icons/pi";
import Card from "../Card";
import sliding from "../../configuration/sliding";
import { useEffect } from "react";

const DiscoverMore = () => {
  useEffect(() => {
    sliding();
  }, []);
  return (
    <div className="w-full font-roboto mt-24">
      <div className="flex flex-col gap-y-10">
        <div className="flex gap-x-[25rem] items-center ps-[15%]">
          <h1 className="text-4xl font-semibold">
            Discover More.{" "}
            <span className="text-slate-400">
              Good things are waiting for you
            </span>
          </h1>
          <div className="flex gap-x-2">
            <button className="rounded-full p-1 hover:border-slate-400 hover:border-[1px] ">
              <PiArrowLeftLight />
            </button>
            <button className="rounded-full p-1 hover:border-slate-400 hover:border-[1px] ">
              <PiArrowRightLight />
            </button>
          </div>
        </div>
        {/* cards */}

        <div className="w-full flex flex-shrink-0 gap-x-4 overflow-hidden cards ps-[15%] pe-48 will-change-transform touch-pan-y">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        
        </div>
      </div>
    </div>
  );
};

export default DiscoverMore;
