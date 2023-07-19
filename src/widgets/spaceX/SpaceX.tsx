import { useEffect } from 'react';

import Pagination from '@mui/material/Pagination';

import { useLazyGetLaunchesQuery } from 'entities/launch';
import { Rocket } from 'entities/rocket';

import styles from './SpaceX.module.scss';

export const SpaceX = () => {
  const [trigger, result] = useLazyGetLaunchesQuery();

  const { isFetching, data } = result;

  useEffect(() => {
    trigger({ date_utc_sort: 'desc' }, true);
  }, []);

  if (isFetching) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Pagination count={data?.totalPages} />
      <div className={styles.cards}>
        {data?.docs?.map(({ name, details, rocket }) => {
          return (
            <Rocket
              key={name}
              id={rocket}
              title={name}
              details={details}
            />
          );
        })}
      </div>
    </>
  );
};
