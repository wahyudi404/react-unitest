import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import App from "../App";

describe("App Test Unit", () => {
    test("h1 harus Wahyudi", () => {
        render(<App/>)
        const webTitle = screen.getByTestId("web__title")
        expect(webTitle).toHaveTextContent(/^Wahyudi$/)
    })

    test("button harus 1", () => {
        render(<App/>)
        const buttonCount = screen.getByTestId("button__count__inc")
        fireEvent.click(buttonCount)
        expect(buttonCount.textContent).toBe("1")
    })

    test("button harus -1", () => {
        render(<App/>)
        const buttonCount = screen.getByTestId("button__count__dec")
        fireEvent.click(buttonCount)
        expect(buttonCount.textContent).toBe("-1")
    })
})