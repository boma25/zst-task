/** @format */

import { screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import Layout from "../component/layout"
import { renderWithProviders } from "../store/test-utiles"

describe("layout", () => {
	it("should render the layout component", () => {
		renderWithProviders(<Layout />)
	})

	it("should render the login component if user is not login", () => {
		renderWithProviders(<Layout />)
		expect(screen.getByTestId("login-form")).toBeDefined()
	})

	it("should  not render the login component if user is login", () => {
		renderWithProviders(<Layout />)
		userEvent.type(screen.getByPlaceholderText(/username/i), "user")
		userEvent.type(screen.getByPlaceholderText(/password/i), "password")
		userEvent.click(screen.getByDisplayValue(/submit/i))
		expect(screen.queryByTestId("login-form")).toBeNull()
	})
})
