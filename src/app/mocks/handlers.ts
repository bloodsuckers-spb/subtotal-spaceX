import { rest } from 'msw';

import { fetch, Headers, Request, Response } from 'cross-fetch';

global.fetch = fetch;
global.Headers = Headers;
global.Request = Request;
global.Response = Response;

export const handlers = [
  rest.get(`https://api.spacexdata.com/v5/launches/query`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([])
    );
  }),

];
