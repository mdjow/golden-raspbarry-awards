import React from "react";
import styled from "styled-components";

interface TableRowProps {
  data: (string | number)[];
}

const TH = styled.th`
  background-color: #f2f2f2;
  padding: 10px;
  text-align: left;
  border-bottom: 1px solid #dddddd;
`;

const TD = styled.td`
  padding: 10px;
  border-bottom: 1px solid #ddd;
`;

const TableContainer = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
`;

interface TableProps {
  headings: string[];
  rows: (string | number)[][];
}

const TableRow: React.FC<TableRowProps> = ({ data }) => {
  return (
    <tr>
      {data.map((item, index) => (
        <TD key={index}>{item}</TD>
      ))}
    </tr>
  );
};

const TableComponent: React.FC<TableProps> = ({ headings, rows }) => {
  return (
    <TableContainer>
      <thead>
        <tr>
          {headings.map((heading, index) => (
            <TH key={index}>{heading}</TH>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, index) => (
          <TableRow key={index} data={row} />
        ))}
      </tbody>
    </TableContainer>
  );
};

export default TableComponent;
