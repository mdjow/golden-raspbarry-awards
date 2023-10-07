import { renderHook } from "@testing-library/react";
import { useQuery } from "react-query";

import { useProjections } from "../../hooks/useProjections";

jest.mock("react-query", () => ({
  useQuery: jest.fn(),
}));

describe("useProjections", () => {
  it("should return default values when data is not available", () => {
    (useQuery as jest.Mock).mockReturnValueOnce({ data: {} });

    const { result } = renderHook(() =>
      useProjections({ projection: "exampleProjection" })
    );

    expect(result.current.max).toEqual(undefined);
  });

  it("should return years with multiple winners when it is available", async () => {
    const mockData = {
      years: [
        {
          year: 2018,
          winnerCount: 2,
        },
        {
          year: 2019,
          winnerCount: 3,
        },
      ],
    };
    (useQuery as jest.Mock).mockReturnValueOnce({ data: mockData });

    const { result } = renderHook(() =>
      useProjections({ projection: "exampleProjection" })
    );

    expect(result.current.years).toEqual(mockData.years);
  });

  it("should return max and min win interval for producers when it is available", async () => {
    const mockData = {
      min: [
        {
          producer: "Producer Name",
          interval: 9,
          previousWin: 2018,
          followingWin: 2019,
        },
      ],
      max: [
        {
          producer: "Producer Name",
          interval: 99,
          previousWin: 1900,
          followingWin: 1999,
        },
      ],
    };

    (useQuery as jest.Mock).mockReturnValueOnce({ data: mockData });

    const { result } = renderHook(() =>
      useProjections({ projection: "exampleProjection" })
    );

    expect(result.current.max).toEqual(mockData.max);
    expect(result.current.min).toEqual(mockData.min);
  });

  it("should return studios with win count when it is available", async () => {
    const mockData = {
      studios: [
        {
          name: "Studio 1",
          winCount: 1,
        },
        {
          name: "Studio 2",
          winCount: 5,
        },
      ],
    };
    (useQuery as jest.Mock).mockReturnValueOnce({ data: mockData });

    const { result } = renderHook(() =>
      useProjections({ projection: "exampleProjection" })
    );

    expect(result.current.studios).toEqual(mockData.studios);
  });
});
