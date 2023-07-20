import { render, screen } from '@testing-library/react';

import { Header } from 'widgets';

describe('Test for Header component', () => {
  test('is Header renders clearly', () => {
    render(<Header />);
    expect(screen.getByTestId('header')).toBeInTheDocument();
  });
});
