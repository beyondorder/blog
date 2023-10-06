import React from 'react';
import Link from "next/link";

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
              max-w-2xl
              w-full
              rounded-lg
              p-4
              shadow-md
              mb-5
              hover:cursor-pointer
              hover:scale-x-105
              active:scale-x-100
              outline-none
            "
				 href={`/writing/${id}`}>
					<div className="mb-2 text-lg">{title}</div>
					<div className="text-sm ">{new Date(createdAt).toDateString()}</div>
				</Link>
		</>
	);
};

export default Card;
