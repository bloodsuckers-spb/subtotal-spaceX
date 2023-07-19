import { AppProvider } from './providers';

import { SpaceX } from 'widgets';

import './index.scss';

export const App = () => {
  return (
    <AppProvider>
      <div className="app">
        <SpaceX />
      </div>
    </AppProvider>
  );
};
