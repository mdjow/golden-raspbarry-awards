import { ProjectionsFetchResponse } from "../../../types/ProjectionsResponse";

export const winnerMoviesMock = {
  movies: [
    { id: 1, year: 2020, title: "Movie A" },
    { id: 2, year: 2021, title: "Movie B" },
    { id: 3, year: 2022, title: "Movie C" },
  ],
};

const studiosWinMock = {
  studios: [
    { name: "Studio A", winCount: 10 },
    { name: "Studio B", winCount: 8 },
    { name: "Studio C", winCount: 6 },
  ],
};

const yearsWithMultipleWinnersMock = {
  years: [
    { year: 2021, winnerCount: 2 },
    { year: 2022, winnerCount: 3 },
  ],
};

const maxMinWinIntervalForProducersMock = {
  max: [
    {
      producer: "Producer A",
      interval: 3,
      previousWin: 2010,
      followingWin: 2013,
    },
    {
      producer: "Producer B",
      interval: 2,
      previousWin: 2015,
      followingWin: 2017,
    },
  ],
  min: [
    {
      producer: "Producer C",
      interval: 1,
      previousWin: 2012,
      followingWin: 2013,
    },
    {
      producer: "Producer D",
      interval: 1,
      previousWin: 2018,
      followingWin: 2019,
    },
  ],
};

export const projectionsFetchResponseMock: ProjectionsFetchResponse = {
  ...winnerMoviesMock,
  ...studiosWinMock,
  ...yearsWithMultipleWinnersMock,
  ...maxMinWinIntervalForProducersMock,
};
