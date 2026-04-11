"use client";

import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import Header from "../_components/Header";
import Nav from "../_components/Nav";

export default function EventsLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (

      <main className="pt-20 pl-2">{children}</main>

  );
}
