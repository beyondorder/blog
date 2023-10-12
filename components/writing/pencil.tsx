import {BsPencil} from "react-icons/bs";
import {useCallback} from "react";
import {useRouter} from "next/navigation";
import axios from "axios";
import {useCurrentUserStore} from "@/lib/state";
import toast from "react-hot-toast";

const Pencil= () => {
	const {email} = useCurrentUserStore();
	const router = useRouter();
	const handleWriting = useCallback(()=>{
		axios.get('/api/auth/admin',{params: {email: email}})
			.then(res => {
				const result = res.data?.result
				if(result) {
					router.push("/writing")
				} else {
					toast.error("권한이 없습니다.")
				}
			})
			.catch(error => console.log(error))
	},[]);

	return (
		<div>
			{
          <div className="m-2 flex justify-end">
              <div className=" rounded-full bg-white p-2 hover:text-yellow-500 hover:scale-105 w-fit
               hover:cursor-pointer">
                  <div onClick={handleWriting}>
                      <BsPencil />
                  </div>
              </div>
          </div>
			}
		</div>
	);
};

export default Pencil;
