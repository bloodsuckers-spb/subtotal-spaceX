import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

import styles from './CircularIndeterminate.module.scss';

export const CircularIndeterminate = () => {
  return (
    <div className={styles.wrapper} data-testid="circular-indeterminate">
      <Box sx={{ display: 'flex' }}>
        <CircularProgress />
      </Box>
    </div>
  );
};
