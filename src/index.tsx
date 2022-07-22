/** @format */

import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import { store } from "./store"
import { Provider } from "react-redux"
import { ToastContainer } from "react-toastify"

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<ToastContainer
				position="top-center"
				autoClose={5000}
				hideProgressBar
				newestOnTop
				closeOnClick
				rtl={false}
				pauseOnFocusLoss={false}
				draggable
				pauseOnHover={false}
			/>
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById("root")
)
