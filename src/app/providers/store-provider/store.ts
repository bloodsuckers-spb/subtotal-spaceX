import { configureStore, combineReducers } from '@reduxjs/toolkit';

import { launchApi } from 'entities/launch';
import { rocketsApi } from 'entities/rocket';

const rootReducer = combineReducers({
  [launchApi.reducerPath]: launchApi.reducer,
  [rocketsApi.reducerPath]: rocketsApi.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,

    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware()
        .concat(launchApi.middleware)
        .concat(rocketsApi.middleware),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
