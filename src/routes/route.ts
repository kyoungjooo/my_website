import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Project from "../pages/Project";
import ProjectDatail from "../pages/ProjectDetail";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [{ index: true, Component: Home }],
  },
  {
    path: "project",
    Component: Project,
  },
  {
    path: "project/:id",
    Component: ProjectDatail,
  },
]);

export default router;
