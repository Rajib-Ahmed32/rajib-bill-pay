import React from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import { Toaster } from "sonner";

const MainLayout = () => {
  return (
    <div>
      <Toaster richColors position="top-right" />
      <Header />
      <main className="">
        <Outlet />
      </main>
      <footer className="mt-[50px] md:mt-[100px]">
        <Footer />
      </footer>
    </div>
  );
};

export default MainLayout;
