import { useGetRocketByIdQuery } from '../model/services';

import { ImgMediaCard } from 'shared/ui';

type Props = {
  id: string;
  title: string;
  details: string;
};

export const Rocket = ({ id, title, details }: Props) => {
  const { data, isFetching } = useGetRocketByIdQuery(id);

  if (isFetching) {
    return <div>Load...</div>;
  }

  return (
    <ImgMediaCard
      title={title}
      details={details}
      imageUrl={data?.flickr_images[1] ?? ''}
    />
  );
};
