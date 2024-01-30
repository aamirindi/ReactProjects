import "./App.css";
import { useState } from "react";

const Sidebar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const openNav = () => {
    setSidebarOpen(true);
  };

  const closeNav = () => {
    setSidebarOpen(false);
  };

  return (
    <>
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
      <div id="main" style={{ marginLeft: isSidebarOpen ? "250px" : "0" }}>
        <button className="openbtn" onClick={openNav}>
          &#9776;
        </button>
      </div>
    </>
  );
};

export default Sidebar;
