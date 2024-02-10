import { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { IoSearchOutline, IoCloseOutline } from "react-icons/io5";
import { AiOutlineUser } from "react-icons/ai";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { RxHamburgerMenu } from "react-icons/rx";
import Sidebar from "./Sidebar";

const Header = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const burgerRef = useRef(null);
  const links = ["men", "women", "beauty", "sport"];
  const logo =
    "https://ciseco-reactjs.vercel.app/static/media/logo.95d47bbac8db6c1e8f997bbf26ca05cf.svg";
  return (
    <>
      <div className="2xl:w-[70%] w-[95%] sm:w-[90%] h-[80px] flex items-center justify-between ">
        <button
          ref={burgerRef}
          className="text-3xl flex lg:hidden"
          onClick={() => setShowSidebar(true)}
        >
          <RxHamburgerMenu />
        </button>
        <div>
          <img
            src={logo}
            alt="ciseco logo"
            className="w-[70%] sm:w-full mx-auto"
          />
        </div>
        <nav className={`lg:flex hidden`}>
          <ul
            className={`${
              showSearch ? "hidden" : "flex"
            } justify-center items-center gap-x-4 font-roboto font-semibold capitalize`}
          >
            {links.map((link, linkIndex) => (
              <li
                key={linkIndex}
                className="px-4 hover:bg-veryLightBlue rounded-2xl"
              >
                <NavLink
                  exact="true"
                  to={link}
                  className={({ isActive }) => {
                    isActive ? "bg-veryLightBlue text-green-400" : "text-black";
                  }}
                >
                  {link}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {showSearch && (
          <div className="relative h-[60px] hidden lg:flex w-[50%] mr-10">
            <div className="relative flex items-center w-full">
              <input
                placeholder="Type and press enter"
                className="absolute ps-10 w-full h-full rounded-sm focus:outline-none bg-slate-100"
              />
              <span className="absolute ml-2 text-2xl">
                <IoSearchOutline />
              </span>
            </div>

            <button className="absolute right-2 top-1/2 -translate-y-1/2" onClick={() => setShowSearch(false)}>
              <IoCloseOutline/>
            </button>
          </div>
        )}

        <div className="flex gap-x-3 text-[1.5rem]">
          <button
            className={`px-2 py-2 hover:bg-veryLightBlue rounded-full hidden cursor-pointer ${showSearch? "hidden" : "lg:block"}`}
            onClick={() => setShowSearch(true)}
          >
            <IoSearchOutline />
          </button>
          <button className="px-2 py-2 hover:bg-veryLightBlue rounded-full cursor-pointer">
            <AiOutlineUser />
          </button>
          <button className="px-2 py-2 hover:bg-veryLightBlue rounded-full cursor-pointer">
            <HiOutlineShoppingCart />
          </button>
        </div>
      </div>
      {/* sidebar */}
      <Sidebar
        logo={logo}
        links={links}
        showSidebar={showSidebar}
        setShowSidebar={setShowSidebar}
        burgerRef={burgerRef}
      />
    </>
  );
};

export default Header;
