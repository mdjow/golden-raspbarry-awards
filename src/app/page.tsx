"use client";

import WinnerMovies from "../components/movies-winners-card";
import StudiosWinCard from "../components/studios-win-card";
import YearsWithMultipleWinnersCard from "../components/years-with-multiple-winners-card";

export default function Dashboard() {
  return (
    <div>
      <YearsWithMultipleWinnersCard />
      <StudiosWinCard />
      <WinnerMovies />
    </div>
  );
}
