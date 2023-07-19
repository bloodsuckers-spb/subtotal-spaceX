import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { type LaunchesQueryResult } from '../../types';

type UseLazyQueryOptions = {
  dateUTCSort: 'desc' | 'asc';
  currentPage: number;
};

export const launchApi = createApi({
  reducerPath: 'spacexApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.spacexdata.com',
  }),

  endpoints: (build) => ({
    getLaunches: build.query<LaunchesQueryResult, UseLazyQueryOptions>({
      query: ({ dateUTCSort, currentPage }) => {
        return {
          url: 'v5/launches/query',
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            query: {
              date_utc: {
                $gte: '2015-01-01T00:00:00.000Z',
                $lte: '2019-01-01T00:00:00.000Z',
              },
            },
            options: {
              sort: {
                date_utc: dateUTCSort,
              },
              page: currentPage,
            },
          }),
        };
      },
    }),
  }),
});

export const { useGetLaunchesQuery } = launchApi;
