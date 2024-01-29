import { FaFacebook, FaYoutube, FaTelegram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { footerLinks } from "../data";

const Footer = () => {
  const logo =
    "https://ciseco-reactjs.vercel.app/static/media/logo.95d47bbac8db6c1e8f997bbf26ca05cf.svg";
  return (
    <footer className="w-full border-t border-neutral-200 dark:border-neutral-700">
      <div className="w-[95%] sm:w-[90%] lg:w-[75%] grid md:grid-cols-4 lg:grid-cols-5 mx-auto  my-32 font-roboto gap-x-5 md:gap-x-0">
        {/* logo and social links */}
        <div className="w-[55%] md:w-fit justify-between flex flex-row lg:flex-col gap-y-4 col-span-5 lg:col-auto mb-5 lg:mb-0 gap-x-10">
          <img src={logo} alt="ciseco" className="w-[120px]"/>
          <div className="text-lg flex text-[1rem] flex-row lg:flex-col gap-x-2 lg:gap-y-3">
            <Link className="flex gap-x-2 items-center group">
              <FaFacebook className="text-blue-500" /> <p className="text-sm text-neutral-700 group-hover:text-black dark:text-neutral-300 dark:group-hover:text-white hidden lg:block">Facebook </p>
            </Link>
            <Link className="flex gap-x-2 items-center group">
              <FaYoutube className="text-red-600" /> <p className="text-sm text-neutral-700 group-hover:text-black dark:text-neutral-300 dark:group-hover:text-white hidden lg:block">Youtube </p>
            </Link>
            <Link className="flex gap-x-2 items-center group">
              <FaTelegram className="text-blue-400" /> <p className="text-sm text-neutral-700 group-hover:text-black dark:text-neutral-300 dark:group-hover:text-white hidden lg:block">Telegram </p>
            </Link>
            <Link className="flex gap-x-2 items-center group">
              <FaXTwitter /> <p className="text-sm text-neutral-700 group-hover:text-black dark:text-neutral-300 dark:group-hover:text-white hidden lg:block">Twitter</p>
            </Link>
          </div>
        </div>
        {/* footer links */}
        {footerLinks.map((footerLink, index) => (
          <div key={index} className={`flex flex-col gap-y-4 col-span-2 md:col-auto mt-5 lg:mt-0`}>
            <h3 className="font-semibold text-neutral-700 dark:text-neutral-200">{footerLink.title}</h3>
            {footerLink.links.map((link, index) => (
              <Link key={index} className="text-sm text-neutral-700 hover:text-black dark:text-neutral-300 dark:hover:text-white">{link}</Link>
            ))}
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
