import React from "react";
import { render, type RenderOptions } from "@testing-library/react";
import { LazyMotion, domAnimation } from "framer-motion";
import { setMockPathname } from "./next-navigation-mock";

type Options = RenderOptions & {
  route?: string;
};

export function renderWithSite(ui: React.ReactElement, { route = "/", ...options }: Options = {}) {
  setMockPathname(route);
  return render(
    <LazyMotion features={domAnimation} strict>
      {ui}
    </LazyMotion>,
    options,
  );
}
