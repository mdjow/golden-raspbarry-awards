"use client";

import { Card } from "./Card";
import { Table } from "./Table";
import { useProjections } from "../hooks/useProjections";
import { Producer } from "../types/Producer";

export function MaxMinWinIntervalForProducersCard() {
  const { max, min } = useProjections({
    projection: "max-min-win-interval-for-producers",
  });

  const columns = [
    {
      renderHeader: () => <span>Producer</span>,
      renderCell: (row: Producer) => <span>{row.producer}</span>,
    },
    {
      renderHeader: () => <span>Interval</span>,
      renderCell: (row: Producer) => <span>{row.interval}</span>,
    },
    {
      renderHeader: () => <span>Previous Year</span>,
      renderCell: (row: Producer) => <span>{row.previousWin}</span>,
    },
    {
      renderHeader: () => <span>following Year</span>,
      renderCell: (row: Producer) => <span>{row.followingWin}</span>,
    },
  ];

  return (
    <Card>
      <h3>Producers with longest and shortest interval between wins </h3>
      <p>Maximum </p>
      <Table columns={columns} data={max}></Table>
      <p>Minimum </p>
      <Table columns={columns} data={min}></Table>
    </Card>
  );
}
