import { ImgMediaCard, CircularIndeterminate } from 'shared/ui';

import { useGetRocketByIdQuery } from '../model/services';

type Props = {
  id: string;
  title: string;
  details: string;
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
    <ImgMediaCard
      title={title}
      details={details}
      imageUrl={data?.flickr_images[photoRandomIndex] ?? ''}
    />
  );
};
