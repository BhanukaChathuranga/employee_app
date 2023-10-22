import { NavBar } from "@components";
import { screen } from "@testing-library/react";
import { renderWithProviders } from "src/utils/test-utils";
// import userEvent from "@testing-library/user-event";

describe('NavBar', () => {
    test('should render correctly', async () => {
        renderWithProviders(<NavBar title={'employee'} />);
        const navbar = await screen.getByTestId('navbar');
        expect(navbar.textContent).toBe('employee');
    })

    test('should match the correct styles', async () => {
        // 5D3891
        renderWithProviders(<NavBar title={'employee'} />);
        const navbar = await screen.getByTestId('navbar');
        console.log(navbar.style);
        expect(navbar.style).toHaveStyle("background: #5D3891");
    })
})
