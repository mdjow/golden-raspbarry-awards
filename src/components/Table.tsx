import React from "react";
import styled from "styled-components";

import {
  PaginationControls,
  PaginationControlsProps,
} from "./TablePaginationControls";

interface Column<T> {
  renderHeader: () => React.ReactNode;
  renderCell: (row: T) => React.ReactNode;
}

interface TableProps<T> {
  columns: Column<T>[];
  data?: T[];
  pagination?: PaginationControlsProps;
}

const TableWrapper = styled.table`
  width: 100%;
  border-collapse: collapse;
  table-layout: fixed;

  th,
  td {
    border: 1px solid var(--shapes);
    padding: 5px;
    text-align: left;
    min-width: 30px;
  }

  th {
    background-color: var(--bg-primary);
    text-align: center;
  }

  th * {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export function Table<T>({ columns, data = [], pagination }: TableProps<T>) {
  return (
    <>
      <TableWrapper>
        <thead>
          <tr>
            {columns.map((column, index) => (
              <th key={index}>
                <span>{column.renderHeader()}</span>
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
      </TableWrapper>
      {pagination && <PaginationControls {...pagination} />}
    </>
  );
}
