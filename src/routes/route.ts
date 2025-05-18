import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Work from "../pages/Work";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [{ index: true, Component: Home }],
  },
  {
    path: "work",
    Component: Work,
  },
]);

export default router;
