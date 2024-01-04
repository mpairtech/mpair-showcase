import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./app.css";

import { RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import BookingPage from "./pages/BookingPage";
import router from "./routes/Route";



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
