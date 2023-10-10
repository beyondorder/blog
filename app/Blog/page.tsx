'use client'

import React, {useState} from 'react';
import {BsPencil} from "react-icons/bs";
import {useRouter} from "next/navigation";

const Blog = () => {
	const router = useRouter();
	const [needPassword, setNeedPassword] = useState(false);
	const [password, setPassword] = useState("");
	console.log(needPassword)
	console.log(password)
	return (
		<div>
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
