import { Outlet } from "react-router";
import "./App.css";
import Navbar from "./Shared/Navbar";
import Footer from "./Shared/Footer";

function App() {
  return (
    <div className="max-w-[1480px] mx-auto w-full h-screen flex flex-col items-center">
      <Navbar></Navbar>
      <div className="py-10 w-full"></div>
      <div className="flex-1 w-full">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
