import { createBrowserRouter, Link } from "react-router";
import Layout from "../layout";
import Error from "../layout/error";
import Home from "../pages/Home";
import log from "../utils/log";

const sleep = (ms: number) =>
  new Promise((resolve: (value: unknown) => void) => setTimeout(resolve, ms));

const data = [
  { name: "John Doe", age: 18 },
  { name: "Jane Doe", age: 20 },
  { name: "Bob Smith", age: 25 },
];

const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      {
        path: "home",
        // index: true,
        Component: Home,
        loader: async () => {
          await sleep(1000);
          return {
            data,
            success: true,
          };
        },

        action: async ({ request }) => {
          const json = await request.json();
          data.push(json);
          log(json);
          // const name = formData.get("name");
          // const age = formData.get("age");
          // log(name, age);
          await sleep(1000);
          return {
            message: "提交成功",
            success: true,
          };
        },
      },
      {
        path: "about",
        loader: async () => {
          return true;
          // throw {
          //   message: "加载失败",
          //   status: 404,
          //   statusText: "Not Found",
          //   data: null,
          // };
        },
        ErrorBoundary: Error,
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
  {
    path: "*",
    Component: () => {
      return (
        <div>
          404 Not Found
          <br />
          <Link to="/home">返回首页</Link>
        </div>
      );
    },
  },
]);

export default router;
