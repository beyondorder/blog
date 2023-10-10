import React from 'react';
import {MENU} from "@/lib/data";
import Link from "next/link";
import {BsGithub, BsInstagram, BsPencil, BsTwitter, BsYoutube} from "react-icons/bs";

const Footer = () => {
	return (
		<div className=" w-full border-t-2 border-neutral-200/30 pt-5 bg-gray-950 text-neutral-400 flex justify-center">
			<div className="flex flex-col w-1/2 sm:w-[80%]">
				<div className="border-b-[1px] border-yellow-500 flex justify-between">
					<div className="flex flex-col p-4 h-30 min-h-full text-center w-40">
						<div className="border-b-[1px] border-neutral-400 mb-2 mit-w-full text-center">MENU</div>
						{
							MENU.map(menu=>(
								<React.Fragment key={menu}>
									<Link href={`/${menu}`}  className="list-none hover:text-yellow-400">{menu}</Link>
								</React.Fragment>
							))
						}
					</div>
					<div className="text-2xl whitespace-nowrap font-extrabold text-white">
						MAKE FUN
					</div>
					<div className="flex flex-col  p-4 w-40">
						<div className="border-b-[1px] border-neutral-400 mb-2 text-center">CONTACT</div>
						<div>Seoul, Korea</div>
						<div>ohyun_pro@naver.com</div>
					</div>
				</div>
				<div className="h-20 flex mt-5 text-2xl gap-3">
					<Link href={"/"} className="transition hover:scale-105 hover:text-yellow-400"><BsGithub /></Link>
					<Link href={"/"} className="transition hover:scale-105 hover:text-yellow-400"><BsTwitter /></Link>
					<Link href={"/"} className="transition hover:scale-105 hover:text-yellow-400"><BsInstagram /></Link>
					<Link href={"/"} className="transition hover:scale-105 hover:text-yellow-400"><BsYoutube /></Link>
				</div>
			</div>
		</div>
	);
};

export default Footer;
