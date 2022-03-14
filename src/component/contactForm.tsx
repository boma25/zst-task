/** @format */

import React from "react"
import { AiOutlineCloseCircle } from "react-icons/ai"

interface props {
	onSubmit: any
	_handleClose: any
	className?: string
}

const ContactForm: React.FC<props> = ({
	onSubmit,
	_handleClose,
	className,
}) => {
	return (
		<div
			className={`${className} flex z-10 absolute h-screen w-11/12 md:w-9/12 top-0 justify-center items-center`}
		>
			<form
				className="bg-gray-800 lg:h-1/2 h-1/3 drop-shadow md:w-1/2 w-10/12 flex flex-col items-center py-8 rounded"
				onSubmit={onSubmit}
			>
				<div
					className="w-11/12 mb-4 cursor-pointer flex justify-end"
					onClick={_handleClose}
				>
					<AiOutlineCloseCircle className="text-white" />
				</div>
				<p className="text-3xl font-bold text-white">Contact</p>
				<input
					type="text"
					placeholder="full name"
					className="bg-transparent border-white rounded border px-2 mt-4 text-white focus:outline-none"
					required
				/>

				<input
					type="email"
					placeholder="Email Address"
					className="bg-transparent border-white rounded border px-2 mt-4 text-white focus:outline-none"
					required
				/>

				<input
					type="tel"
					placeholder="phone number"
					className="bg-transparent border-white rounded border px-2 mt-4 text-white focus:outline-none"
					required
				/>
				<input
					type="submit"
					value="submit"
					className="bg-transparent border-white rounded border px-2 mt-4 text-white"
				/>
			</form>
		</div>
	)
}

export default ContactForm
