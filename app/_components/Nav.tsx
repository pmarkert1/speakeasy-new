"use client";

import Card from "./CardNav";
import { events } from "@/lib/events";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

export default function Nav() {
  return (
    <nav className="w-full bg-black h-full z-30 scroll-smooth font-mono font-thin">
      <motion.div
        id="nav-cards"
        className="pt-10 space-y-6"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {events.map((event) => (
          <motion.div key={event.slug} variants={item}>
            <Card
              href={`/events/${event.slug}`}
              eventTitle={event.title}
              eventDate= {event.date}
              imgAlt={event.title}
              imgSrc={event.poster}
            />
          </motion.div>
        ))}
      </motion.div>
    </nav>
  );
}