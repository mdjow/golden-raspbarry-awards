import React from "react";
import styled from "styled-components";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import LastPageIcon from "@mui/icons-material/LastPage";

export interface PaginationControlsProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--bg-primary);
  padding: 2px;
  border: 1px solid var(--shapes);
  border-top: none;

  button {
    margin: 0 5px;
    padding: 8px;
    border: none;
    background-color: transparent;
    cursor: pointer;
    transition: all 0.3s;

    &:hover {
      color: var(--primary);
    }

    &:disabled {
      cursor: not-allowed;
      opacity: 0.5;
    }

    &.selected {
      background-color: var(--primary);
      color: white;
      border-radius: 4px;
    }
  }
`;

export const PaginationControls: React.FC<PaginationControlsProps> = ({
  totalPages,
  currentPage,
  onPageChange,
}) => {
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <PaginationWrapper>
      <button
        data-testid="pagination-previous-btn"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <KeyboardArrowLeftIcon />
      </button>
      <button
        data-testid="pagination-first-page"
        onClick={() => onPageChange(1)}
        disabled={currentPage === 1}
      >
        <FirstPageIcon />
      </button>
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          disabled={page === currentPage}
          className={page === currentPage ? "selected" : ""}
        >
          {page}
        </button>
      ))}
      <button
        data-testid="pagination-next-btn"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <KeyboardArrowRightIcon />
      </button>
      <button
        data-testid="pagination-last-page"
        onClick={() => onPageChange(totalPages)}
        disabled={currentPage === totalPages}
      >
        <LastPageIcon />
      </button>
    </PaginationWrapper>
  );
};
