"use client";

import { Card } from "./card";
import { CustomTable } from "./custom-table";
import { useProjections } from "../hooks/useProjections";
import { Producer } from "../types/producer";

export default function MaxMinWinIntervalForProducersCard() {
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
      <CustomTable columns={columns} data={max}></CustomTable>
      <p>Minimum </p>
      <CustomTable columns={columns} data={min}></CustomTable>
    </Card>
  );
}
