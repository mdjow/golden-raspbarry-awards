import renderer from "react-test-renderer";

import { WinnerMoviesCard } from "../../components/MoviesWinnersCard";
import { winnerMoviesMock } from "./mocks/movieProjections.mock";

jest.mock("../../hooks/useMovies", () => ({
  useMovies: jest.fn(() => ({
    ...winnerMoviesMock,
  })),
}));

test("WinnerMoviesCard component matches snapshot", () => {
  const component = renderer.create(<WinnerMoviesCard />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
