import { render, screen, fireEvent } from "@testing-library/react"
import Accordion from "./Accordion"


describe('Accordion', () => {

    beforeEach(() => {
        render(
            <Accordion title="Hello world!" >
                <h3>Content</h3>
                <p>Some paragraph in the text</p>
            </Accordion>
        )
    }
    )

    test('should show the accordion', () => { expect(screen.getByText("Hello world!")).toBeDefined() })
    test('should not show content at the start', () => { expect(screen.queryByText(/paragraph/i)).toBeNull() })
    test('should show content when click the button the first time', () => {  
        const button = screen.getByText(/open/i)
        fireEvent.click(button)
        expect(screen.getByText(/paragraph/i)).toBeDefined()
    })
    test('should hide the content when click the button a second time', () => {  
        const button = screen.getByText(/open/i)
        fireEvent.click(button)
        fireEvent.click(button)
        expect(screen.queryByText(/Content/i)).toBeNull()
     })
})