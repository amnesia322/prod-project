import { Button, ThemeButton } from 'shared/ui/Button';
import { render, screen } from '@testing-library/react';

describe('Button', () => {
    test('simple test', () => {
        render(<Button>TEST</Button>);
        expect(screen.getByText('TEST')).toBeInTheDocument();
    });

    test('with theme', () => {
        render(<Button theme={ThemeButton.CLEAR}>TEST</Button>);
        expect(screen.getByText('TEST')).toHaveClass('clear');
        screen.debug();
    });
});
