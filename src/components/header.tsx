"use client";

import styled from "styled-components";
import { Saira_Stencil_One } from "next/font/google";

const sairaStencilOne = Saira_Stencil_One({
  weight: ["400"],
  subsets: ["latin"],
});

const HeaderWrapper = styled.header`
  background-color: var(--bg-header);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px;
`;

const HeaderName = styled.a`
  color: var(--text-light);
  font-weight: 400;
  font-size: 26px;
  line-height: 150%;
`;

export function Header() {
  return (
    <HeaderWrapper>
      <HeaderName className={sairaStencilOne.className}>
        Golden Raspberry Awards
      </HeaderName>
    </HeaderWrapper>
  );
}
