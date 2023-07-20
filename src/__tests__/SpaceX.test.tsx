import { screen } from '@testing-library/react';

import { renderWithProviders } from 'app/providers/renderWithProviders';

import { SpaceX } from 'widgets';

import { launchesData } from 'app/mocks/data';

describe('Tests for SpaceX component', () => {
  it('is SpaceX component renders clearly', async () => {
    renderWithProviders(<SpaceX />);

    // Initialy check is loader in the document
    expect(screen.getByTestId('circular-indeterminate')).toBeInTheDocument();

    // Waiting for data from the API
    expect(await screen.findByText(/SV01/)).toBeInTheDocument();

    // Checking how many cards rendered on the page
    expect(screen.getAllByTestId(/card/).length).toBe(launchesData.docs.length);

    // Checking the rendering of the select
    expect(screen.getByTestId(/basic-select/)).toBeInTheDocument();

    // Checking the rendering of the pagiation
    expect(screen.getByTestId(/pagination/)).toBeInTheDocument();
  });
});
