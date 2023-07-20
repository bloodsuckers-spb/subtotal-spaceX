import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import { CircularIndeterminate } from 'shared/ui';

import styles from './Rocket.module.scss';

import { useGetRocketByIdQuery } from '../model/services';

type Props = {
  id: string;
  title: string;
  details: string;
  date_utc: string;
};

export const Rocket = ({ id, title, details }: Props) => {
  const { data, isFetching } = useGetRocketByIdQuery(id);

  if (isFetching) {
    return <CircularIndeterminate />;
  }

  const photoRandomIndex = Math.floor(
    Math.random() * (data?.flickr_images.length ?? 0)
  );

  return (
    <div className={styles.card}>
      <Card sx={{ maxWidth: 300 }}>
        <CardMedia
          component="img"
          alt=""
          height="140"
          image={data?.flickr_images[photoRandomIndex] ?? ''}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
          >
            {title}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
          >
            {details}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};
