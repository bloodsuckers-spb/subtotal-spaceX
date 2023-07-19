import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { type RocketQueryResult } from '../../types';

export const rocketsApi = createApi({
  reducerPath: 'rocketsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.spacexdata.com',
  }),

  endpoints: (build) => ({
    getRocketById: build.query<RocketQueryResult, string>({
      query: (rocketId: string) => {
        return {
          url: `v4/rockets/${rocketId}`,
          method: 'GET',
        };
      },
    }),
  }),
});

export const { useGetRocketByIdQuery } = rocketsApi;
