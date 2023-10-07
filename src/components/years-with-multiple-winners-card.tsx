"use client";

import { Card } from "./card";
import { CustomTable } from "./custom-table";
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
      <CustomTable columns={columns} data={years}></CustomTable>
    </Card>
  );
}
