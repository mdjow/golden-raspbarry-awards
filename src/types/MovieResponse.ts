import { Movie } from "./Movie";
import { Pagination, Sort } from "./Pagination";

export interface MoviesFetchResponse {
  content: Movie[];
  pageable: Pagination;
  last: boolean;
  totalPages: number;
  totalElements: number;
  size: number;
  number: number;
  sort: Sort;
  first: boolean;
  numberOfElements: boolean;
  empty: boolean;
}
