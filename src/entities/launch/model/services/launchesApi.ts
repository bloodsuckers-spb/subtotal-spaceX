import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const launchesApi = createApi({
  reducerPath: 'launchesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.spacexdata.com',
  }),

  endpoints: (build) => ({
    getLaunches: build.query({
      query: ({date_utc_sort}) => {
        return {
          url: 'v5/launches/query',
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
           body: JSON.stringify({
            query: {
              date_utc: {
                $gte: "2015-01-01T00:00:00.000Z",
                $lte: "2019-01-01T00:00:00.000Z"
              }
            },
            options: {
              sort: {
                date_utc: date_utc_sort,
              },
              pagination: false
            }
          }),
        };
      },
    }),
  }),
});

export const { useGetLaunchesQuery, useLazyGetLaunchesQuery } = launchesApi;

