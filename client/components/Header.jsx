import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import ytLogo from "./Images/ytlogo.png";
import ytlogomobile from "./Images/ytlogomobile.png";
import {
  MenuIcon,
  SearchIcon,
  MicrophoneIcon,
  ViewGridIcon,
  DotsVerticalIcon,
} from "@heroicons/react/outline";
import { BsBell } from "react-icons/bs";
import { BiVideoPlus } from "react-icons/bi";
import axios from "axios";

function Header() {
  const [inputSearch, setInputSearch] = useState("");
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  //below is fetching the data of what is searched in the Header searchbar. It will return an array of objects to be utilized. no props/setState created for the information

  const fetchData = async () => {
    console.log(inputSearch);
    try {
      const response = await fetch(
        `http://localhost:3000/search/${inputSearch}`
      );
      const json = await response.json();
      //this json variable is the array of objects that store the information
      console.log(json);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex justify-between items-center w-full h-10 px-2 sm:px-6 py-8 bg-[#202020] text-white">
      <div className="flex cursor-pointer">
        <MenuIcon className="h-7 mr-2" />
        <img
          className="w-10 sm:w-16 h-5 sm:h-7 object-contain"
          src={windowWidth <= 400 ? ytlogomobile : ytLogo}
          alt="youtube"
        />
      </div>
      <div className="flex items-center w-full sm:w-auto">
        <form
          className="flex w-full sm:w-96 lg:w-128 items-center bg-[#313131] rounded-r-full"
          onSubmit={(e) => {
            e.preventDefault();
            fetchData();
            console.log(inputSearch, "Hello there");
          }}
        >
          <input
            type="text"
            placeholder="Search"
            value={inputSearch}
            onChange={(e) => setInputSearch(e.target.value)}
            className="bg-black flex-1 h-10 rounded-l-full py-2 px-4"
          />
          <button className="h-10 w-16 flex items-center justify-center bg-[#313131] rounded-r-full ">
            <SearchIcon className="h-5 rounded-r" />
          </button>
        </form>
        <button className="bg-black h-10 w-10 ml-4 rounded-full flex justify-center items-center">
          <MicrophoneIcon className="h-5" />
        </button>
      </div>
      <div className="hidden sm:flex justify-between w-32">
        <BiVideoPlus className="h-6 w-6 cursor-pointer" />
        <BsBell className="h-5 w-6 cursor-pointer" />
        <DotsVerticalIcon className="h-6 cursor-pointer" />
        {/* Where user login can go */}
      </div>
    </div>
  );
}

export default Header;
