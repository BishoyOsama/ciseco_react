import { IoSearchOutline, IoCloseOutline } from "react-icons/io5";
import { FaFacebook, FaYoutube, FaTelegram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import { useEffect, useRef } from "react";
import classNames from "classnames";

const Sidebar = ({ links, showSidebar, logo, setShowSidebar, burgerRef }) => {
  const sidebarStyles =
    " fixed bg-white w-full sm:w-[400px] self-start h-screen py-6 flex lg:hidden flex-col gap-y-2 font-roboto shadow-black/40 shadow-md transition-all ease-in-out duration-100 z-[1000]";
  const sidebarTransition = classNames(sidebarStyles, {
    "opened": showSidebar,
    "closed": !showSidebar,
  });
  const menuRef = useRef(null);
  useEffect(() => {
    const handleOutClicks = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        burgerRef.current &&
        !burgerRef.current.contains(event.target)
      ) {
        setShowSidebar(false);
      }
    };
    document.addEventListener("click", handleOutClicks);
    return () => document.removeEventListener("click", handleOutClicks);
  }, []);

  return (
    <div ref={menuRef} className={`${sidebarTransition}  `}>
      <button
        className="self-end text-xl text-black mr-3"
        onClick={() => setShowSidebar(false)}
      >
        <IoCloseOutline />
      </button>

      <div className="flex flex-col gap-y-4 w-full px-2">
        <div>
          <img src={logo} alt="logo" />
        </div>
        <p className="text-slate-600 dark:text-slate-300">
          Discover the most outstanding articles on all topics of life. Write
          your stories and share them
        </p>
        {/* social links */}
        <div className="flex gap-x-2 text-3xl">
          <div className="text-blue-500">
            <FaFacebook />
          </div>
          <div>
            <FaXTwitter />
          </div>
          <div className="text-red-600">
            <FaYoutube />
          </div>
          <div className="text-blue-400">
            <FaTelegram />
          </div>
        </div>
        <div className="relative h-[60px] flex items-center w-full">
          <input
            placeholder="search items"
            className="absolute ps-10 w-full h-full rounded-xl bg-slate-100"
          />
          <span className="absolute ml-2 text-2xl">
            <IoSearchOutline />
          </span>
        </div>
      </div>
      <hr className="border-veryLightBlue border-b-[1px] mt-5" />

      <nav className="px-2 mt-4">
        <ul className="flex flex-col justify-center gap-y-4 text-xl font-roboto font-normal uppercase">
          {links?.map((link, linkIndex) => (
            <li key={linkIndex}>
              <NavLink
                exact="true"
                to={link}
                className={({ isActive }) => {
                  isActive ? "text-slate-600" : "text-slate-300";
                }}
              >
                {link}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
