/** @format */

import { screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import App from "../App"

import Listing from "../component/listing"
import userEvent from "@testing-library/user-event"
import { renderWithProviders } from "../store/test-utiles"

describe("listing", () => {
	it("should render the app and the search component", () => {
		renderWithProviders(<App />)
		const inputs = screen.getAllByPlaceholderText("Search listings")

		inputs.forEach((input) => {
			expect(input).toBeInTheDocument()
		})
	})

	it("should render the app and the 'Listing' title", () => {
		renderWithProviders(<App />)

		const texts = screen.getAllByText("Listings")

		texts.forEach((text) => {
			expect(text).toBeInTheDocument()
		})
	})

	it("should render the listing component and it should have an image, title, contact and location", () => {
		renderWithProviders(
			<Listing
				name="5 bedroom Duplex in Ajah"
				imageUrl="https://wp.zillowstatic.com/25/real-estate-photo-shutterstock_554000050-ca1d64.jpg"
				description="Beautiful terrace located in a serene environment"
				contact_name="Fred Benjamin"
				contact_num={+2349031561232}
			/>
		)

		const image = screen.getByAltText("listing-view")

		expect(image).toHaveAttribute(
			"src",
			"https://wp.zillowstatic.com/25/real-estate-photo-shutterstock_554000050-ca1d64.jpg"
		)
		expect(screen.getByText("5 bedroom Duplex in Ajah")).toBeInTheDocument()
		expect(
			screen.getByText("Beautiful terrace located in a serene environment")
		).toBeInTheDocument()
		expect(screen.getByText("+2349031561232")).toBeInTheDocument()
	})

	it("should open and close the contact modal", () => {
		renderWithProviders(<App />)

		const listing = screen.getAllByTestId("click-listing")

		userEvent.click(listing[0])
		expect(screen.getByTestId("contact-form")).toBeInTheDocument()

		const close = screen.queryByTestId("close-form")
		expect(close).toBeInTheDocument()

		userEvent.click(close)
		expect(screen.queryByTestId("contact-form")).not.toBeInTheDocument()
	})
})
