"use client";

import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  background: var(--card-background-color);
  backdrop-filter: blur(10px);
  border-radius: 0px 0px 4px 4px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.14);

  padding: 20px;
  min-height: 250px;
  min-width: 250px;

  h3 {
    font-weight: 300;
    font-size: 16px;
    line-height: 150%;
    color: var(--text-dark-2);
  }

  p {
    font-weight: 600;
    font-size: 14px;
    line-height: 150%;
    color: var(--shapes-dark);
  }
`;