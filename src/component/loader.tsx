/** @format */

import React from "react"

const Loader: React.FC = () => (
	<div className="w-8 h-8 rounded-full animate-pulse bg-transparent border-2 flex justify-center items-center mt-4 border-white">
		<div className="w-6 h-6 rounded-full animate-pulse bg-transparent border-2 flex justify-center items-center border-white">
			<div className="w-4 h-4 rounded-full animate-pulse bg-transparent border flex justify-center items-center border-white">
				<div className="w-2 h-2 rounded-full bg-white" />
			</div>
		</div>
	</div>
)

export default Loader
