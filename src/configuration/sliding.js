const sliding = () => {
  const cardWrapper = document.querySelector(".cards");
  let isDown = false;
  let startX, scrollLeft;

  cardWrapper.addEventListener("mousedown", (e) => {
    isDown = true;
    /* add class for ux */
    startX = e.pageX - cardWrapper.offsetLeft
    scrollLeft = cardWrapper.scrollLeft
  });

  cardWrapper.addEventListener("mouseleave", () => {
    isDown = false;
  });

  cardWrapper.addEventListener("mouseup", () => {
    isDown = false;
  });

  cardWrapper.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault()
    const x = e.pageX - cardWrapper.offsetLeft
    const walk = x - startX
    cardWrapper.scrollLeft = scrollLeft - walk
  });
};

export default sliding;
