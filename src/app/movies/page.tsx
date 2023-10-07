"use client";

import { useState } from "react";

import { Card } from "../../components/Card";
import { Checkbox } from "../../components/Checkbox";
import { Input } from "../../components/Input";
import { Table } from "../../components/Table";
import { useMovies } from "../../hooks/useMovies";
import { Movie } from "../../types/Movie";

export default function Movies() {
  const [year, setYear] = useState("");
  const [page, setPage] = useState(0);
  const [isWinner, setIsWinner] = useState(false);

  const { movies, totalPages, currentPage } = useMovies({
    page,
    isWinner,
    year,
  });

  const columns = [
    {
      renderHeader: () => <span>ID</span>,
      renderCell: (row: Movie) => <span>{row.id}</span>,
    },
    {
      renderHeader: () => (
        <>
          <span>Year</span>
          <Input
            type="number"
            style={{ maxWidth: 120 }}
            placeholder="Search by year"
            defaultValue={year}
            onChange={(e) => {
              setPage(0);
              setYear(e.target.value);
            }}
          />
        </>
      ),
      renderCell: (row: Movie) => <span>{row.year}</span>,
    },
    {
      renderHeader: () => <span>Title</span>,
      renderCell: (row: Movie) => <span>{row.title}</span>,
    },
    {
      renderHeader: () => (
        <>
          <span>Winner</span>
          <Checkbox
            onChange={(e) => {
              setPage(0);
              setIsWinner(e.target.checked);
            }}
          />
        </>
      ),
      renderCell: (row: Movie) => <span>{row.winner ? "Yes" : "No"}</span>,
    },
  ];

  return (
    <Card>
      <h3>List movies</h3>
      <Table
        columns={columns}
        data={movies}
        pagination={{
          totalPages: totalPages,
          currentPage: currentPage + 1,
          onPageChange: (page: number) => setPage(page - 1),
        }}
      ></Table>
    </Card>
  );
}
