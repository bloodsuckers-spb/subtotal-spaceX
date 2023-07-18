import { StoreProvider } from './store-provider';

type WithChildren = { children?: React.ReactNode };

type Provider = ({ children }: WithChildren) => React.ReactElement;

const compose = (...providers: Provider[]) => {
  return ({ children }: WithChildren) => {
    return (
      <>
        {providers.reduce((child, Element) => {
          return <Element>{child}</Element>;
        }, children)}
      </>
    );
  };
};

export const AppProvider = compose(StoreProvider);
