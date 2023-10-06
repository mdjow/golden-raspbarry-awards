import React from "react";
import styled from "styled-components";

import {
  PaginationControls,
  PaginationControlsProps,
} from "./table-pagination-controls";

interface Column<T> {
  renderHeader: () => React.ReactNode;
  renderCell: (row: T) => React.ReactNode;
}

interface CustomTableProps<T> {
  columns: Column<T>[];
  data?: T[];
  pagination?: PaginationControlsProps;
}

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  th,
  td {
    border: 1px solid #ccc;
    padding: 10px;
    text-align: left;
  }

  th {
    background-color: #f2f2f2;
    text-align: center;
  }

  th * {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
`;

export function CustomTable<T>({
  columns,
  data = [],
  pagination,
}: CustomTableProps<T>) {
  return (
    <>
      <Table>
        <thead>
          <tr>
            {columns.map((column, index) => (
              <th key={index}>
                <div>{column.renderHeader()}</div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {columns.map((column, colIndex) => (
                <td key={colIndex}>{column.renderCell(row)}</td>
              ))}
            </tr>
          ))}
          <tr>
            {!data?.length && (
              <td colSpan={4} style={{ textAlign: "center" }}>
                no results found
              </td>
            )}
          </tr>
        </tbody>
      </Table>
      {pagination && <PaginationControls {...pagination} />}
    </>
  );
}
