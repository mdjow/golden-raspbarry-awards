"use client";

import { useMemo } from "react";

import { Card } from "./card";
import { CustomTable } from "./custom-table";
import { Studio } from "../types/studio";
import { useProjections } from "../hooks/useProjections";

export function StudiosWinCard() {
  const { studios = [] } = useProjections({
    projection: "studios-with-win-count",
  });

  const slicedStudios = useMemo(() => studios.slice(0, 3), [studios]);

  const columns = [
    {
      renderHeader: () => <span>Name</span>,
      renderCell: (row: Studio) => <span>{row.name}</span>,
    },
    {
      renderHeader: () => <span>Win Count</span>,
      renderCell: (row: Studio) => <span>{row.winCount}</span>,
    },
  ];

  return (
    <Card>
      <h3>Top 3 studios with winners</h3>
      <CustomTable columns={columns} data={slicedStudios}></CustomTable>
    </Card>
  );
}
