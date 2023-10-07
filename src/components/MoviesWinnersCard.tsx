"use client";

import { useState } from "react";

import { Card } from "./Card";
import { Input } from "./Input";
import { Table } from "./Table";
import { useMovies } from "../hooks/useMovies";
import { Movie } from "../types/Movie";

export function WinnerMoviesCard() {
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
      <Table columns={columns} data={movies}></Table>
    </Card>
  );
}
