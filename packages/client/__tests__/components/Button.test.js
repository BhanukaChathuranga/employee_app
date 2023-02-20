import { Button } from "@components";
import { render, screen } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";

describe('Button', () => {
    test('should render correctly', async () => {
        render(<Button title="employee">test</Button>);
        expect(screen.getByRole('button')).toHaveTextContent('test');
        expect(1).toBe(1);
    })
})
