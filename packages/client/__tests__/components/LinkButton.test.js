import { LinkButton } from "@components";
import { render, screen } from "@testing-library/react";
import { renderWithProviders } from "src/utils/test-utils";
// import userEvent from "@testing-library/user-event";


describe('LinkButton', () => {
    test('should render correctly', async () => {
        renderWithProviders(<LinkButton href={'/employee_link'}>employee</LinkButton>);
        const btn = await screen.getByTestId('link-btn');
        expect(btn.textContent).toBe('employee');
    })

    // test('should navigate to "/employee_link" when clicked', async () => {
    //     render(<LinkButton href={'/employee_link'}>employee</LinkButton>);
    //     const btn = await screen.getByTestId('link-btn');
    //     expect(btn).toHaveAttribute('href', '/employee_link');
    // })
})
