import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout";
import Home from "../../Pages/Home/Home";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
    ],
  },
]);
