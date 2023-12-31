'use client'

import React, {useEffect, useState} from 'react';
import {BsCalendar, BsPencil} from "react-icons/bs";
import {PostType} from "@/lib/type";
import axios from 'axios';
import Link from "next/link";
import {BiComment, BiHeart} from "react-icons/bi";
import {useCurrentUserStore} from "@/lib/state";
import Pencil from "@/components/writing/pencil";

const Blog = () => {

	const [posts, setPosts] = useState<PostType[]>([])

	useEffect(() => {
		axios.get('/api/writing')
			.then(res  => setPosts(res?.data))
			.catch(error  => console.log(error))
	}, []);

	const { email } = useCurrentUserStore();
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
		<Pencil />
		</div>
	);
};

export default Blog;
