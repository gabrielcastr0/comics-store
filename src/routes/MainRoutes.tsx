import { useRoutes } from "react-router-dom";

import { Home } from "../pages/Home";
import { HQs } from "../pages/HQs";

export const MainRoutes = () => {
  return useRoutes([
    { path: "/", element: <Home /> },
    { path: "/hqs", element: <HQs /> },
  ]);
};
