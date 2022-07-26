/** @format */

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { toast } from "react-toastify"
import { RootState } from ".."
import { listings, loginCred } from "../../utils/data"

export const initialState = {
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
	},
	extraReducers: (builders) => {
		builders.addCase(login.pending, (state) => {
			state.isLoading = true
		})
		builders.addCase(login.rejected, (state) => {
			state.isLoading = false
		})
		builders.addCase(login.fulfilled, (state, { payload }) => {
			state.isLoading = false
			state.isLoggedIn = true
		})
	},
})

const _handleError = (error: any, altMessage?: string) => {
	const temp = error.data ? error.data : error
	if (typeof error === "string") {
		return toast.error(`${error} please check your internet`)
	}
	delete temp["status_code"]

	if (typeof temp !== "object") {
		toast.error(`Something went wrong, please try again`)
	} else {
		Object?.keys(temp)?.map((key) => {
			temp[key][0] &&
				toast.error(
					temp[key][0] || altMessage || "An error occured, try again."
				)
			return key
		})
	}
}

const login = createAsyncThunk(
	"login",
	async (payload: { email: string; password: string }) => {
		try {
			const response: any = await new Promise((resolve, reject) =>
				fetch(`${process.env.REACT_APP_BASE_URL}/auth/login/`, {
					method: "POST",
					body: JSON.stringify(payload),
					headers: {
						"Content-Type": "application/json",
					},
				}).then(async (res) => {
					const response = {
						data: await res.json(),
						status: res.status,
						statusText: res.statusText,
						ok: res.ok,
						headers: res.headers,
					}
					if (res.ok) {
						resolve(response)
					} else {
						reject(response)
					}
				})
			)

			toast.dark("login successful")
			return response.data
		} catch (error: any) {
			_handleError(error)
			throw error
		}
	}
)

export const appState = (state: RootState) => state.app

export const { searchList } = appSlice.actions
export { login }

export default appSlice.reducer
