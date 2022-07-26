/** @format */

import { rest } from "msw"
import { loginCred } from "../utils/data"
import { invalidCred, loginSuccessRes } from "../utils/sampleRes"

export const handlers = [
	rest.post(
		`${process.env.REACT_APP_BASE_URL}/auth/login/`,
		async (req, res, ctx) => {
			const body = await req.json()
			if (
				body.email === loginCred.email &&
				body.password === loginCred.password
			) {
				return res(ctx.status(200), ctx.json(loginSuccessRes))
			}
			return res(
				ctx.status(400, "Unable to log in with provided credentials"),
				ctx.json(invalidCred)
			)
		}
	),
]
