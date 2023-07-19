type Launch = {
  date_utc: string;
  name: string;
  details: string;
  rocket: string;
};

export type LaunchesQueryResult = {
  docs: Launch[];
  hasPrevPage: boolean;
  hasNextPage: boolean;
  page: number;
  prevPage: null | number;
  nextPage: null | number;
  totalPages: number;
};
