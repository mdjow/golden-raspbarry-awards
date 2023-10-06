import styled from "styled-components";

export const Input = styled.input<{ $inputColor?: string }>`
  padding: 6px;
  color: ${(props) => props.$inputColor};
  border: none;
  border-radius: 3px;
`;
