import { useRoutes } from "react-router-dom";

import { Home } from "../pages/Home";
import { HQs } from "../pages/HQs";
import { IndividualHQ } from "../pages/IndividualHQ";

export const MainRoutes = () => {
  return useRoutes([
    { path: "/", element: <Home /> },
    { path: "/comics", element: <HQs /> },
    { path: "/comics/:id", element: <IndividualHQ /> },
  ]);
};
