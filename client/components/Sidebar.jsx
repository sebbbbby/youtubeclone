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

  return (
    <div id="sidebar" className={`sidebar ${showSidebar ? "show" : ""}`}>
      <div className="menu-images">
        <div className="flex justify-between items-center w-full h-1 px-12 sm:px-6 py-3 bg-[#202020] text-white"></div>
        <div className="flex flex-col justify-start items-start">
          <div className="image-stack">
            <div className="flex items-center">
              <GoHome className="h-7 mr-2" />
              <p>Home</p>
            </div>
            <div className="flex items-center">
              <img id="imgSrc" className="h-7 mr-2" src={shorts}></img>
              <p>Shorts</p>
            </div>
            <div className="flex items-center">
              <MdSubscriptions className="h-7 mr-2" />
              <p>Subscriptions</p>
            </div>
            <div className="divider"></div>
            <div className="flex items-center">
              <MdOutlineVideoLibrary className="h-7 mr-2" />
              <p>Library</p>
            </div>
            <div className="flex items-center">
              <LuHistory className="h-7 mr-2" />
              <p>History</p>
            </div>
            <div className="flex items-center">
              <BsPlayBtn className="h-7 mr-2" />
              <p>Your videos</p>
            </div>
            <div className="flex items-center">
              <BiTimeFive className="h-7 mr-2" />
              <p>Watch later</p>
            </div>
            <div className="flex items-center">
              <BiLike className="h-7 mr-2" />
              <p>Liked videos</p>
            </div>
            <div className="divider"></div>
            <h2>Explore</h2>
            <div className="flex items-center">
              <BsFire className="h-7 mr-2" />
              <p>Trending</p>
            </div>
            <div className="flex items-center">
              <LuShoppingBag className="h-7 mr-2" />
              <p>Shopping</p>
            </div>
            <div className="flex items-center">
              <IoMusicalNoteOutline className="h-7 mr-2" />
              <p>Music</p>
            </div>
            <div className="flex items-center">
              <BiMovie className="h-7 mr-2" />
              <p>Movies & TV</p>
            </div>
            <div className="flex items-center">
              <FiRadio className="h-7 mr-2" />
              <p>Live</p>
            </div>
            <div className="flex items-center">
              <CgGames className="h-7 mr-2" />
              <p>Gaming</p>
            </div>
            <div className="flex items-center">
              <IoNewspaperOutline className="h-7 mr-2" />
              <p>News</p>
            </div>
            <div className="flex items-center">
              <AiOutlineTrophy className="h-7 mr-2" />
              <p>Sports</p>
            </div>
            <div className="flex items-center">
              <BsLightbulb className="h-7 mr-2" />
              <p>Learning</p>
            </div>
            <div className="flex items-center">
              <GiHanger className="h-7 mr-2" />
              <p>Fashion & Beauty</p>
            </div>
            <div className="flex items-center">
              <MdPodcasts className="h-7 mr-2" />
              <p>Podcasts</p>
            </div>
            <div className="divider"></div>
            <h2>More from YouTube</h2>
            <div className="flex items-center">
              <img className="h-7 mr-2" id="imgSrc" src={ytlogomobile} />
              <p>YouTube Premium</p>
            </div>
            <div className="flex items-center">
              <img src={hexYTimage} id="imgSrc" className="h-7 mr-2" />
              <p>YouTube Studio</p>
            </div>
            <div className="flex items-center">
              <img src={circYTimage} id="imgSrc" className="h-7 mr-2" />
              <p>YouTube Music</p>
            </div>
            <div className="flex items-center">
              <img src={YTKidsImg} id="imgSrc" className="h-7 mr-2" />
              <p>YouTube Kids</p>
            </div>
            <div className="flex items-center">
              <img src={YTTVimage} id="imgSrc" className="h-7 mr-2" />
              <p>YouTube TV</p>
            </div>
            <div className="divider"></div>
            <div className="flex items-center">
              <AiOutlineSetting className="h-7 mr-2" />
              <p>Settings</p>
            </div>
            <div className="flex items-center">
              <AiOutlineFlag className="h-7 mr-2" />
              <p>Report history</p>
            </div>
            <div className="flex items-center">
              <FiHelpCircle className="h-7 mr-2" />
              <p>Help</p>
            </div>
            <div className="flex items-center">
              <MdOutlineFeedback className="h-7 mr-2" />
              <p>Send feedback</p>
            </div>
            <div className="divider"></div>
            <div className="footer" class="style-scoper">
              <div id="guide-links" class="style-scope">
                <a>About</a>
                <a> Press</a>
                <a> Copyright</a>
                <a>Contact us</a>
                <a>Creators</a>
                <a>Advertise</a>
                <a>Developers</a>
              </div>
              <div id="guide-links" class="style-scope">
                <a></a>
                <a>Terms</a>
                <a>Privacy</a>
                <a>Policy & Safety</a>
                <a>How YouTube works</a>
                <a>Test new features</a>
                <a>NFL Sunday Ticket</a>
              </div>
              <div id="guide-links" class="style-scope">
                <a></a>
                <a>© 2023 Not Really Google</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
