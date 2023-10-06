"use client";

import WinnerMovies from "@/components/movies-winners-card copy";
import StudiosWinCard from "../components/studios-win-card";

export default function Dashboard() {
  return (
    <div>
      <StudiosWinCard />
      <WinnerMovies />
    </div>
  );
}
