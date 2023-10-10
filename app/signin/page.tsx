'use client'
import axios from 'axios';
import { motion } from 'framer-motion';
import React, {useCallback, useEffect, useState} from 'react';
import {useForm} from "react-hook-form";
import {BsGithub, BsGoogle} from "react-icons/bs";

interface IFormInput {
	email: string;
	password: string;
}

interface IAuth {
	email: string;
}
const Signin= () => {
	const [currentUser, setCurrentUser] = useState<IAuth>({email: ''});
	const {
		register,
		handleSubmit,
		formState: {errors},
	} = useForm<IFormInput>();
	const onSubmit = useCallback((data: any)=>{
		axios.post('/api/auth', data)
			.then(res=> {
				setCurrentUser(res.data);
			})
			.catch(error=> console.log(error))
		},[]);

	return (
		<div className="flex items-center justify-center min-h-[500px]">
			<motion.div
				className="p-10 bg-white/10 rounded-lg m-10"
				initial={{opacity:0, y:100}}
				animate={{opacity:1, y:0}}
			>
				<div className="text-center mb-5 text-white text-2xl font-semibold">Sign-in</div>
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

							{errors.password && <span>This field is required</span>}
						</div>
						<button type="submit" className="bg-yellow-500 rounded-md p-1 mt-2 hover:text-white">Signin</button>
					</div>
				</form>

			</motion.div>
		</div>
	);
};

export default Signin;
