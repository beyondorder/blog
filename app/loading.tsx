import React from 'react';
import {AiOutlineLoading, AiOutlineReload} from "react-icons/ai";

const Loading = () => {
	return (
		<div className="bg-gray-950/400 flex flex-col h-full justify-center items-center w-full">
			<div className="text-9xl animate-spin"><AiOutlineReload /></div>
			<div className="text-2xl text-white pt-4 animate-pulse">Loading...</div>
		</div>
	);
};

export default Loading;
