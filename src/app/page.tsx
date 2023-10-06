"use client";

import styled from "styled-components";

import MaxMinWinIntervalForProducersCard from "../components/max-min-win-interval-for-producers-card";
import WinnerMovies from "../components/movies-winners-card";
import StudiosWinCard from "../components/studios-win-card";
import YearsWithMultipleWinnersCard from "../components/years-with-multiple-winners-card";

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  margin: 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export default function Dashboard() {
  return (
    <GridContainer>
      <YearsWithMultipleWinnersCard />
      <StudiosWinCard />
      <MaxMinWinIntervalForProducersCard />
      <WinnerMovies />
    </GridContainer>
  );
}
