import { Producer } from "./Producer";
import { Studio } from "./Studio";

export interface ProjectionsFetchResponse {
  studios?: Studio[];
  min?: Producer[];
  max?: Producer[];
  years?: {
    year: number;
    winnerCount: number;
  }[];
}
