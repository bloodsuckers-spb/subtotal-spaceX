import { screen, fireEvent } from '@testing-library/react';

import { renderWithProviders } from 'app/providers/renderWithProviders';

import { SpaceX } from 'widgets';

import { launchesData } from 'app/mocks/data';

describe('Tests for SpaceX component', () => {
  it('is SpaceX component renders clearly', async () => {
    // Render component
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

  it('is Pagination work clearly', async () => {
    // Render component
    renderWithProviders(<SpaceX />);

    // Initialy check is loader in the document
    expect(screen.getByTestId('circular-indeterminate')).toBeInTheDocument();

    // Waiting for data from the API
    expect(await screen.findByText(/SV01/)).toBeInTheDocument();

    // Checking the rendering of the pagiation
    expect(screen.getByTestId(/pagination/)).toBeInTheDocument();

    // Checking the rendering of the pagiation button 1
    const paginationButtonOne = screen.getByText('1');
    expect(paginationButtonOne).toBeInTheDocument();

    // Checking the rendering of the pagiation button 2
    const paginationButtonTwo = screen.getByText('2');
    expect(paginationButtonTwo).toBeInTheDocument();

    // click on pagiation button 2
    fireEvent.click(paginationButtonTwo);

    // Checking is loader in the document
    expect(screen.getByTestId('circular-indeterminate')).toBeInTheDocument();

    // Waiting for data from the API
    expect(await screen.findByText(/SES-12/)).toBeInTheDocument();

    // click on pagiation button 1
    fireEvent.click(paginationButtonOne);

    // Getting data from cache without request to API
    expect(await screen.findByText(/SV01/)).toBeInTheDocument();
  });
});
