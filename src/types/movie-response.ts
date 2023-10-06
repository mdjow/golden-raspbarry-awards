import { Movie } from "./movie";
import { Pagination, Sort } from "./pagination";

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
