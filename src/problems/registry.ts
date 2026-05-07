import { lazy } from "react";
import type { ComponentType, LazyExoticComponent } from "react";

export type ProblemDefinition = {
  id: string;
  title: string;
  path: string;
  /** Code-split entry: only this problem’s bundle loads on its route. */
  Component: LazyExoticComponent<ComponentType>;
};

export const problems: ProblemDefinition[] = [
  {
    id: "searchbox",
    title: "Search Box",
    path: "/problems/searchbox",
    Component: lazy(() => import("./search-box")),
  },
  {
    id: "dynamic-form-renderer",
    title: "Dynamic Form Renderer",
    path: "/problems/dynamic-form-renderer",
    Component: lazy(() => import("./dynamic-form-renderer")),
  },
  {
    id: "modal-popup",
    title: "Modal Popup",
    path: "/problems/modal-popup",
    Component: lazy(() => import("./modal-popup")),
  },
];
