import renderer from "react-test-renderer";
import { render, fireEvent } from "@testing-library/react";

import {
  PaginationControls,
  PaginationControlsProps,
} from "../../components/TablePaginationControls";

const mockOnPageChange = jest.fn();

const defaultProps: PaginationControlsProps = {
  totalPages: 5,
  currentPage: 1,
  onPageChange: mockOnPageChange,
};

test("renders PaginationControls component with correct buttons and functionality", () => {
  const component = renderer.create(<PaginationControls {...defaultProps} />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("calls onPageChange function when a button is clicked", () => {
  const { getByText, getByTestId } = render(
    <PaginationControls {...defaultProps} />
  );

  // Click on page 2 button
  fireEvent.click(getByText("2"));
  expect(mockOnPageChange).toHaveBeenCalledWith(2);

  // Click on next page button
  fireEvent.click(getByTestId("pagination-next-btn"));
  expect(mockOnPageChange).toHaveBeenCalledWith(2);

  // Click on previous page button
  fireEvent.click(getByTestId("pagination-previous-btn"));
  expect(mockOnPageChange).toHaveBeenCalledWith(2);

  // Click on last page button
  fireEvent.click(getByTestId("pagination-last-page"));
  expect(mockOnPageChange).toHaveBeenCalledWith(5);
});
