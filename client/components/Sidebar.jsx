import React, { useState, useEffect } from "react";
import ytLogo from "./Images/ytlogo.png";
import ytlogomobile from "./Images/ytlogomobile.png";
import { MenuIcon } from "@heroicons/react/outline";
function Sidebar({ showSidebar, setShowSidebar }) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      const sidebarElement = document.getElementById("sidebar");

      if (
        showSidebar &&
        sidebarElement &&
        !sidebarElement.contains(event.target)
      ) {
        setShowSidebar(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [showSidebar, setShowSidebar]);

  return (
    <div id="sidebar" className={`sidebar ${showSidebar ? "show" : ""}`}>
      <div className="menu-images">
        <div className="flex justify-between items-center w-full h-1 px-12 sm:px-6 py-3 bg-[#202020] text-white"></div>
        <div className="flex cursor-pointer">
          <MenuIcon className="h-7 mr-2" />
          <img
            className="w-10 sm:w-16 h-5 sm:h-7 object-contain"
            src={windowWidth <= 400 ? ytlogomobile : ytLogo}
            alt="youtube"
          />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
