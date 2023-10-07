"use client";

import { ReactNode } from "react";
import { QueryClientProvider } from "react-query";
import { ThemeProvider } from "styled-components";

import { queryClient } from "../services/queryClient";

interface DefaultProvidersProps {
  children: ReactNode;
}

const theme = {
  desktopBreakpoint: "968px",
  tableBreakpoint: "768px",
};

export function DefaultProviders({ children }: DefaultProvidersProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </QueryClientProvider>
  );
}
