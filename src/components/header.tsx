"use client";

import styled from "styled-components";
import { Saira_Stencil_One } from "next/font/google";

const sairaStencilOne = Saira_Stencil_One({
  weight: ["400"],
  subsets: ["latin"],
});

const MainHeader = styled.header`
  background-color: var(--header-background-color);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px;
`;

const HeaderName = styled.a`
  color: var(--header-name-color);
  font-weight: 400;
  font-size: 26px;
  line-height: 150%;
`;

const Header: React.FC = () => {
  return (
    <MainHeader>
      <HeaderName className={sairaStencilOne.className}>
        Golden Raspberry Awards
      </HeaderName>
    </MainHeader>
  );
};

export default Header;
