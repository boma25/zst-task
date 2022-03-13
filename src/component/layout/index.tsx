/** @format */

import React, { useState } from "react"
import { IoLogoBitbucket } from "react-icons/io"
import { asideList } from "../../utils/data"
import LoginForm from "../loginForm"
import NavItem from "./navitem"

const Layout: React.FC = ({ children }) => {
	const [isLoggedIn, setIsLoggedIn] = useState(false)
	return (
		<>
			<div className="flex">
				<div className="w-2/12 bg-white h-screen  pt-12">
					<div className="flex items-center justify-center pb-16">
						<IoLogoBitbucket className="text-blue-500 text-xl" />
						<p className="font-bold text-xl text-blue-500">ZXT-TASK</p>
					</div>
					{asideList.map((value, index) => (
						<NavItem {...value} key={`aside-${index}`} active={index === 0} />
					))}
				</div>
				<div className="pt-12 flex flex-col items-center w-10/12 pr-12 h-screen overflow-auto">
					{children}
				</div>
			</div>
			{!isLoggedIn && <LoginForm setIsLoggedIn={setIsLoggedIn} />}
		</>
	)
}

export default Layout
