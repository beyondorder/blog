'use client'

import React, {useEffect, useState} from 'react';
import MDEditor, {title} from "@uiw/react-md-editor";
import axios from 'axios';
import {BsCalendar} from "react-icons/bs";
import {BiComment, BiHeart} from "react-icons/bi";
import {PostType} from "@/lib/type";


const Page= ({params}:{params:{slug:string}}) => {

	const [post, setPost] = useState<PostType>()

	useEffect(() => {
		axios.get('/api/writing/detail',{params: {id: params.slug}})
			.then(res  => setPost(res?.data))
			.catch(error  => console.log(error))
	}, [params]);


	return (
		<div className="flex flex-col justify-center items-center">
			<div className={"w-3/4 text-white"}>
				<div className="p-10 relative">
					<div className="text-center text-2xl ">{post?.title}</div>
					<div className="absolute right-0 flex text-neutral-400 mt-5">
						<div className="mr-2 text-xl">
							<BsCalendar />
						</div>
						{ post?.createdAt ? new Date(post?.createdAt).toDateString() : ""}
					</div>
				</div>
				<div className="p-10">
					<MDEditor.Markdown source={post?.content} style={{padding:10, whiteSpace: 'pre-wrap', backgroundColor:"rgb(18,18,18)", color:"white"}}/>
				</div>

			</div>
		</div>
	);
};

export default Page;
