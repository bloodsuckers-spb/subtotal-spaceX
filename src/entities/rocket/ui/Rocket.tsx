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

  return (
    <ImgMediaCard
      title={title}
      details={details}
      imageUrl={data?.flickr_images[1] ?? ''}
    />
  );
};
