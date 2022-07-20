/** @format */

import { createSlice } from "@reduxjs/toolkit"
import { toast } from "react-toastify"
import { listings, loginCred } from "../../utils/data"

const initialState = {
	search: "",
	availableList: listings,
	isLoggedIn: false,
	isLoading: false,
}

export const appSlice = createSlice({
	name: "app",
	initialState,
	reducers: {
		searchList: (state, { payload }) => {
			state.availableList = listings.filter(
				(value) =>
					value.name.toLowerCase().includes(payload.toLowerCase()) ||
					value.description.toLowerCase().includes(payload.toLowerCase()) ||
					value.contact_name.toLowerCase().includes(payload.toLowerCase())
			)
		},
		login: (state, { payload }) => {
			state.isLoading = true

			if (
				payload.username.toLowerCase() === loginCred.username &&
				payload.password === loginCred.password
			) {
				state.isLoggedIn = true
				state.isLoading = false
				toast.dark("login successful")
			} else {
				toast.dark("invalid username or password")
				state.isLoading = false
			}
		},
	},
})

export const { searchList, login } = appSlice.actions

export default appSlice.reducer
