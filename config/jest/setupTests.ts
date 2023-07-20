import '@testing-library/jest-dom';

import { server } from '../../src/app/mocks/server';

beforeAll(() => server.listen());
afterAll(() => server.close());
afterEach(() => server.resetHandlers());
