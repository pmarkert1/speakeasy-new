"use client";

import Card from "./CardNav";
import { events } from "@/lib/events";

export default function Nav() {
  return (
    <nav className="w-full md:w-1/2 bg-black fixed h-full md:border-r z-30 overflow-scroll scroll-smooth">
      <div id="nav-cards" className="pt-10 space-y-6">
        {events.map((event) => (
          <Card
            href={`/events/${event.slug}`}
            key={event.slug}
            eventTitle={event.title}
            imgAlt={event.title}
            imgSrc={event.poster}
          />
        ))}
      </div>
    </nav>
  );
}
