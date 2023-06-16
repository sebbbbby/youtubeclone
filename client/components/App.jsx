import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import Header from "./Header.jsx";
import { Routes, useNavigate, Route } from "react-router-dom";

import SingleVideo from "./SingleVideo.jsx";

const App = () => {

	const [videos, setVideos] = useState(null);

	useEffect(() => {
		const fetchVideos = async () => {
			try {
				const res = await axios.get("http://localhost:3000/videos");
				if (res.data.length > 0) {
					setVideos(res.data);
				}
			} catch (err) {
				console.log(err);
			}
		};
		fetchVideos();
	}, []);

    // useEffect(() => {
    //     getVideos()
    // }, [])
  // const getVideos = () => {
  //     axios
  //         .get('/api/videos')
  //         .then((response) => {
  //             console.log(response.data)
  //         })
  //         .catch((error) => {
  //             console.error('Error fetching videos', error)
  //         })
  // }

	const getVideos = () => {
		axios
			.get("/videos")
			.then((response) => {
				console.log(response.data);
				return response.data;
			})
			.catch((error) => {
				console.error("Error fetching videos", error);
			});
	};

	return (
		<>
			<Header />
			<Routes />
			{/* <Route path="/home" element={<Home />} /> */}
			<Routes />
			<div className="flex flex-wrap">
				{videos && videos.map((video) => <SingleVideo video={video} />)}
			</div>
		</>
	);
};

export default App;
