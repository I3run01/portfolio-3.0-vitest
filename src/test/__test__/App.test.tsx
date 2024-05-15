import '@testing-library/jest-dom'
import App from "src/App"
import { renderWithProviders } from 'src/test/utils/renderWithProviders.tsx';

test('demo', () => {
    expect(true).toBe(true)
})

test("Renders the main page", () => {
    renderWithProviders(<App />)

    expect(true).toBeTruthy();
})