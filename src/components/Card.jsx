import React from "react";

const Card = () => {
  return (
    <li
      className="relative aspect-[16/9] bg-red-500/20 w-[80%] sm:w-[70%] md:w-[65%]
    lg:w-[50%] xl:w-[40%] 2xl:w-[35%] h-full rounded-xl p-5 flex flex-shrink-0 object-cover
    font-roboto whitespace-normal z-10"
    >
      <div className="absolute  sm:left-4 w-fit sm:w-full flex flex-col items-start h-[80%]  z-10">
        <div className="flex flex-col gap-y-1">
          <p className="text-sm">Explore new arrivals</p>
          <h3 className="font-semibold text-lg sm:text-2xl">
            Shop the latest <br />
            from top brands
          </h3>
        </div>
        <button className="absolute bottom-0">show me all</button>
      </div>
      <div className="absolute right-0 top-1/2 -translate-y-1/2 sm:w-1/2 w-[40%]">
        <img
          src="https://ciseco-reactjs.vercel.app/static/media/5.46eedaa5a6a199045d6d.png"
          alt=""
          className="w-full object-contain "
        />
      </div>
    </li>
  );
};

export default Card;
