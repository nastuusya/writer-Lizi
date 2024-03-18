import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./app/App.tsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { MyBlog } from "./app/components/modules/MyBlog.tsx";
import { ContactMe } from "./app/components/modules/ContactMe.tsx";
import { Home } from "./app/components/modules/Home.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/mainContent", element: <Home /> },
      {
        path: "/myBlog",
        element: <MyBlog />,
      },
      { path: "/contactMe", element: <ContactMe /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
