import { renderHook } from "@testing-library/react";
import { useQuery } from "react-query";

import { useMovies } from "../../hooks/useMovies";

jest.mock("react-query", () => ({
  useQuery: jest.fn(),
}));

describe("useMovies", () => {
  it("should return default values when data is not available", () => {
    (useQuery as jest.Mock).mockReturnValueOnce({ data: {} });

    const { result } = renderHook(() =>
      useMovies({ page: 1, isWinner: true, year: "2023" })
    );

    expect(result.current.movies).toEqual([]);
    expect(result.current.totalPages).toEqual(0);
    expect(result.current.currentPage).toEqual(0);
  });

  it("should return data when it is available", async () => {
    const mockData = {
      content: [{ id: 1, title: "Movie 1" }],
      totalPages: 2,
      number: 1,
    };
    (useQuery as jest.Mock).mockReturnValueOnce({ data: mockData });

    const { result } = renderHook(() =>
      useMovies({ page: 1, isWinner: true, year: "2023" })
    );

    expect(result.current.movies).toEqual(mockData.content);
    expect(result.current.totalPages).toEqual(mockData.totalPages);
    expect(result.current.currentPage).toEqual(mockData.number);
  });
});
