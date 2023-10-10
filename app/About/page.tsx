'use client'

import React, {useEffect, useState} from 'react';
import Image from "next/image";
import Link from "next/link";
import {BsCalendar} from "react-icons/bs";
import axios from 'axios';
import {BiComment, BiHeart} from "react-icons/bi";
import { motion} from "framer-motion";

type PostProps = {
	id: string;
	title: string;
	content: string;
	like: number;
	comments: any[]
	createdAt: Date;
	updatedAt: Date;
}

const About = () => {
	const [posts, setPosts] = useState<PostProps[]>([]);
	useEffect(() => {
		axios.get('/api/writing')
			.then(res  => setPosts(res?.data))
			.catch(error  => console.log(error))
	}, []);

	return (
		<div
			className="flex flex-col justify-center items-center pt-10 pb-10"
		>
			<div>
				<Image
					className="rounded-full"
					src={"/sh.jpeg"} alt={"shanks"} width={150} height={150} priority={true} style={{width:"auto"}} />
			</div>
			<motion.div
				className="p-5 text-white font-semibold text-center"
				initial={{opacity:0, y:100}}
				animate={{opacity:1, y:0}}
			>
				<h1>Hi 👋</h1>
				<h2>I`m <em>Sukhyun Moon</em>, South Korea</h2>
				<hr className="mt-2 mb-2"/>
				<h2>Working as a Back-End Developer for 7years</h2>
				<p>interested in Programming and Communications</p>
				<p>especially solving problem</p>
				<br/>
				<p>enjoy my page 🤞🏻</p>
			</motion.div>

			<div className="flex flex-col mt-10 sm:px-10 lg:px-20 xl:px-32">
				<div className="bg-gray-950/20 rounded-xl p-2">
					<div className="text-yellow-500 text-lg ">Recent Posts</div>
					{
						posts.slice(0,5).map(post => (
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
										<div>{post.like}</div>
									</div>
									<div className="flex items-center">
										<div className="mr text-lg"><BiHeart /></div>
										<div>{post.comments}</div>
									</div>
								</div>
							</React.Fragment>
						))
					}
				</div>
			</div>

			<div className="flex flex-col mt-10 sm:px-10 lg:px-20 xl:px-32">
				<div className="bg-gray-950/20 rounded-xl p-2">
					<div className="text-yellow-500 text-lg ">Popular Posts</div>
					{
						posts.slice(0,5).map(post => (
							<React.Fragment key={post.title}>
								<div className="flex items-center gap-2">
									<Link href={`/writing/${post.id}}`} >
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
				</div>
			</div>
		</div>
	)
};

export default About;
