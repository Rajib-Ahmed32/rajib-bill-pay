import React from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import { Footer } from "../components/Footer";
import { Toaster } from "sonner";

const MainLayout = () => {
  return (
    <div>
      <Toaster richColors position="top-right" />
      <Header />
      <main className="flex min-h-screen justify-center items-start overflow-y-auto">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
