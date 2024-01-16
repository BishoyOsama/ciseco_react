import { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { IoSearchOutline } from "react-icons/io5";
import { AiOutlineUser } from "react-icons/ai";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { RxHamburgerMenu } from "react-icons/rx";
import Sidebar from "./Sidebar";

const Header = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const burgerRef = useRef(null)
  const links = ["men", "women", "beauty", "sport"];
  const logo =
    "https://ciseco-reactjs.vercel.app/static/media/logo.95d47bbac8db6c1e8f997bbf26ca05cf.svg";
  return (
    <>
      <div className="xl:w-[70%] w-[95%] sm:w-[90%] h-[80px] flex items-center justify-between">
        <button
          ref={burgerRef}
          className="text-3xl flex lg:hidden"
          onClick={() => setShowSidebar(true)}
        >
          <RxHamburgerMenu />
        </button>
        <div>
          <img src={logo} alt="ciseco logo" />
        </div>
        <nav className="lg:flex hidden">
          <ul className="flex justify-center items-center gap-x-4 font-roboto font-semibold capitalize">
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

        <div className="flex gap-x-3 text-[1.5rem]">
          <div className="px-2 py-2 hover:bg-veryLightBlue rounded-full hidden lg:block cursor-pointer">
            <IoSearchOutline />
          </div>
          <div className="px-2 py-2 hover:bg-veryLightBlue rounded-full cursor-pointer">
            <AiOutlineUser />
          </div>
          <div className="px-2 py-2 hover:bg-veryLightBlue rounded-full cursor-pointer">
            <HiOutlineShoppingCart />
          </div>
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
