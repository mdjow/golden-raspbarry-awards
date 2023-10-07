"use client";

import React from "react";
import Link from "next/link";
import styled from "styled-components";
import { usePathname } from "next/navigation";

interface MenuItemProps {
  href: string;
  label: string;
}

const MenuWrapper = styled.div`
  ul {
    display: flex;
    flex-direction: column;
    list-style: none;
    min-width: 160px;
    padding: 8px;
    height: 100%;

    background-color: var(--bg-secondary);

    li {
      margin-right: 20px;
      font-size: 16px;
      line-height: 200%;

      &.active {
        font-weight: bold;
      }
    }
  }
`;

const MenuItem: React.FC<MenuItemProps> = ({ href, label }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <li className={isActive ? "active" : ""}>
      <Link href={href}>{label}</Link>
    </li>
  );
};

interface MenuProps {
  items: MenuItemProps[];
}

export function Menu({ items }: MenuProps) {
  return (
    <MenuWrapper>
      <ul>
        {items.map((item, index) => (
          <MenuItem key={index} href={item.href} label={item.label} />
        ))}
      </ul>
    </MenuWrapper>
  );
}
