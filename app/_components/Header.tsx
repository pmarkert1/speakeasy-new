"use client";

import { usePathname } from "next/navigation";
import Nav from "./Nav";
import Link from "next/link";

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
      className="fixed"
    >
      {/* Title */}
      <Link href="/" className="z-1000">
      <h1 className="text-2xl font-mono font-thin text-white cursor-cell ml-2 background-blend-difference">
        {headerText}
      </h1></Link>
    </header>
  );
}
