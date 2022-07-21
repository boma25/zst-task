/** @format */

import { render } from "@testing-library/react"
import Layout from "../component/layout"
import { useAppDispatch, useAppSelector } from "../store/hooks"
import { testStateSelector } from "../store/test-utiles"

jest.mock("../store/hooks")

describe("layout", () => {
	beforeEach(() => {
		useAppSelector.mockImplementation(testStateSelector)
		useAppDispatch.mockImplementation(() => jest.fn)
	})

	afterEach(() => jest.clearAllMocks())

	it("should render the layout component", () => {
		render(<Layout />)
	})
})
