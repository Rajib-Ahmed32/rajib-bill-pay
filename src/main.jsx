import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./routes/router";
import "./index.css";
import AuthProvider from "./context/AuthContext";
import { BillProvider } from "./context/BillContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <BillProvider>
      <RouterProvider router={router} />
    </BillProvider>
  </AuthProvider>
);
