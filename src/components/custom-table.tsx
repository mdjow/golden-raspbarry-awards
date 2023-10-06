import React from "react";
import styled from "styled-components";

interface Column<T> {
  renderHeader: () => React.ReactNode;
  renderCell: (row: T) => React.ReactNode;
}

interface CustomTableProps<T> {
  columns: Column<T>[];
  data?: T[];
}

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;

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
    width: 100%;
  }
`;

export function CustomTable<T>({ columns, data }: CustomTableProps<T>) {
  if (!data?.length) {
    return <center>no results found</center>;
  }

  return (
    <Table>
      <thead>
        <tr>
          {columns.map((column, index) => (
            <th key={index}>{column.renderHeader()}</th>
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
      </tbody>
    </Table>
  );
}
