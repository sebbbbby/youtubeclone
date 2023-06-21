import React, { useState, useEffect } from "react";
import hexYTimage from "./Images/hexYTimg.png";
import ytlogomobile from "./Images/ytlogomobile.png";
import shorts from "./Images/Shorts.png";
import YTKidsImg from "./Images/YTKidsImg.png";
import circYTimage from "./Images/circYTimage.jpeg";
import YTTVimage from "./Images/YTTVimage.png";
import {
  AiOutlineSetting,
  AiOutlineTrophy,
  AiOutlineFlag,
} from "react-icons/ai";
import { BiTimeFive, BiMovie, BiLike } from "react-icons/bi";
import { BsPlayBtn, BsFire, BsLightbulb } from "react-icons/bs";
import { CgGames } from "react-icons/cg";
import { FiRadio, FiHelpCircle } from "react-icons/fi";
import { GiHanger } from "react-icons/gi";
import { GoHome } from "react-icons/go";
import { IoMusicalNoteOutline, IoNewspaperOutline } from "react-icons/io5";
import { LuHistory, LuShoppingBag } from "react-icons/lu";
import {
  MdSubscriptions,
  MdPodcasts,
  MdOutlineVideoLibrary,
  MdOutlineFeedback,
} from "react-icons/md";

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
  //sidebar must be w-60 or the spacing will be off.

  return (
    <div
      className={`sidebar ${
        showSidebar ? "show" : ""
      } bg-black w-60 absolute top-14 left-0 transition-left duration-100 z-50`}
    >
      <div>
        <div className="flex justify-between items-center w-full h-1 px-12 sm:px-6 bg-[#202020] text-white"></div>
        <div className="flex flex-col justify-start items-start">
          <div className="image-stack">
            <div className="flex items-center hover:border border-gray-100 rounded-lg">
              <GoHome className="h-7 mr-2" />
              <p>Home</p>
            </div>
            <div className="flex items-center hover:border border-gray-100 rounded-lg">
              <img
                id="imgSrc"
                className="h-7 mr-2"
                src={shorts}
                alt="Shorts"
              ></img>
              <p>Shorts</p>
            </div>
            <div className="flex items-center hover:border border-gray-100 rounded-lg">
              <MdSubscriptions className="h-7 mr-2" />
              <p>Subscriptions</p>
            </div>
            <div className="border-t border-gray-100 my-4"></div>
            <div className="flex items-center hover:border border-gray-100 rounded-lg">
              <MdOutlineVideoLibrary className="h-7 mr-2" />
              <p>Library</p>
            </div>
            <div className="flex items-center hover:border border-gray-100 rounded-lg">
              <LuHistory className="h-7 mr-2" />
              <p>History</p>
            </div>
            <div className="flex items-center hover:border border-gray-100 rounded-lg">
              <BsPlayBtn className="h-7 mr-2" />
              <p>Your videos</p>
            </div>
            <div className="flex items-center hover:border border-gray-100 rounded-lg">
              <BiTimeFive className="h-7 mr-2" />
              <p>Watch later</p>
            </div>
            <div className="flex items-center hover:border border-gray-100 rounded-lg">
              <BiLike className="h-7 mr-2" />
              <p>Liked videos</p>
            </div>
            <div className="border-t border-gray-100 my-4"></div>
            <h2 className="py-2 text-lg	font-bold">Explore</h2>
            <div className="flex items-center hover:border border-gray-100 rounded-lg">
              <BsFire className="h-7 mr-2" />
              <p>Trending</p>
            </div>
            <div className="flex items-center hover:border border-gray-100 rounded-lg">
              <LuShoppingBag className="h-7 mr-2" />
              <p>Shopping</p>
            </div>
            <div className="flex items-center hover:border border-gray-100 rounded-lg">
              <IoMusicalNoteOutline className="h-7 mr-2" />
              <p>Music</p>
            </div>
            <div className="flex items-center hover:border border-gray-100 rounded-lg">
              <BiMovie className="h-7 mr-2" />
              <p>Movies & TV</p>
            </div>
            <div className="flex items-center hover:border border-gray-100 rounded-lg">
              <FiRadio className="h-7 mr-2" />
              <p>Live</p>
            </div>
            <div className="flex items-center hover:border border-gray-100 rounded-lg">
              <CgGames className="h-7 mr-2" />
              <p>Gaming</p>
            </div>
            <div className="flex items-center hover:border border-gray-100 rounded-lg">
              <IoNewspaperOutline className="h-7 mr-2" />
              <p>News</p>
            </div>
            <div className="flex items-center hover:border border-gray-100 rounded-lg">
              <AiOutlineTrophy className="h-7 mr-2" />
              <p>Sports</p>
            </div>
            <div className="flex items-center hover:border border-gray-100 rounded-lg">
              <BsLightbulb className="h-7 mr-2" />
              <p>Learning</p>
            </div>
            <div className="flex items-center hover:border border-gray-100 rounded-lg">
              <GiHanger className="h-7 mr-2" />
              <p>Fashion & Beauty</p>
            </div>
            <div className="flex items-center hover:border border-gray-100 rounded-lg">
              <MdPodcasts className="h-7 mr-2" />
              <p>Podcasts</p>
            </div>
            <div className="border-t border-gray-100 my-4"></div>
            <h2 className="py-2 text-lg	font-bold">More from YouTube</h2>
            <div className="flex items-center  hover:border border-gray-100 rounded-lg">
              <img className="h-7 mr-2" id="imgSrc" src={ytlogomobile} />
              <p>YouTube Premium</p>
            </div>
            <div className="flex items-center hover:border border-gray-100 rounded-lg ">
              <img
                src={hexYTimage}
                id="imgSrc"
                className="h-10 w-10 rounded-full mr-2"
              />
              <p>YouTube Studio</p>
            </div>
            <div className="flex items-center hover:border border-gray-100 rounded-lg">
              <img src={circYTimage} className="h-10 w-10 rounded-full mr-2" />
              <p>YouTube Music</p>
            </div>
            <div className="flex items-center hover:border border-gray-100 rounded-lg">
              <img src={YTKidsImg} className="h-10 w-10 rounded-full mr-2" />
              <p>YouTube Kids</p>
            </div>
            <div className="flex items-center hover:border border-gray-100 rounded-lg">
              <img src={YTTVimage} className="h-10 w-10 rounded-full mr-2" />
              <p>YouTube TV</p>
            </div>
            <div className="border-t border-gray-100 my-4"></div>
            <div className="flex items-center hover:border border-gray-100 rounded-lg">
              <AiOutlineSetting className="h-7 mr-2" />
              <p>Settings</p>
            </div>
            <div className="flex items-center hover:border border-gray-100 rounded-lg">
              <AiOutlineFlag className="h-7 mr-2" />
              <p>Report history</p>
            </div>
            <div className="flex items-center hover:border border-gray-100 rounded-lg">
              <FiHelpCircle className="h-7 mr-2" />
              <p>Help</p>
            </div>
            <div className="flex items-center hover:border border-gray-100 rounded-lg">
              <MdOutlineFeedback className="h-7 mr-2" />
              <p>Send feedback</p>
            </div>
            <div className=" border-t border-gray-100 my-4"></div>
            <div className="block w-1/4">
              <div className="text-xs px-1 w-1/4 flex-auto mt-4 md:mt-2">
                <a>About</a>
                <a className="px-1">Press</a>
                <a className="px-1">Copyright</a>
                <a className="px-1">Contact us</a>
                <a className="px-1">Creators</a>
                <a className="px-1">Advertise</a>
                <a className="px-1">Developers</a>
              </div>
              <div className="text-xs px-1 w-60 flex-auto mt-4 md:mt-4">
                <a>Terms</a>
                <a className="px-1">Privacy</a>
                <a className="px-1">Policy & Safety</a>
                <a className="px-1">How YouTube works</a>
                <a className="px-1">Test new features</a>
                <a className="px-1">NFL Sunday Ticket</a>
              </div>
              <div className="text-xs px-1 w-60 flex-auto mt-4 md:mt-4">
                <a>© 2023 Not Really Youtube</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
