import { render, screen } from '@testing-library/react';
import Page from './page';

describe('Page Component', () => {
  test('renders template text', () => {
    render(<Page />);
    expect(screen.getByText('template')).toBeInTheDocument();
  });
});
