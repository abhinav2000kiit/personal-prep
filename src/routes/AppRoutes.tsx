import { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../home/Home";
import { problems } from "../problems/registry";

function RouteFallback() {
  return <p style={{ padding: "1rem" }}>Loading problem…</p>;
}

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {problems.map((p) => {
          const LazyProblem = p.Component;
          return (
            <Route
              key={p.id}
              path={p.path}
              element={
                <Suspense fallback={<RouteFallback />}>
                  <LazyProblem />
                </Suspense>
              }
            />
          );
        })}
      </Routes>
    </BrowserRouter>
  );
}
