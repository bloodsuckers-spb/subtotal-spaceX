import { Provider } from 'react-redux';

import { setupStore } from './store';

export const StoreProvider = ({ children }: { children?: React.ReactNode }) => (
  <Provider store={setupStore()}>{children}</Provider>
);
