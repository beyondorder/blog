'use client'
import React, {useCallback} from 'react';
import Link from "next/link";
import {useCurrentUserStore} from "@/lib/state";
import {useRouter} from "next/navigation";
import toast, { Toaster } from "react-hot-toast";

const LoginBox = () => {
	const router = useRouter();
	const { email, setEmail } = useCurrentUserStore();

	const handleLogout = useCallback(()=>{
		setEmail(null);
		toast.success("로그아웃 되었습니다.",{
			position: "top-center"
		})
		router.push("/")
	},[setEmail, router])

	return (
		<div className="overflow-x-hidden bg-neutral-800 px-2 py-1 rounded-full flex gap-2 text-sm">
			{
				email && (
					<div className="right-5 bottom-5 text-white/80">
						<div
							onClick={handleLogout}
							className="transition hover:scale-105 hover:text-yellow-400 hover:cursor-pointer"
						>Logout</div>
					</div>
				)
			}
			{
				!email && (
					<div className="right-5 bottom-5 text-white/80">
						<Link href={`/login`} className="transition hover:scale-105 hover:text-yellow-400">Login</Link>
					</div>
				)
			}

			<div className=" border-r-[1px] border-neutral-700 ="></div>
			<div className="right-5 bottom-5 text-white/80">
				<Link href={`/signin`} className="transition hover:scale-105 hover:text-yellow-400">Sign in</Link>
			</div>
		</div>
	);
};

export default LoginBox;
