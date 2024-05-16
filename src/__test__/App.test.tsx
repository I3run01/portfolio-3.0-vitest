import App from "src/App"
import { it, expect } from 'vitest';
import { renderWithProviders } from 'src/__test__/renderWithProviders.tsx';

it("Renders the main page", () => {
    renderWithProviders(<App />)

    expect(true).toBeTruthy();
})
