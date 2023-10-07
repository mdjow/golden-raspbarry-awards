import renderer from "react-test-renderer";

import { StudiosWinCard } from "../../components/StudiosWinCard";
import { projectionsFetchResponseMock } from "./mocks/movieProjections.mock";

jest.mock("../../hooks/useProjections", () => ({
  useProjections: jest.fn(() => ({
    ...projectionsFetchResponseMock.studios,
  })),
}));

test("StudiosWinCard component matches snapshot", () => {
  const component = renderer.create(<StudiosWinCard />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
