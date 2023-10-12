'use client'
import axios from 'axios';
import { motion } from 'framer-motion';
import React, { useCallback } from 'react';
import { useForm} from "react-hook-form";
import {BsGithub, BsGoogle} from "react-icons/bs";
import {create} from "zustand";
import {useCurrentUserStore} from "@/lib/state";
import {useRouter} from "next/navigation";
import toast from "react-hot-toast";

interface IFormInput {
	email: string;
	password: string;
}

const Login= () => {
	const router = useRouter();
	const email = useCurrentUserStore(state => state.email);
	const setEmail = useCurrentUserStore(state => state.setEmail);

	const {
		register,
		handleSubmit,
		formState: {errors},
	} = useForm<IFormInput>();

	const onSubmit = useCallback((data: any)=>{
		axios.post('/api/auth/login', data)
			.then(res=> {
				setEmail(res.data.email);
				toast.success("로그인되었습니다.",{
					position: "top-center"
				})
				router.push("/");
			})
			.catch(error=> {
				console.log(error.response.status);
				switch (error.response.status) {
					case 404:
						toast.error("존재하지 않는 이메일입니다.");
						return;
					case 401:
						toast.error("비밀번호가 틀렸습니다.");
						return;
					default:
						alert("Login Failed")
				}
			})
	},[router,  setEmail]);

	return (
		<div className="flex items-center justify-center min-h-[500px] transition">
			<motion.div
				className="p-5 bg-white/10 rounded-lg"
				initial={{opacity:0, y:100}}
				animate={{opacity:1, y:0}}
			>
				<div className="text-center mb-5 text-white text-2xl font-semibold">Login</div>
				<form onSubmit={handleSubmit(onSubmit)}>
					<div className="flex flex-col gap-2">
						<div>
							<input	{...register("email", {required: true})}
											type="email"
											id="email"
											placeholder="email"
											className="border border-gray-300 rounded-md p-1"
							/>
							{errors.email && <span>This field is required</span>}
						</div>
						<div>
							<input	{...register("password", {required: true})}
											type="password"
											id="password"
											placeholder="password"
											className="border border-gray-300 rounded-md p-1"
							/>

							{errors.password && (toast.error("This field is required"))}
						</div>
						<button type="submit" className="bg-yellow-500 rounded-md p-1 mt-2 hover:text-white">
							Login
						</button>
					</div>
				</form>
				<div className="flex justify-between text-2xl py-2 gap-2">
					<div className="bg-white text-red-600 w-full flex justify-evenly items-center rounded-md py-1">
						<BsGoogle />
					</div>
					<div className="bg-white text-black w-full flex justify-evenly items-center rounded-md py-1">
						<BsGithub />
					</div>
				</div>

			</motion.div>
		</div>
	);
};

export default Login;
