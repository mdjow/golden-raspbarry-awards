"use client";

import { Card } from "./Card";
import { Table } from "./Table";
import { useProjections } from "../hooks/useProjections";

export function YearsWithMultipleWinnersCard() {
  const { years } = useProjections({
    projection: "years-with-multiple-winners",
  });

  const columns = [
    {
      renderHeader: () => <span>Year</span>,
      renderCell: (row: { year: number; winnerCount: number }) => (
        <span>{row.year}</span>
      ),
    },
    {
      renderHeader: () => <span>Win Count</span>,
      renderCell: (row: { year: number; winnerCount: number }) => (
        <span>{row.winnerCount}</span>
      ),
    },
  ];

  return (
    <Card>
      <h3>List years with multiple winners</h3>
      <Table columns={columns} data={years}></Table>
    </Card>
  );
}
