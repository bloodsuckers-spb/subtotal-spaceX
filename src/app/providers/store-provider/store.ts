import { configureStore, combineReducers } from '@reduxjs/toolkit';

import { launchApi } from 'entities/launch';
import { rocketsApi } from 'entities/rocket';

import type { PreloadedState } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
  [launchApi.reducerPath]: launchApi.reducer,
  [rocketsApi.reducerPath]: rocketsApi.reducer,
});

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,

    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware()
        .concat(launchApi.middleware)
        .concat(rocketsApi.middleware),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
