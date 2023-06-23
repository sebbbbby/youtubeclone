import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import dotenv from 'dotenv'
import axios from 'axios'

const Filters = (props) => {
    const{ setVideos } = props;
  const items = [
    'All', 'Music', 'Lofi', 'Chill-out music', 'Gaming', 'Jazz', 'Medication music', 'Live', 'Soundtracks',
    'Piano', 'News', 'Computer programming', 'Comedy', 'Apple', 'History', 'Computer Hardware', 'Action Thrillers',
    'Driving', 'Algebra', 'Pop music', 'Recently uploaded'
  ];

  const [activeFilter, setActiveFilter] = useState('All');
  console.log(activeFilter);
  for (const d of document.querySelectorAll(".filterbutton")) {
    if (d.textContent.includes(activeFilter)) {
      console.log("found" + d.textContent)
      d.classList.add("active-filter")
    }
  }
  

//   useEffect(() => {
//       const fetchFilters = async () => {
//           try {
//             const res = await axios.get("/api/categories");
//               if (res.data.length > 0) {   
//                 setActiveFilter(res.data);
//               }
//           } catch (err) {
//               console.log(err);
//           }
//       };
//       fetchFilters();
//   }, []);
const fetchCategory = async (filter) => {
    console.log(filter);
    try {
        const response = await fetch(`/api/search/${filter}`);
        const json = await response.json();
        //this json variable is the array of objects that store the information
        setVideos(json);
    } catch (error) {
        console.error(error);
    }
};
  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
    fetchCategory(filter);
  };

  const handleArrowClick = (e) => {
    let elFilterMiddle = document.querySelector('.filter-middle'); 
    let intTranslate = window.innerWidth - 200;
    let intCurrent = parseInt(elFilterMiddle.style.translate || 0);

    if(e.target.className.indexOf('right') > 0){
        intTranslate =  intTranslate * -1;
    }
    document.querySelector(".button-left").style.display="flex";
    document.querySelector(".button-right").style.display="flex";
    if(e.target.className.indexOf('left') > 0 && intCurrent == 0){
      //  console.log('No left');
      document.querySelector(".button-left").style.display="none";
        return;
    } 

    if(e.target.className.indexOf('right') > 0 && intCurrent + elFilterMiddle.offsetWidth <= 0){
       // console.log('No right');
       document.querySelector(".button-right").style.display="none";
        return;
    }  

    intTranslate = intTranslate + intCurrent
    elFilterMiddle.style.translate = `${intTranslate}px 0px`;


  };

  return (
    <div className="inline-flex items-center px-2 py-3 px-4 space-x-3">
      <div className="arrows button-left"
        onClick={(e) => handleArrowClick(e)}
      >
        &lt;
      </div>
      <div className="filter-middle flex">

        {items.map((button, index) => (
            <div
             className={`filterbutton whitespace-nowrap h-32 min-w-12 rounded-8 box-border outline-none cursor-pointer select-none relative font-roboto font-normal text-base leading-8 flex-row items-center inline-flex bg-opacity-10 ${activeFilter === button ? 'bg-gray-700' : 'bg-gray-200'} text-gray-800 px-2 py-1 shadow-inset`}
             onClick={() => handleFilterClick(button)}
             key={index}
            >
            {button}
            </div>
        ))}
      </div>

      <div className="arrows button-right"
           onClick={(e) => handleArrowClick(e)}
      >
        &gt;
      </div>   
    </div>
  );
};

export default Filters;
