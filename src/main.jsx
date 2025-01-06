import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "@material-tailwind/react";
import RootLayout from "./routes/RootLayout";
import PostList from "./routes/PostList";
import RankList from "./routes/RankList";
import "./index.css";
import BlogForm from "./routes/BlogForm";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: (
          <>
            <PostList />
            <RankList />
          </>
        ),
        children: [],
      },
      {
        path: "create",
        element: (
          <>
            <BlogForm />
          </>
        ),
        children: [],
      },
      {
        path: "/movie:id",
        element: (
          <>
            <BlogForm />
          </>
        ),
        children: [],
      },
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

lkjlkjlk;
