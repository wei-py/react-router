import { createBrowserRouter } from "react-router";
import Layout from "../layout";
import Home from "../pages/Home";

const sleep = (ms: number) =>
  new Promise((resolve: (value: unknown) => void) => setTimeout(resolve, ms));

const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      {
        path: "home/:id",
        // index: true,
        Component: Home,
      },
      {
        path: "about",
        lazy: async () => {
          await sleep(1000);
          const module = await import("../pages/About");
          return {
            Component: module.default,
          };
        },
        // Component: About,
      },
    ],
  },
]);

export default router;
