import React from "react";
import withDrag from "../../withDrag";
import { PiArrowLeftLight, PiArrowRightLight } from "react-icons/pi";
import { newArrivals as cards } from "../../data";
import CarouselNewArrivals from "./CarouselNewArrivals";

const NewArrivals = ({
  cardRef,
  positionX,
  carouselRef,
  handleDrag,
  nextCard,
  prevCard,
  carouselWidth,
}) => {
  return (
    <div className=" font-roboto my-24 w-full">
      <div className="flex flex-col h-[700px] sm:h-[610px] md:h-[600px] gap-y-10 w-[90%] lg:w-[80%] xl:w-[90%] 2xl:w-[70%] mx-auto">
        <div
          className="flex flex-col gap-y-2 md:flex-row md:justify-between 
        md:items-center"
        >
          <h1 className="text-3xl md:text-4xl font-semibold w-full">
            New Arrivals.{" "}
            <span className="text-slate-400">REY backpacks & bags</span>
          </h1>
          <div className="flex gap-x-2 self-end">
            <button
              className="rounded-full p-1 hover:border-slate-400 hover:border-[1px]"
              onClick={prevCard}
            >
              <PiArrowLeftLight />
            </button>
            <button
              className="rounded-full p-1 hover:border-slate-400 hover:border-[1px]"
              onClick={nextCard}
            >
              <PiArrowRightLight />
            </button>
          </div>
        </div>
        {/* cards */}

        <div
          className="outer-carousel w-full h-full overflow-hidden pe-6"
          ref={carouselRef}
        >
          <CarouselNewArrivals
            positionX={positionX}
            carouselWidth={carouselWidth}
            onDragEnd={handleDrag}
            ref={cardRef}
          />
        </div>
      </div>
    </div>
  );
};

export default withDrag(NewArrivals, cards);
