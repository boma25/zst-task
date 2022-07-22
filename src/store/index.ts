/** @format */

import { configureStore } from "@reduxjs/toolkit"
import appReducer from "./slice/appslice"
// ...
import { combineReducers } from "@reduxjs/toolkit"
import type { PreloadedState } from "@reduxjs/toolkit"

// Create the root reducer separately so we can extract the RootState type
const rootReducer = combineReducers({
	app: appReducer,
})

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
	return configureStore({
		reducer: rootReducer,
		preloadedState,
	})
}

export const store = configureStore({
	reducer: {
		app: appReducer,
	},
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export type AppStore = ReturnType<typeof setupStore>
