import axios from 'axios';
import React, {useCallback} from 'react';
import {AiOutlineDelete} from "react-icons/ai";
import {useCurrentUserStore} from "@/lib/state";
import {useRouter} from "next/navigation";
import toast from "react-hot-toast";

const ADMIN_EMAIL = process.env.ADMIN_EMAIL;

type DeletePostProps = {
	id: string | undefined;
}
const DeletePost:React.FC<DeletePostProps> = ({
	id
}) => {
	const {email} = useCurrentUserStore();
	const router = useRouter();
	const deletePost = useCallback(()=>{
		axios.get('/api/auth/admin',{params: {email: email}})
			.then(async (res) => {
				const result = res.data?.result
				if(result) {
					confirm("정말 삭제하시겠습니까?") &&(
						await axios.delete('/api/writing/delete', {params: {id: id}})
							.then(()=>{
								toast.success("삭제되었습니다.")
								router.push("/Blog")
							}).catch(error => console.log(error))
					)
				} else {
					toast.error("권한이 없습니다.")
				}
			})
			.catch(error => console.log(error))
	},[id,  email, router])

	return (
		<div className="flex justify-end mb-2">
			<div
				className="text-white text-2xl rounded-full p-1
			bg-rose-500 w-fit hover:text-rose-500 hover:bg-white hover:scale-105 hover:cursor-pointer"
				onClick={deletePost}>
				<AiOutlineDelete />
			</div>
		</div>

	);
};

export default DeletePost;
