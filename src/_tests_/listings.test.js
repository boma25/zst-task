/** @format */

import { screen } from "@testing-library/react"
import App from "../App"
import Listing from "../component/listing"
import userEvent from "@testing-library/user-event"
import { renderWithProviders } from "../store/test-utiles"

describe("listing", () => {
	it("should render the listing page", () => {
		renderWithProviders(<App />)
	})

	it("should render at list one listing", () => {
		renderWithProviders(<App />)
		const listings = screen.queryAllByTestId(/listing/i)
		expect(listings.length).toBeGreaterThan(0)
	})

	it("should increase like count if listing is liked", () => {
		renderWithProviders(<Listing />)
		const likeButton = screen.getByTestId("like-button")
		const likeCount = parseInt(likeButton.textContent)
		userEvent.click(likeButton)
		const newLikeCount = parseInt(screen.getByTestId("like-button").textContent)
		expect(newLikeCount).toBeGreaterThan(likeCount)
	})

	it("should decrease like count if listing is liked twice", () => {
		renderWithProviders(<Listing />)
		const likeButton = screen.getByTestId("like-button")
		userEvent.click(likeButton)
		const likeCount = parseInt(screen.getByTestId("like-button").textContent)
		userEvent.click(likeButton)
		const newLikeCount = parseInt(screen.getByTestId("like-button").textContent)
		expect(newLikeCount).toBeLessThan(likeCount)
	})
})
