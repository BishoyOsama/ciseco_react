import { PiArrowLeftLight, PiArrowRightLight } from "react-icons/pi";
import Card from "../Card";
import sliding from "../../configuration/sliding";
import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useDragControls } from "framer-motion";

const DiscoverMore = () => {
  const cards = [1, 2, 3, 4]; //just for ui purposes (will be removed)
  /* useEffect(() => {
    sliding();
  }, []); */
  const cardItem = document.querySelectorAll(".card-item");
  const [documentWidth, setDocumentWidth] = useState(window.innerWidth);
  const cardRef = useRef(null);
  const dragControls = useDragControls();
  const [positionX, setPositionX] = useState(0);
  const innerCarouselRef = useRef(null);
  const [dragged, setDragged] = useState(false);
  const carouselRef = useRef(null);
  const [cardIndex, setCardIndex] = useState(0);
  const [carouselWidth, setCarouselWidth] = useState(0);

  const dragX = useMotionValue(0);

  /* const [drag_buffer, setDrag_buffer] = useState(0); */
  const drag_buffer = 50;

  /* const drag_buffer = cardItem.clientWidth */

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

  const [cardWidth, setCardWidth] = useState(0);

  /* useEffect(() => {
    if (cardRef.current) {
      setCardWidth(cardRef.current.getBoundingClientRect().width);
      
    }
  }, []); */

  /* console.log(window.getComputedStyle(cardRef.current).marginRight) */

  const handleDrag = (_, info) => {
    /* const x = dragX.get(); */
    const point = info.point.x;

    /* const amount = cardWidth / 2; */

    if (
      info.offset.x < -(cardWidth / 2) &&
      info.velocity.x < 0 &&
      cardIndex < cards.length - 1
    ) {
      setCardIndex((prev) => prev + 1);
      setPositionX(-(cardWidth * cardIndex + 50));
    } else if (
      info.offset.x > cardWidth / 2 &&
      info.velocity.x > 0 &&
      cardIndex > 0
    ) {
      setCardIndex((prev) => prev - 1);
      setPositionX(-(cardWidth * cardIndex + 50));
    } else if (info.velocity.x < 0 && cardIndex === cards.length - 1) {
      // moving left and last card
      setCardIndex(0);
      setPositionX(0);
    } else if (info.velocity.x > 0 && cardIndex === 0) {
      setCardIndex(cards.length - 1);
      setPositionX(-(cardWidth * cardIndex + 50));
    }
  };

  const nextCard = () => {
    const nextIndex = cardIndex < cards.length - 1 ? cardIndex + 1 : 0;
    setCardIndex(nextIndex);
    setPositionX(-(cardWidth * nextIndex + 50));
  };

  const prevCard = () => {
    const prevIndex = cardIndex === 0 ? cards.length - 1 : cardIndex - 1;
    setCardIndex(prevIndex);
    setPositionX(-(cardWidth * prevIndex + 50));
  };

  return (
    <div className=" font-roboto mt-24">
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

        {/* <motion.ul
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          animate={{ translateX: `${cardIndex * 100}%` }}
          style={{ x: dragX }}
          onDragEnd={onDragEnd}
          className="w-full relative flex flex-shrink-0  gap-x-2 sm:gap-x-4 m-0 p-0 overflow-hidden cards
        md:pe-48 ps-[5%] xl:ps-[15%] touch-pan-y touch-pan-left cursor-grab active:cursor-grabbing"
        >
          {cards.map((card, index) => (
            <Card ref={ref}/>
          ))}
        </motion.ul> */}

        <div className="carousel" ref={carouselRef}>
          <Card
            carouselWidth={carouselWidth}
            onDragEnd={handleDrag}
            dragX={dragX}
            ref={cardRef}
            dragControls={dragControls}
            positionX={positionX}
          />
        </div>
      </div>
    </div>
  );
};

export default DiscoverMore;
