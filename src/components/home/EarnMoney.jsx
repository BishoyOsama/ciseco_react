import { Link } from "react-router-dom";

const EarnMoney = () => {
  const logo =
    "https://ciseco-reactjs.vercel.app/static/media/logo.95d47bbac8db6c1e8f997bbf26ca05cf.svg";
  return (
    <div className="w-full border-t border-neutral-200 dark:border-neutral-700">
      <div className="w-[95%] sm:w-[90%] xl:w-[70%] mx-auto flex flex-col lg:flex-row items-center justify-between gap-y-10 font-roboto my-32">
        <div className="w-full sm:w-fit lg:w-[40%] flex flex-col gap-y-4">
          <div className="w-full">
            <img src={logo} alt="ciseco" />
          </div>
          <div className="flex flex-col gap-y-2 sm:gap-y-4">
            <h1 className="font-semibold text-3xl sm:text-4xl xl:text-5xl 2xl:text-6xl mt-6 sm:mt-8 mb-8 !leading-[1.2] tracking-tight">
              Earn free money <br />
              with Ciseco
            </h1>
            <p className="block sm:mt-6 text-slate-500 dark:text-slate-400">
              With Ciseco you will get freeship & savings combo...
            </p>
          </div>
          <div className="flex space-x-2 sm:space-x-5">
            <Link
              className="relative h-auto inline-flex items-center justify-center rounded-full 
            transition-colors text-sm sm:text-base font-medium py-3 px-4 sm:py-3.5 sm:px-6 disabled:bg-opacity-90 bg-slate-900 dark:bg-slate-100 hover:bg-slate-800
             text-slate-50 dark:text-slate-800 shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000 dark:focus:ring-offset-0 "
            >
              savings combo
            </Link>
            <Link
              className="relative h-auto inline-flex items-center justify-center rounded-full 
            transition-colors text-sm sm:text-base font-medium py-3 px-4 sm:py-3.5 sm:px-6 
            bg-white text-slate-700 dark:bg-slate-900 dark:text-slate-300 hover:bg-gray-100 
            dark:hover:bg-slate-800 border border-slate-100 dark:border-slate-700 focus:outline-none 
            focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000 dark:focus:ring-offset-0 "
            >
              discover more
            </Link>
          </div>
        </div>
        <div className="w-full md:w-[80%] lg:w-[60%]">
          <img
            src="https://ciseco-reactjs.vercel.app/static/media/rightLargeImg.dd2356513f3941fd1981.png"
            alt="earn money"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default EarnMoney;
