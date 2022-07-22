/** @format */

import React, { useState } from "react"
import { useAppDispatch, useAppSelector } from "../store/hooks"
import { appState, login } from "../store/slice/appslice"
import Loader from "./loader"

interface props {
	className?: string
	testId?: string
}

const LoginForm: React.FC<props> = ({ className, testId }) => {
	const [formData, setFormData] = useState({
		username: "",
		password: "",
	})
	const { isLoading } = useAppSelector(appState)
	const dispatch = useAppDispatch()

	const _handleLogin = (e: any) => {
		e.preventDefault()
		dispatch(login(formData))
		setFormData({ ...formData, password: "" })
	}

	const _handleChange = (e: any) => {
		setFormData({ ...formData, [e.target.name]: e.target.value })
	}

	return (
		<div
			data-testid={testId}
			className={`${className} flex z-10 absolute h-screen w-full top-0 justify-center items-center bg-black bg-opacity-60`}
		>
			<form
				className="bg-gray-800 lg:h-1/2 h-1/3 drop-shadow w-10/12 md:w-1/3  flex flex-col justify-center items-center py-8 rounded"
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
