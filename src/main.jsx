import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import Main from "./components/Main";
import Blog from "./components/Blog";
import Statistics from "./components/Statistics";
import AppliedJobs from "./components/AppliedJobs";
import JobDetail from "./components/JobDetail";
import NotFounde from "./components/NotFounde";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <NotFounde></NotFounde>,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: async () => await fetch("/data.json"),
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "statistics",
        element: <Statistics />,
      },
      {
        path: "appliedjob",
        element: <AppliedJobs />,
        loader: () => fetch("/data.json"),
      },
      {
        path: "job/:id",
        element: <JobDetail />,
        loader: () => fetch("/data.json"),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
