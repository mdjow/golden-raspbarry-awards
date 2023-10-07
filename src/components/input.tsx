import styled from "styled-components";

export const Input = styled.input<{ $inputColor?: string }>`
  padding: 6px;
  margin: 6px 0;
  color: ${(props) => props.$inputColor};
  border-color: var(--shapes-dark);
  border-radius: 3px;
`;
