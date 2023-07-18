import { configureStore, combineReducers } from '@reduxjs/toolkit';

import { launchesApi } from 'entities/launch';

const rootReducer = combineReducers({
  [launchesApi.reducerPath]: launchesApi.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,

    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(launchesApi.middleware),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
