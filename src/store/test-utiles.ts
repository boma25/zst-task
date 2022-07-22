/** @format */

import { listings } from "../utils/data"
import { initialState } from "./slice/appslice"

const state = {
	app: initialState,
}

export const testStateSelector = (f: Function) => f(state)
