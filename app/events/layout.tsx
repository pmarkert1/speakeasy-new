"use client";

import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import Header from "../_components/Header";
import Nav from "../_components/Nav";
import { events } from "@/lib/events";

export default function EventsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const isEventPage =
    pathname.startsWith("/events/") && pathname !== "/events";

  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    setNavOpen(false); // auto-close on route change
  }, [pathname]);

  return (
    <div className="relative h-screen overflow-hidden">
      {/* HEADER */}
      <Header
        headerText="Speakeasy"
        navOpen={navOpen}
        toggleNav={() => setNavOpen(!navOpen)}
      />

      {/* NAV */}
      {isEventPage && (
        <div
          className={`fixed top-0 left-0 h-full w-full
            bg-black z-40
            transition-transform duration-500 ease-in-out
            ${navOpen ? "translate-x-0" : "-translate-x-full"}
          `}
        >
          <Nav />
        </div>
      )}

      {/* PAGE CONTENT */}
      <main className="pt-20 p-10">{}</main>
    </div>
  );
}
