import { events } from "@/lib/events";
import Image from "next/image";
import { notFound } from "next/navigation";

export default async function EventPage({ params }: { params: { slug: string } }) {
  // unwrap params
  const { slug } = await params;

  const event = events.find((e) => e.slug === slug);

  if (!event) return notFound();

  return (
    <div className="max-w-4xl mx-auto space-y-6 text-white">
      <h1 className="text-4xl font-bold">{event.title}</h1>
      <p className="text-white/60">{event.date}</p>

      <Image
        src={event.poster}
        alt={event.title}
        width={800}
        height={1000}
        unoptimized
      />

      <p className="text-lg text-white/80">{event.description}</p>
    </div>
  );
}
