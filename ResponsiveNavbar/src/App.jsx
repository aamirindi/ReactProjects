import { useState, useEffect } from "react";
import "./App.css";
import DesktopNavbar from "./DesktopNavbar";

const Sidebar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 750);

  const openNav = () => {
    setSidebarOpen(true);
  };

  const closeNav = () => {
    setSidebarOpen(false);
  };

  const handleResize = () => {
    setIsDesktop(window.innerWidth > 750);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {isDesktop ? (
        <DesktopNavbar />
      ) : (
        <div
          className={`sidebar ${
            isSidebarOpen ? "sidebar-open" : "sidebar-close"
          }`}>
          <a href="#" onClick={closeNav} className="closebtn">
            &times;
          </a>
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Projects</a>
          <a href="#">Contact</a>
        </div>
      )}
      <div id="main" style={{ marginLeft: isSidebarOpen ? "250px" : "0" }}>
        {!isDesktop && (
          <button className="openbtn" onClick={openNav}>
            &#9776;
          </button>
        )}
      </div>
    </>
  );
};

export default Sidebar;
