import { SpaceX } from 'entities/launch/ui';

import { AppProvider } from './providers';

export const App = () => {
  return (
    <AppProvider>
      <div className="app">
        <SpaceX />
      </div>
    </AppProvider>
  );
};
