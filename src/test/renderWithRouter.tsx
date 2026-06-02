import React from "react";
import { render, type RenderOptions } from "@testing-library/react";
import { MemoryRouter, type MemoryRouterProps } from "react-router-dom";
import { LazyMotion, domAnimation } from "framer-motion";

type Options = RenderOptions & {
  route?: string;
  routerProps?: MemoryRouterProps;
};

export function renderWithRouter(ui: React.ReactElement, { route = "/", routerProps, ...options }: Options = {}) {
  return render(
    <MemoryRouter initialEntries={[route]} {...routerProps}>
      <LazyMotion features={domAnimation} strict>
        {ui}
      </LazyMotion>
    </MemoryRouter>,
    options,
  );
}
