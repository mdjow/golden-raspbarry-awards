"use client";

import styled from "styled-components";

import { MaxMinWinIntervalForProducersCard } from "../components/MaxMinWinIntervalForProducersCard";
import { WinnerMoviesCard } from "../components/MoviesWinnersCard";
import { YearsWithMultipleWinnersCard } from "../components/YearsWithMultipleWinnersCard";
import { StudiosWinCard } from "../components/StudiosWinCard";

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  margin: 20px;

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
  }
`;

export default function Dashboard() {
  return (
    <GridContainer>
      <YearsWithMultipleWinnersCard />
      <StudiosWinCard />
      <MaxMinWinIntervalForProducersCard />
      <WinnerMoviesCard />
    </GridContainer>
  );
}
