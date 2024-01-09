import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Root/Root";
import ErrorPage from "./ErrorPage/ErrorPage";
import AppliedJobs from "./AppliedJobs/AppliedJobs";
import Blog from "./Blog/Blog";
import Statistics from "./Statistics/Statistics";
import ViewDetails from "./ViewDetails/ViewDetails";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/appliedJobs",
        element: <AppliedJobs></AppliedJobs>,
        loader: () => fetch("jobs.json"),
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/",
        element: <Statistics></Statistics>,
      },
      {
        path: "/:id",
        element: <ViewDetails></ViewDetails>,
        loader: () => fetch("jobs.json"),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
