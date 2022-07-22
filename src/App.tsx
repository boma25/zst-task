/** @format */

import { useState } from "react"
import "./App.css"
import Layout from "./component/layout/index"
import { BsSearch } from "react-icons/bs"
import Listing from "./component/listing"
import "react-toastify/dist/ReactToastify.css"
import { AiOutlineMenu } from "react-icons/ai"
import { appState, searchList } from "./store/slice/appslice"
import { useAppDispatch, useAppSelector } from "./store/hooks"

function App() {
	const dispatch = useAppDispatch()
	const { availableList, search } = useAppSelector(appState)
	const [isOpen, setIsOpen] = useState(false)

	const _handleClose = () => setIsOpen(!isOpen)

	return (
		<Layout {...{ isOpen, setIsOpen }}>
			<div className="flex items-center justify-between w-[95%]">
				<AiOutlineMenu
					onClick={_handleClose}
					className="text-xl lg:hidden text-blue-500 w-1/12 cursor-pointer "
				/>
				<div className="lg:hidden flex items-center bg-white drop-shadow rounded-lg py-2 px-2 w-11/12 space-x-4 text-gray-500">
					<BsSearch />
					<input
						type="search"
						className="focus:outline-none  w-10/12 bg-transparent"
						placeholder="Search listings"
						onChange={(e) => dispatch(searchList(e.target.value))}
						value={search}
					/>
				</div>
			</div>
			<div className=" hidden lg:flex items-center bg-white drop-shadow rounded-lg py-2 px-2 w-11/12 space-x-4 text-gray-500">
				<BsSearch />
				<input
					type="search"
					className="focus:outline-none  w-10/12 bg-transparent"
					placeholder="Search listings"
					onChange={(e) => dispatch(searchList(e.target.value))}
					value={search}
				/>
			</div>
			<div className="w-11/12 mt-12">
				<p className="font-bold text-3xl" data-testid="title">
					Listings
				</p>

				<div className="mt-8">
					{availableList.map((value, index) => (
						<Listing {...value} key={`listing-${index}`} />
					))}
					{availableList.length === 0 && search !== "" && (
						<div className="md:w-full w-[500px]  flex">
							<p className="font-bold text-3xl text-center text-gray-500">
								Listing Not Found
							</p>
						</div>
					)}
				</div>
			</div>
		</Layout>
	)
}

export default App
