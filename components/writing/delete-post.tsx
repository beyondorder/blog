import axios from 'axios';
import React from 'react';
import {AiOutlineDelete} from "react-icons/ai";

const ADMIN_EMAIL = process.env.ADMIN_EMAIL;

type DeletePostProps = {
	email: string | null;
	id: string | undefined;
}
const DeletePost:React.FC<DeletePostProps> = ({
email, id
}) => {
	const deletePost = () => {
		confirm("정말 삭제하시겠습니까?") &&
		axios.delete('/api/writing/delete', {params: {id}})
	}
	return (
		<>
			{
				email === ADMIN_EMAIL && (
					<div
						className="text-white text-2xl"
						onClick={deletePost}>
						<AiOutlineDelete />
					</div>
				)
			}
		</>
	);
};

export default DeletePost;
