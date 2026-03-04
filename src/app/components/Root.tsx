import { Outlet } from "react-router";
import { Navigation } from "./Navigation";
import { ScrollProgress } from "./ScrollProgress";
import { PageLoader } from "./PageLoader";
import { useEffect } from "react";
import { Toaster } from "sonner";

export function Root() {
  useEffect(() => {
    // Force dark mode on mount
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <>
      <PageLoader />
      <div className="min-h-screen bg-gradient-to-br from-black via-slate-950 to-blue-950">
        <Toaster position="top-right" theme="dark" />
        <ScrollProgress />
        <Navigation />
        <Outlet />
      </div>
    </>
  );
}