import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "@material-tailwind/react";
import RootLayout from "./routes/RootLayout";
import PostList from "./routes/PostList";
import NewPost from "./routes/NewPost";
import "./index.css";
import RankList from "./routes/RankList";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <PostList />,
        children: [{ path: "/new", element: <NewPost />, children: [] }],
      },
      { path: "/", element: <RankList />, children: [] },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
