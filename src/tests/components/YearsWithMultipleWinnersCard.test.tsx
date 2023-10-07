import renderer from "react-test-renderer";

import { projectionsFetchResponseMock } from "./mocks/movieProjections.mock";
import { YearsWithMultipleWinnersCard } from "../../components/YearsWithMultipleWinnersCard";

jest.mock("../../hooks/useProjections", () => ({
  useProjections: jest.fn(() => ({
    ...projectionsFetchResponseMock.years,
  })),
}));

describe("YearsWithMultipleWinnersCard", () => {
  it("matches the snapshot", () => {
    const component = renderer.create(<YearsWithMultipleWinnersCard />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
