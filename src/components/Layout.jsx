import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div className="w-full h-full flex flex-col items-center overflow-hidden">
      <div className="w-full bg-white flex justify-center z-40 fixed">
        <Header />
      </div>
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
