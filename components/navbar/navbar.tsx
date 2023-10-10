import React from 'react';
import Link from "next/link";
import {MENU} from "@/lib/data";
import {BsGithub, BsInstagram, BsPencil, BsTwitter, BsYoutube} from "react-icons/bs";

const GITHUB_URL = process.env.GITHUB_URL;
const Navbar = () => {

	return (
		<div
			className="
				fixed
				z-10
				inset-0
				top-0
				flex flex-col items-center
				bg-gray-950
				h-44
				">
			<div className="absolute right-0 bottom-5 text-white/80 flex text-2xl gap-3">
				<Link href={`${GITHUB_URL}`} className="transition hover:scale-105 hover:text-yellow-400"><BsGithub /></Link>
				<Link href={"/"} className="transition hover:scale-105 hover:text-yellow-400"><BsTwitter /></Link>
				<Link href={"/"} className="transition hover:scale-105 hover:text-yellow-400"><BsInstagram /></Link>
				<Link href={"/"} className="transition hover:scale-105 hover:text-yellow-400"><BsYoutube /></Link>
			</div>

			<div className="flex font-extrabold text-2xl text-white flex-[2.5] items-center justify-center content-center">
				<Link href={"/"} className="hover:scale-105">MOON WALKING DEV</Link>
			</div>
			<div className="flex justify-evenly pb-5">
				{
					MENU.map(menu=>(
						<React.Fragment key={menu}>
							<Link href={`/${menu}`} className="w-[5rem] text-center text-white hover:text-yellow-400 outline-none transition">
								{menu}
							</Link>
						</React.Fragment>
					))
				}
			</div>
		</div>
	);
};

export default Navbar;
