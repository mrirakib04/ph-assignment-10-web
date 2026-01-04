import { Outlet } from "react-router";
import Navbar from "../../Shared/Navbar";
import Footer from "../../Shared/Footer";

const Main = () => {
  return (
    <div className="w-full flex flex-col overflow-hidden">
      <Navbar></Navbar>
      <div className="py-10 w-full"></div>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
