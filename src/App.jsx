import { Outlet } from "react-router";
import "./App.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="max-w-[1480px] mx-auto w-full h-screen flex flex-col items-center">
      <div className="flex-1 w-full">
        <Outlet></Outlet>
      </div>
    </div>
  );
}

export default App;
