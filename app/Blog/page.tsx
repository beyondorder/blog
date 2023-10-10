'use client'

import React, {useEffect, useState} from 'react';
import {BsCalendar, BsPencil} from "react-icons/bs";
import {useRouter} from "next/navigation";
import {PostType} from "@/lib/type";
import axios from 'axios';
import Link from "next/link";
import {BiComment, BiHeart} from "react-icons/bi";

const Blog = () => {

	const [posts, setPosts] = useState<PostType[]>([])

	useEffect(() => {
		axios.get('/api/writing')
			.then(res  => setPosts(res?.data))
			.catch(error  => console.log(error))
	}, []);

	const router = useRouter();
	const [needPassword, setNeedPassword] = useState(false);
	const [password, setPassword] = useState("");

	return (
		<div>

			<div className="text-yellow-500 text-lg overflow-y-scroll">Posts</div>
			{
				posts.map(post => (
					<React.Fragment key={post.title}>
						<div className="flex items-center gap-2">
							<Link href={`/writing/${post.id}`} >
								<div className="mr-3 text-neutral-400">- {post.title}</div>
							</Link>
							<div className="flex items-center">
								<div className="text-xs"><BsCalendar /></div>
								<div>{new Date(post.createdAt).toDateString()}</div>
							</div>
							<div className="flex items-center">
								<div className="mr text-lg"><BiComment /></div>
								<div>{post.comments?.length}</div>
							</div>
							<div className="flex items-center">
								<div className="mr text-lg"><BiHeart /></div>
								<div>{post.like}</div>
							</div>
						</div>
					</React.Fragment>
				))
			}


			<div
				className="
					z-10 fixed right-10 bottom-10 flex mt-5 text-2xl gap-3
					bg-neutral-400/30 p-5 rounded-full hover:bg-white group
					hover:cursor-pointer
				"
			>
				<div className="transition group-hover:scale-150 group-hover:text-yellow-400"
						 onClick={()=>setNeedPassword(true)}>
					<BsPencil />
				</div>
				{
					needPassword && (
						<>
							<input
								value={password}
								onChange={(e)=>{
									setPassword(e.target.value);
								}} />
							<button
							className=""
							onClick={()=>{
								if (password === 'ryan0625'){
									console.log("here?")
									router.push("/writing")
								}else{
									console.log("wrong password")
									setNeedPassword(false);
									setPassword("")
								}
							}}>
								확인
							</button>
						</>
					)
				}
			</div>
		</div>
	);
};

export default Blog;
