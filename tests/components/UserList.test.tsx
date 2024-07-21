import { render, screen } from '@testing-library/react'
import UserList from '../../src/components/UserList';
import { User } from '../../src/entities';


describe('UserList', () => {
    it('should render no users when users array is empty', () => {
        render(<UserList users={[]} />);

        expect(screen.getByText(/no users/i)).toBeInTheDocument();
    });

    it('should render a list of users', () => {
        const users: User[] = [
            {id: 1, name: 'sav'},
            {id: 2, name: 'kash'},
        ]
        render(<UserList users={users} />);

        users.forEach(user => {
            const link = screen.getByRole('link', {name: user.name}); // this gets the <a> tag based on the name it's displaying
            expect(link).toBeInTheDocument();
            expect(link).toHaveAttribute('href', `/users/${user.id}`) // checks if the <a> tag is linking to the right thing
        })
    });
})