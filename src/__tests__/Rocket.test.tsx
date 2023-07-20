import { screen } from '@testing-library/react';

import { renderWithProviders } from 'app/providers/renderWithProviders';

import { Rocket } from 'entities/rocket';

const id = '5e9d0d95eda69973a809d1ec';
const title = 'GPS III SV01';
const details = "SpaceX's twenty-first flight of 2018";
const date_utc = '2018-12-23T13:51:00.000Z';

describe('Tests for Rocket component', () => {
  it('is Rocket works clearly', async () => {
    renderWithProviders(
      <Rocket
        id={id}
        title={title}
        details={details}
        date_utc={date_utc}
      />
    );

    // Initialy check is loader in the document
    expect(screen.getByTestId('circular-indeterminate')).toBeInTheDocument();

    // Waiting for data from the API and checking is title renders clearly
    expect(await screen.findByText(/GPS III SV01/)).toBeInTheDocument();

    // Checking is subtitle renders clearly
    expect(await screen.findByText(/2018-12-23/)).toBeInTheDocument();

    // Checking is definition renders clearly
    expect(
      screen.getByText(/SpaceX's twenty-first flight of 2018/)
    ).toBeInTheDocument();

  });
});
