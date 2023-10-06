import { useQuery } from "react-query";

import { MoviesFetchResponse } from "../types/movie-response";
import api from "../services/api";

interface UseMoviesProps {
  page: number;
  isWinner: boolean;
  year: string;
  size?: number;
}

export function useMovies({ page, isWinner, year, size = 20 }: UseMoviesProps) {
  const { data } = useQuery(["movies", year, isWinner], async () => {
    const response = await api.get<MoviesFetchResponse>(
      `/movies?page=${page}&size=${size}&winner=${isWinner}&year=${year}`
    );

    return response.data;
  });

  return {
    movies: data,
  };
}
