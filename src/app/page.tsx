"use client";

import { Card } from "@/components/card";
import TableComponent from "@/components/table";

const headings = ["Year", "Win Count"];
const rows = [
  ["1986", 2],
  ["1990", 2],
  ["2015", 2],
];

export default function Dashboard() {
  return (
    <div>
      <Card>
        <TableComponent headings={headings} rows={rows} />
      </Card>
    </div>
  );
}
