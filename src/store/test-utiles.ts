/** @format */

import { listings } from "../utils/data"

const state = {
	app: {
		search: "",
		availableList: listings,
		isLoggedIn: false,
		isLoading: false,
	},
}

export const testStateSelector = (f: Function) => f(state)
