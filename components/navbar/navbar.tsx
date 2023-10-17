
import React from 'react';
import Link from "next/link";
import {MENU} from "@/lib/data";
import {BsGithub, BsInstagram, BsPencil, BsTwitter, BsYoutube} from "react-icons/bs";
import LoginBox from "@/components/navbar/login-box";

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
				w-screen
				">

			<div className="flex font-extrabold text-2xl text-white flex-[2.5] items-center justify-center content-center">
				<Link href={"/"} className="hover:scale-105">MOON WALKING DEV</Link>
			</div>
			<div className="flex justify-between gap-10 w-full p-5">
				<div className="text-white/80 flex text-2xl gap-3 overflow-x-hidden">
					<a href={`${GITHUB_URL}`} className="transition hover:scale-105 hover:text-yellow-400"><BsGithub /></a>
					<a href={"/"} className="transition hover:scale-105 hover:text-yellow-400"><BsTwitter /></a>
					<a href={"/"} className="transition hover:scale-105 hover:text-yellow-400"><BsInstagram /></a>
					<a href={"/"} className="transition hover:scale-105 hover:text-yellow-400"><BsYoutube /></a>
				</div>
				<div className="flex gap-3">
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
				<LoginBox />
			</div>

		</div>
	);
};

export default Navbar;
