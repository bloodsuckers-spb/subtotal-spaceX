import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

type Props = {
  title: string;
  details: string;
  imageUrl: string;
};

export const ImgMediaCard = ({ title, details, imageUrl }: Props) => {
  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardMedia
        component="img"
        alt=""
        height="140"
        image={imageUrl}
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
  );
};
