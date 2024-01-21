const sliding = () => {
  const cardWrapper = document.querySelector(".cards");
  let isDown = false;
  let startX, scrollLeft;
  /* touch screens */
  let startPosition = 0;
  let currentTranslate = 0;

  cardWrapper.addEventListener("mousedown", (e) => {
    isDown = true;
    /* add class for ux */
    startX = e.pageX - cardWrapper.offsetLeft;
    scrollLeft = cardWrapper.scrollLeft;
  });

  cardWrapper.addEventListener("mouseleave", () => {
    isDown = false;
  });

  cardWrapper.addEventListener("mouseup", () => {
    isDown = false;
  });

  cardWrapper.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - cardWrapper.offsetLeft;
    const walk = x - startX;
    cardWrapper.scrollLeft = scrollLeft - walk;
  });

  /*
   !for touch screens
   */
  cardWrapper.addEventListener("touchend", (e) => {
    isDown = false;
    currentTranslate +=
      e.type === "touchend" || e.type === "touchcancel"
        ? e.changedTouches[0].pageX - cardWrapper.offsetLeft - startPosition
        : e.pageX - cardWrapper.offsetLeft - startPosition;
  });
  cardWrapper.addEventListener("touchcancel", (e) => {
    isDown = false;
    currentTranslate +=
      e.type === "touchend" || e.type === "touchcancel"
        ? e.changedTouches[0].pageX - cardWrapper.offsetLeft - startPosition
        : e.pageX - cardWrapper.offsetLeft - startPosition;
  });

  cardWrapper.addEventListener("touchstart", (e) => {
    isDown = true;
    /* add class for ux */

    startPosition =
      e.type === "touchstart"
        ? e.touches[0].pageX - cardWrapper.offsetLeft
        : e.pageX - cardWrapper.offsetLeft;
  });

  cardWrapper.addEventListener("touchmove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const currentPosition =
      e.type === "touchmove"
        ? e.touches[0].pageX - cardWrapper.offsetLeft
        : e.pageX - cardWrapper.offsetLeft;
    const translate = currentPosition - startPosition + currentTranslate;

    cardWrapper.style.transform = `translateX(${translate}px)`;
  });
};

export default sliding;
