import React from 'react';
import Image from "next/image";
import Link from "next/link";
const Navbar = () => {

	const menu = ["about", "blog", "contact"]

	return (
		<div
			className="
				flex flex-col justify-evenly items-center
				bg-rose-500/80
				h-44
				">
			<div>
				<Link href={"/"} className="font-extrabold text-2xl">
					MOON WALKING DEV
				</Link>
			</div>
			<div className="flex gap-2 absolute pt-28">
				{
					menu.map(menu=>(
						<React.Fragment key={menu}>
							<Link href={`/${menu}`} className="hover:text-white">
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
