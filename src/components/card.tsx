"use client";

import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;

  background: var(--bg-primary);
  backdrop-filter: blur(10px);
  border-radius: 0px 0px 4px 4px;
  box-shadow: 0 1px 3px 0 var(--shapes-dark);

  padding: 20px;
  min-height: 250px;
  min-width: 250px;

  h3 {
    font-weight: 600;
    font-size: 18px;
    line-height: 200%;
  }

  p {
    font-weight: 400;
    font-size: 18px;
    line-height: 150%;
  }
`;
