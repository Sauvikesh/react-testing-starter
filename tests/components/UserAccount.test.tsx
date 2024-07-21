import { render, screen } from '@testing-library/react'
import UserAccount from '../../src/components/UserAccount'
import { User } from '../../src/entities'

describe('UserAccount', () => {

    const normalUser: User = {
        id: 76,
        name: 'suave'
    };

    const adminUser: User = {
        id: 12,
        name: 'suave',
        isAdmin: true,
    };

    it('should display the user name', () => {
        render(<UserAccount user={normalUser} />);

        const name = screen.getByText('suave');

        expect(name).toBeInTheDocument();
    });

    it('should display the edit button with admin user', () => {
        render(<UserAccount user={adminUser} />);

        const button = screen.queryByRole('button');

        expect(button).toBeInTheDocument();
        expect(button).toHaveTextContent(/edit/i);
    });

    it('should not display the edit button with normal user', () => {
        render(<UserAccount user={normalUser} />);

        const button = screen.queryByRole('button');

        expect(button).not.toBeInTheDocument();
    });
})