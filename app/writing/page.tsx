'use client'

import MDEditor, {commands, getCommands, getExtraCommands} from '@uiw/react-md-editor';
import axios from 'axios';
import React, {useRef, useState} from 'react';
import 'react-quill/dist/quill.snow.css';
import Image from "next/image";
import toast from "react-hot-toast";


const Page = () => {
	const [value, setValue] = useState<string|undefined>("");
	const [title, setTitle] = useState("");

	const savePost = async () => {
		axios.post('api/writing', {title: title, content: value})
			.then(res => toast.success(title + "이 저장되었습니다."))
			.catch(error => console.log(error))
	}

	return (
		<div>
			<div className="pt-8">
				<label htmlFor="title" className="pl-3">제목</label>
				<input
					id={"title"}
					className="border my-2 mx-4 h-[2rem] rounded-lg w-1/2"
					value={title}
				  onChange={(e)=>setTitle(e.target.value)}
				/>

				<MDEditor
					height={screen.height/2}
					value={value}
					commands={ [...getCommands()] }
					extraCommands={ [...getExtraCommands()]}
					style={{
						marginRight:"30px",
						marginLeft:"30px",
						marginTop:"10px",
						fontSize:"20px",
						backgroundColor:"rgb(255,255,255)",
						borderRadius: "20px",
						padding: "10px"
					}}
					onChange={(value, event, state)=> setValue(event?.target.value)}
				/>
				<div className="flex justify-end">
					<button
						className="
						mx-4 my-2 bg-neutral-200 w-20 h-8 text-gray-950 rounded-lg
						hover:bg-rose-500 hover:text-white active:scale-95
					"
						onClick={savePost}
					>저장</button>
				</div>
			</div>

		</div>
	);
};

export default Page;
