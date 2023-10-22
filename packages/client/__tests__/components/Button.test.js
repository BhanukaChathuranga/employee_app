import { Button } from "@components";
import { screen } from "@testing-library/react";
import { renderWithProviders } from '../../src/utils/test-utils';
// import userEvent from "@testing-library/user-event";

describe('Button', () => {
    test('should render correctly', async () => {
        renderWithProviders(<Button title="employee">employee</Button>);
        const btn = await screen.getByTestId('btn');
        expect(btn.textContent).toBe('employee');
    })
})
