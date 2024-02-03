import { PiArrowLeftLight, PiArrowRightLight } from "react-icons/pi";
import Card from "../Card";
import { useEffect, useRef, useState } from "react";
import { cardData as cards } from "../../data";

const DiscoverMore = () => {
  const [documentWidth, setDocumentWidth] = useState(window.innerWidth);
  const cardRef = useRef(null);
  const [positionX, setPositionX] = useState(0);
  const carouselRef = useRef(null);
  const [cardIndex, setCardIndex] = useState(0);
  const [carouselWidth, setCarouselWidth] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);

  useEffect(() => {
    const listenResize = () => {
      setDocumentWidth(window.innerWidth);
    };
    window.addEventListener("resize", listenResize);

    if (cardRef.current) {
      setCardWidth(cardRef.current.getBoundingClientRect().width);
    }
    return () => window.removeEventListener("resize", listenResize);
  }, [documentWidth]);

  useEffect(() => {
    setCarouselWidth(
      carouselRef.current.scrollWidth - carouselRef.current.offsetWidth
    );
  }, []);

  const handleDrag = (_, info) => {
    if (info.velocity.x < 0 && cardIndex < cards.length - 1) {
      setCardIndex((prev) => prev + 1);
      setPositionX(-(cardWidth * cardIndex) - 20 * cardIndex);
    } else if (
      info.offset.x > cardWidth / 2 &&
      info.velocity.x > 0 &&
      cardIndex > 0
    ) {
      setCardIndex((prev) => prev - 1);
      setPositionX(-(cardWidth * cardIndex) - 20 * cardIndex);
    } else if (info.velocity.x < 0 && cardIndex === cards.length - 1) {
      // moving left and last card
      setCardIndex(0);
      setPositionX(0);
    } else if (info.velocity.x > 0 && cardIndex === 0) {
      setCardIndex(cards.length - 1);
      setPositionX(-(cardWidth * cardIndex));
    }
  };

  const nextCard = () => {
    const nextIndex = cardIndex < cards.length - 1 ? cardIndex + 1 : 0;
    setCardIndex(nextIndex);
    setPositionX(-(cardWidth * nextIndex) - 20 * nextIndex);
  };

  const prevCard = () => {
    const prevIndex = cardIndex === 0 ? cards.length - 1 : cardIndex - 1;
    setCardIndex(prevIndex);
    setPositionX(-(cardWidth * prevIndex) - 20 * prevIndex);
  };

  return (
    <div className=" font-roboto my-24">
      <div className="flex flex-col gap-y-10 ">
        <div
          className="flex flex-col gap-y-2 md:flex-row md:justify-between 
        md:items-center w-[90%] lg:w-[80%] xl:w-[70%]  mx-auto"
        >
          <h1 className="text-3xl md:text-4xl font-semibold">
            Discover More.{" "}
            <span className="text-slate-400">
              Good things are waiting for you
            </span>
          </h1>
          <div className="flex gap-x-2 self-end mr-7">
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

        <div className="carousel" ref={carouselRef}>
          <Card
            carouselWidth={carouselWidth}
            onDragEnd={handleDrag}
            ref={cardRef}
            positionX={positionX}
          />
        </div>
      </div>
    </div>
  );
};

export default DiscoverMore;
