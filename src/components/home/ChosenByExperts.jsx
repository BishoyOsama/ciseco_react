import { PiArrowLeftLight, PiArrowRightLight } from "react-icons/pi";
import CarouselChosenByExperts from "./CarouselChosenByExperts";
import { chosenByExpertsData as cards } from "../../data";
import withDrag from "../../withDrag";

const ChosenByExperts = ({
  cardRef,
  positionX,
  carouselRef,
  handleDrag,
  cards,
  nextCard,
  prevCard,
  carouselWidth,
}) => {
  return (
    <div className=" font-roboto my-24 w-full">
      <div className="flex flex-col w-full h-[520px] sm:h-[700px] md:h-[750px] gap-y-10">
        <div
          className="flex flex-col gap-y-2 md:flex-row md:justify-between 
        md:items-center w-[90%] lg:w-[80%] xl:w-[70%] mx-auto"
        >
          <h1 className="text-3xl md:text-4xl font-semibold w-full">
            Chosen by our experts
          </h1>
          <div className="flex gap-x-2 self-end">
            <button className="rounded-full p-1 hover:border-slate-400 hover:border-[1px]" onClick={prevCard}>
              <PiArrowLeftLight/>
            </button>
            <button className="rounded-full p-1 hover:border-slate-400 hover:border-[1px]" onClick={nextCard}>
              <PiArrowRightLight />
            </button>
          </div>
        </div>
        {/* cards */}

        <div
          className="outer-carousel mx-auto w-[90%] lg:w-[80%] xl:w-[70%] h-full overflow-hidden pe-5"
          ref={carouselRef}
        >
          <CarouselChosenByExperts
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

export default withDrag(ChosenByExperts, cards);
