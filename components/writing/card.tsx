import React from 'react';
import Link from "next/link";
import {MdDateRange} from "react-icons/md";

type CardProps = {
	id: string;
	title: string;
	createdAt: Date;
}
const Card:React.FC<CardProps> = ({
	id,
	title,
	createdAt
}) => {
	return (
		<>
				<Link
					className="
							w-56
              min-w-max
              h-20
              max-h-40
              rounded-lg
              p-4
              outline-none
              border border-neutral-400
              text-neutral-300
              transition
              hover:cursor-pointer
              hover:bg-neutral-800/50
              hover:scale-x-105
              hover:text-yellow-500
              hover:border-rose-500
              hover:rotate-2
              active:scale-x-95
            "
				 href={`/writing/${id}`}>
					<div className="flex flex-col justify-between items-center gap-2">
						<div className="text-base">{title}</div>
						<div className="flex">
							<MdDateRange />
							<div className="text-xs whitespace-nowrap">{new Date(createdAt).toDateString()}</div>
						</div>
					</div>

				</Link>
		</>
	);
};

export default Card;
