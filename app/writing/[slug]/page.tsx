'use client'

import React, {useEffect, useState} from 'react';
import MDEditor, {title} from "@uiw/react-md-editor";
import axios from 'axios';

type PostType = {
	title: string;
	content: string;
	createdAt: Date;
	updatedAt: Date;
}
const Page= ({params}:{params:{id:number}}) => {

	const [post, setPost] = useState<PostType>({})

	useEffect(() => {
		axios.get('api/writing/detail',{params: {id: params.id}})
			.then(res  => setPost(res?.data))
			.catch(error  => console.log(error))
	}, []);


	return (
		<div>
			<div>{post.title}</div>
			<MDEditor.Markdown source={post.content} style={{whiteSpace: 'pre-wrap'}}/>
		</div>
	);
};

export default Page;
