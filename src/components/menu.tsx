"use client";

import Link from "next/link";
import styled from "styled-components";

export const Menu = styled.header`
  background-color: var(--menu-background-color);
  display: flex;
  flex-direction: column;
  width: 200px;
  padding: 8px;
`;

export const MenuLink = styled(Link)`
  color: var(--menu-name-color);
  font-size: 16px;
  line-height: 200%;
`;
