/** @format */

import React, { useState } from "react"

interface props {
	className?: string
	name: string
	active?: boolean
	Icon: any
}
const NavItem: React.FC<props> = ({ active, name, Icon }) => {
	const [hover, setHover] = useState(false)

	const _handleHover = () => {
		setHover(!hover)
	}

	return (
		<div
			className="items-center pl-11 justify-between flex cursor-pointer mb-6 duration-500"
			onMouseEnter={_handleHover}
			onMouseLeave={_handleHover}
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
