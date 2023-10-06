import { Producer } from "./producer";
import { Studio } from "./studio";

export interface ProjectionsFetchResponse {
  studios?: Studio[];
  min?: Producer[];
  max?: Producer[];
  years?: {
    year: number;
    winnerCount: number;
  };
}
