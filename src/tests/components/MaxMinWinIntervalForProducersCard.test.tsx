import renderer from "react-test-renderer";

import { MaxMinWinIntervalForProducersCard } from "../../components/MaxMinWinIntervalForProducersCard";
import { projectionsFetchResponseMock } from "./mocks/movieProjections.mock";

jest.mock("../../hooks/useProjections", () => ({
  useProjections: jest.fn(() => ({
    min: projectionsFetchResponseMock.min,
    max: projectionsFetchResponseMock.max,
  })),
}));

test("MaxMinWinIntervalForProducersCard component matches snapshot", () => {
  const component = renderer.create(<MaxMinWinIntervalForProducersCard />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
