import { rest } from 'msw';

import { fetch, Headers, Request, Response } from 'cross-fetch';

import { rocketImages, launchesData } from './data';

global.fetch = fetch;
global.Headers = Headers;
global.Request = Request;
global.Response = Response;

export const handlers = [
  rest.post(`https://api.spacexdata.com/v5/launches/query`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(launchesData));
  }),

  rest.get(
    'https://api.spacexdata.com/v4/rockets/5e9d0d95eda69973a809d1ec',
    (req, res, ctx) => {
      return res(ctx.status(200), ctx.json(rocketImages));
    }
  ),
];
