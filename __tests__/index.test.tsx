import Home from '../src/app/page';
import { render, screen } from '@testing-library/react';

describe('Home Page', () => {
	it('renders the main container', () => {
		render(<Home />);
		const main = screen.getByRole('main');
		expect(main).toBeInTheDocument();
	});

});
