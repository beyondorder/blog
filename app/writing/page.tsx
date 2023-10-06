'use client'

import MDEditor from '@uiw/react-md-editor';
import axios from 'axios';
import React, {useRef, useState} from 'react';
import 'react-quill/dist/quill.snow.css';


const Writing = () => {
	const [value, setValue] = useState<string|undefined>("");
	const [title, setTitle] = useState("");

	const savePost = async () => {
		axios.post('api/writing', {title: title, content: value})
			.then(res => console.log(res.data))
			.catch(error => console.log(error))
	}

	return (
		<div>
			<div className="pt-8">
				<label htmlFor="title">제목</label>
				<input
					id={"title"}
					className="border"
					value={title}
				  onChange={(e)=>setTitle(e.target.value)}
				/>

				<MDEditor
					value={value}
					onChange={(value, event, state)=> setValue(event?.target.value)}
				/>
				<button
					onClick={savePost}
				>저장</button>
			</div>

		</div>
	);
};

export default Writing;
