import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import Header from "./Header.jsx";
import { Routes, useNavigate, Route } from "react-router-dom";

const App = () => {
  //   useEffect(() => {
  //     getVideos();
  //   }, []);

  // const getVideos = () => {
  //   axios
  //     .get("/api/videos")
  //     .then((response) => {
  //       console.log(response.data);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching videos", error);
  //     });
  // };

  return (
    <>
      <Header />
      <Routes />
      {/* <Route path="/home" element={<Home />} /> */}
      <Routes />
    </>
  );
};

export default App;
