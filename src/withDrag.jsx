import { useEffect, useState, useRef } from "react";
import { shopByCategoryData as cards } from "./data";

const withDrag = (WrappedComponent) => {
  const WithDrag = (props) => {
    const [documentWidth, setDocumentWidth] = useState(window.innerWidth);
    const cardRef = useRef(null);
    const carouselRef = useRef(null);
    const [positionX, setPositionX] = useState(0);
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
      let newIndexNext = 0;
      if (info.velocity.x < 0 && documentWidth >= 1024) {
        newIndexNext = (cardIndex + 1) % (cards.length - 2);
      } else if (info.velocity.x < 0 && documentWidth < 1024) {
        newIndexNext = (cardIndex + 1) % cards.length;
      } else if (info.velocity.x > 0 && documentWidth >= 1024) {
        newIndexNext =
          (cardIndex - 1 + (cards.length - 2)) % (cards.length - 2);
      } else if (info.velocity.x > 0 && documentWidth < 1024) {
        newIndexNext = (cardIndex - 1 + cards.length) % cards.length;
      }
      setCardIndex(newIndexNext);
      setPositionX(-(cardWidth * cardIndex) - 28 * cardIndex);
    };

    const nextCard = () => {
      const nextIndex =
        documentWidth >= 1024
          ? (cardIndex + 1) % (cards.length - 2)
          : (cardIndex + 1) % cards.length;
      setCardIndex(nextIndex);
      setPositionX(-(nextIndex * cardWidth) - 28 * nextIndex);
    };

    const prevCard = () => {
      const prevIndex =
        documentWidth >= 1024
          ? (cardIndex - 1 + (cards.length - 2)) % (cards.length - 2)
          : (cardIndex - 1 + cards.length) % cards.length;
      setCardIndex(prevIndex);
      setPositionX(-(prevIndex * cardWidth) - 28 * prevIndex);
    };

    return (
      <WrappedComponent
        cardRef={cardRef}
        positionX={positionX}
        carouselRef={carouselRef}
        cardIndex={cardIndex}
        handleDrag={handleDrag}
        nextCard={nextCard}
        prevCard={prevCard}
        carouselWidth={carouselWidth}
        {...props}
      />
    );
  };
  return WithDrag;
};

export default withDrag;
