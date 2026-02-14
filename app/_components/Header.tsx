"use client";

import { usePathname } from "next/navigation";
import Nav from "./Nav";

type HeaderType = {
  headerText?: string;
  navOpen?: boolean;
  toggleNav?: () => void;
};

export default function Header({
  headerText,
  navOpen,
  toggleNav,
}: HeaderType) {
  const pathname = usePathname();

  // Only show hamburger on event detail pages
  const isEventPage =
    pathname.startsWith("/events/") && pathname !== "/events";

  return (
    <header
      className="
        fixed top-0 left-0
        flex items-center justify-between
        bg-black border-b border-white
        border-r pl-3
        z-50
      "
    >
      {/* Title */}
      <h1 className="text-2xl font-mono text-white cursor-cell pr-3">
        {headerText}
      </h1>

      {/* Hamburger Toggle */}
      {isEventPage && (
        <button
          onClick={toggleNav}
          className="
            text-white text-2xl border-l
            w-12 flex items-center justify-center
            hover:bg-white/20 transition
          "
        >
          {navOpen ? "✕" : "☰"}
        </button>
      )}
    </header>
  );
}
