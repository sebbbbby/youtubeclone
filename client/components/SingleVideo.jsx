import React from "react";
import { CgMoreVerticalAlt } from "react-icons/cg";
import { HiOutlineClock } from "react-icons/hi";

const SingleVideo = () => {
	return (
		<div
			className="flex flex-col bg-transparent m-8 rounded-lg"
			style={{ width: "320px" }}
		>
			<div className="relative group">
				<img
					src="https://i.ytimg.com/vi/4pZ6ZFvuNtU/mqdefault.jpg"
					alt="Thumbnail image"
					className="rounded-lg "
				/>
				<div className="absolute top-0 right-0 bg-black rounded-md m-2 h-8 w-8 justify-center items-center hidden group-hover:flex">
					<HiOutlineClock className=" text-white " />
				</div>
			</div>
			<div className="flex">
				<div className="pr-4">
					<img
						src="https://yt3.ggpht.com/ytc/AGIKgqNd9ovtC7CSZXenh9q-9LqxeKmu3HyNQDuIvX-9mA=s68-c-k-c0x00ffffff-no-rj"
						alt="Channel Image Icon"
						className="rounded-full h-8 w-8 mt-4"
					/>
				</div>
				<div className="py-2 flex flex-col mt-3 text-[#aaa] relative">
					<div className="flex">
						<h4 className="text-white">Most Realistic Painting Ever</h4>
						<button className="" type="button">
							<CgMoreVerticalAlt className="text-white absolute top-2.5 -right-16 h-5 w-5 group-hover:visible" />{" "}
						</button>
					</div>
					<p className="text-inherit text-base">Zach King</p>
					<p className="text-inherit text-sm">26M views &#8226; 11y ago </p>
				</div>
			</div>
		</div>
	);
};

export default SingleVideo;
