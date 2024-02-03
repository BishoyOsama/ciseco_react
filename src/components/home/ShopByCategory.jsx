import { PiArrowLeftLight, PiArrowRightLight } from "react-icons/pi";
import CarouselShopByCategory from "./CarouselShopByCategory";
import withDrag from "../../withDrag";

const ShopByCategory = ({
  cardRef,
  positionX,
  carouselRef,
  cardIndex,
  handleDrag,
  nextCard,
  prevCard,
  carouselWidth,
}) => {
  return (
    <div className=" font-roboto my-24 w-full">
      <div className="flex flex-col h-[450px] sm:h-[610px] md:h-[450px] gap-y-10 w-[90%] lg:w-[80%] xl:w-[70%] mx-auto">
        <div
          className="flex flex-col gap-y-2 md:flex-row md:justify-between 
        md:items-center"
        >
          <h1 className="text-3xl md:text-4xl font-semibold w-full">
            Shop by department
          </h1>
          <div className="flex gap-x-2 self-end">
            <button className="rounded-full p-1 hover:border-slate-400 hover:border-[1px]">
              <PiArrowLeftLight onClick={prevCard} />
            </button>
            <button className="rounded-full p-1 hover:border-slate-400 hover:border-[1px]">
              <PiArrowRightLight onClick={nextCard} />
            </button>
          </div>
        </div>
        {/* cards */}

        <div className="outer-carousel w-full h-full overflow-hidden pe-6" ref={carouselRef}>
          <CarouselShopByCategory
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

export default withDrag(ShopByCategory);
