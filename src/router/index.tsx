import { createBrowserRouter } from "react-router";
import Layout from "../layout";
import About from "../pages/About";
import Home from "../pages/Home";

const router = createBrowserRouter([
  {
    path: "/index",
    Component: Layout,
    children: [
      {
        path: "home",
        Component: Home,
      },
      {
        path: "about",
        Component: About,
      },
    ],
  },
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/about",
    Component: About,
  },
]);

export default router;
