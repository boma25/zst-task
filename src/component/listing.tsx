/** @format */

import React, { useState } from "react"
import { ImLocation2 } from "react-icons/im"
import { BiLike } from "react-icons/bi"
import { AiTwotoneLike } from "react-icons/ai"
import ContactForm from "./contactForm"
import { toast } from "react-toastify"

interface props {
	className?: string
	name: string
	imageUrl: string
	description: string
	contact_name: string
	contact_num: number
}
const Listing: React.FC<props> = ({
	name,
	imageUrl,
	description,
	contact_name,
	contact_num,
}) => {
	const [likes, setLikes] = useState(Math.round(Math.random() * 99))
	const [liked, setLiked] = useState(false)
	const [contact, setContact] = useState(false)

	const _handleLike = (e: any) => {
		e.stopPropagation()
		setLiked(!liked)
		if (liked) {
			return setLikes(likes - 1)
		}
		return setLikes(likes + 1)
	}

	const _handleContactShow = () => {
		setContact(!contact)
	}

	const _handleSubmit = () => {
		_handleContactShow()
		toast.dark(
			"your details has been sent to the poster of the listing and they will get in touch with you asap"
		)
	}
	return (
		<>
			<div
				className="flex drop-shadow space-x-4 rounded-lg bg-white mb-4 p-2 hover:border-2 duration-500 border-blue-500 cursor-pointer"
				onClick={_handleContactShow}
			>
				<img
					src={imageUrl}
					alt="listing-view"
					className="md:w-1/6 md:h-[100px] w-1/4 h-[80px] rounded"
				/>
				<div className="flex flex-col justify-between">
					<div>
						<p>{name}</p>
						<div className="flex space-x-1 text-[10px] md:text-xs text-gray-500 items-center">
							<ImLocation2 />
							<p>{description}</p>
						</div>
					</div>

					<div className="flex text-[10px] md:text-xs text-gray-500 space-x-4">
						<p>{contact_name}</p>
						<p>+{contact_num}</p>
					</div>

					<div
						className="flex space-x-2 text-xs text-gray-500 cursor-pointer w-10 h-4"
						onClick={_handleLike}
					>
						{liked ? <AiTwotoneLike /> : <BiLike />} <p>{likes}</p>
					</div>
				</div>
			</div>
			{contact && (
				<ContactForm
					onSubmit={_handleSubmit}
					_handleClose={_handleContactShow}
				/>
			)}
		</>
	)
}

export default Listing
