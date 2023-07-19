import { useState } from 'react';

import Pagination from '@mui/material/Pagination';

import { useGetLaunchesQuery } from 'entities/launch';
import { Rocket } from 'entities/rocket';

import { BasicSelect, CircularIndeterminate } from 'shared/ui';

import { type SelectChangeEvent } from '@mui/material/Select';

import styles from './SpaceX.module.scss';

export const SpaceX = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [dateUTCSort, setDateUTCSort] = useState<'desc' | 'asc'>('desc');

  const { data, isFetching } = useGetLaunchesQuery({
    dateUTCSort,
    currentPage,
  });

  if (isFetching) {
    return <CircularIndeterminate />;
  }

  const handleChange = (event: React.ChangeEvent<unknown>, page: number) => {
    event.preventDefault();
    setCurrentPage(page);
  };

  const onSelectChange = ({ target: { value } }: SelectChangeEvent) => {
    if (value === 'desc' || value === 'asc') {
      setDateUTCSort(value);
    }
  };

  return (
    <div className={styles.content}>
      <div className={styles.heading}>
        <Pagination
          count={data?.totalPages}
          page={currentPage}
          onChange={handleChange}
        />
        <div className={styles.selectBox}>
          <BasicSelect
            onSelectChange={onSelectChange}
            options={['desc', 'asc']}
            currentOption={dateUTCSort}
          />
        </div>
      </div>
      <div className={styles.cards}>
        {data?.docs.map(({ name, details, rocket }) => {
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
    </div>
  );
};
