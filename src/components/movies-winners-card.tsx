"use client";

import { useState } from "react";

import { Card } from "./card";
import { Input } from "./input";
import { CustomTable } from "./custom-table";
import { useMovies } from "../hooks/useMovies";
import { Movie } from "../types/movie";

export function WinnerMovies() {
  const [year, setYear] = useState("");

  const { movies } = useMovies({ page: 0, isWinner: true, year, size: 6 });

  const columns = [
    {
      renderHeader: () => <span>ID</span>,
      renderCell: (row: Movie) => <span>{row.id}</span>,
    },
    {
      renderHeader: () => <span>Year</span>,
      renderCell: (row: Movie) => <span>{row.year}</span>,
    },
    {
      renderHeader: () => <span>Title</span>,
      renderCell: (row: Movie) => <span>{row.title}</span>,
    },
  ];

  return (
    <Card>
      <h3>List movies winners by year</h3>
      <Input
        type="number"
        placeholder="Search by year"
        defaultValue={year}
        onChange={(e) => setYear(e.target.value)}
      />
      <CustomTable columns={columns} data={movies}></CustomTable>
    </Card>
  );
}
