/** @format */

import React, { useState } from "react"

interface props {
	className?: string
	name: string
	active?: boolean
	Icon: any
	onClick: any
}
const NavItem: React.FC<props> = ({ active, name, Icon, onClick }) => {
	const [hover, setHover] = useState(false)

	const _handleHover = () => {
		setHover(!hover)
	}

	return (
		<div
			className="items-center lg:pl-11 pl-3 justify-between flex cursor-pointer mb-6 duration-300"
			onMouseEnter={_handleHover}
			onMouseLeave={_handleHover}
			onClick={onClick}
		>
			<div
				className={`flex space-x-2 items-center text-sm text-gray-500 duration-500 ${
					(hover || active) && "font-bold text-black"
				}`}
			>
				<Icon className={`${(hover || active) && "text-blue-500"}`} />
				<p> {name}</p>
			</div>

			<div
				className={` ${
					hover || active ? "visible" : "invisible"
				}  h-6 rounded-l w-[2px] bg-blue-500 duration-500`}
			/>
		</div>
	)
}

export default NavItem
