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
  {
    id: "dynamic-price-update",
    title: "Dynamic Price Update",
    path: "/problems/dynamic-price-update",
    Component: lazy(() => import("./dynamic-price-update")),
  },
  {
    id: "filter-results",
    title: "Filter Results",
    path: "/problems/filter-results",
    Component: lazy(() => import("./filter-results")),
  },
  {
    id: "toast",
    title: "Toast",
    path: "/problems/toast",
    Component: lazy(() => import("./toast")),
  },
  {
    id: "service-based-toast",
    title: "Service Based Toast",
    path: "/problems/service-based-toast",
    Component: lazy(() => import("./service-based-toast")),
  },
];
