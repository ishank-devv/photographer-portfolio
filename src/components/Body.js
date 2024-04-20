import React from "react";
import AdminLogin from "./AdminLogin";
import AdminPanel from "./AdminPanel";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import PhotoGallery from "./PhotoGallery";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <PhotoGallery />,
    },
    {
      path: "/adminlogin",
      element: <AdminLogin />,
    },
    {
      path: "/adminpanel",
      element: <AdminPanel />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
