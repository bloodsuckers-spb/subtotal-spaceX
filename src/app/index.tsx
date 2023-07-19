import { AppProvider } from './providers';

import { SpaceX, Header } from 'widgets';

import './index.scss';

export const App = () => {
  return (
    <AppProvider>
      <div className="app">
        <Header />
        <SpaceX />
      </div>
    </AppProvider>
  );
};
