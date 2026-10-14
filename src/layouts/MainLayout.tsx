import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useUiSounds } from "../hooks/useUiSounds";

export default function MainLayout() {
  const { pathname, search } = useLocation();
  useUiSounds();

  // Scroll to top on route or query changes (e.g. /apps?category=finance)
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname, search]);

  return (
    // overflow-x-clip avoids breaking position:sticky (unlike overflow-x-hidden)
    <div className="flex min-h-dvh flex-col overflow-x-clip bg-secondary text-primary">
      <Navbar />
      <main className="site-main flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
