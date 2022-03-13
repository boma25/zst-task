/** @format */

import React, { useState } from "react"
import { toast } from "react-toastify"
import { loginCred } from "../utils/data"
import Loader from "./loader"

interface props {
	className?: string
	setIsLoggedIn: any
}

const LoginForm: React.FC<props> = ({ className, setIsLoggedIn }) => {
	const [formData, setFormData] = useState({
		username: "",
		password: "",
	})
	const [isLoading, setIsLoading] = useState(false)

	const _handleLogin = (e: any) => {
		e.preventDefault()
		setIsLoading(true)
		setTimeout(() => {
			setIsLoading(false)
			if (
				formData.username.toLowerCase() === loginCred.username &&
				formData.password === loginCred.password
			) {
				setIsLoggedIn(true)
				return toast.dark("login successful")
			}
			setFormData({ ...formData, password: "" })
			toast.dark("invalid username or password")
		}, 3000)
	}

	const _handleChange = (e: any) => {
		setFormData({ ...formData, [e.target.name]: e.target.value })
	}

	return (
		<div
			className={`${className} flex z-10 absolute h-screen w-full top-0 justify-center items-center bg-black bg-opacity-60`}
		>
			<form
				className="bg-gray-800 h-1/2 drop-shadow w-10/12 md:w-1/3  flex flex-col items-center py-8 rounded"
				onSubmit={_handleLogin}
			>
				<p className="text-3xl font-bold text-white">Login</p>
				<input
					type="text"
					placeholder="username"
					className="bg-transparent border-white rounded border px-2 mt-4 text-white focus:outline-none"
					required
					name="username"
					onChange={_handleChange}
					value={formData.username}
				/>

				<input
					type="password"
					placeholder="password"
					className="bg-transparent border-white rounded border px-2 mt-4 text-white focus:outline-none"
					required
					name="password"
					onChange={_handleChange}
					value={formData.password}
				/>

				{isLoading ? (
					<Loader />
				) : (
					<input
						type="submit"
						value="submit"
						className="bg-transparent border-white rounded border px-2 mt-4 text-white"
					/>
				)}
			</form>
		</div>
	)
}

export default LoginForm
