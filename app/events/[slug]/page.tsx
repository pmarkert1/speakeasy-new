import { events } from "@/lib/events";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function EventPage({ params }: { params: { slug: string } }) {
  // unwrap params
  const { slug } = await params;

  const event = events.find((e) => e.slug === slug);

  if (!event) return notFound();

  return (
    <div className="font-mono h-screen md:fixed font-thin mx-auto space-y-6 text-white grid grid-cols-1 md:grid-cols-2 pr-2">
     
                 {/*Left Col*/}
      <div className="md:sticky md:w-[90%] md:overflow-y-scroll md:h-screen whitespace-pre-line scroll-smooth">
      <h1 className="text-2xl">{event.title}</h1><br/>
      <p className="text-white/60">{event.date}</p><br/>
      <div className="relative">
        
      <div className="text-white/80">
        <ul className="list-disc pl-5 space-y-2">
          {event.list.map((li, index) => (
            <li key={index}>{li}</li>
          ))}
        </ul>
      </div>

      </div>
      </div>
               <Link href="#images"
                className="sticky bottom-10 w-full md:hidden border-white bg-black text-center border-[0.5px]">
                  Images
                </Link>

            {/*Right Col*/}
            <div className="md:sticky md:overflow-y-scroll md:min-h-screen flex flex-col gap-3" id="images">
              {event.images.map((img, index) => (
                <div key={index} className="border-[0.5px] border-white">
                  <Image
                    src={img}
                    width={1000}
                    height={1000}
                    alt={`Event image ${index}`}
                  />
                </div>
            ))}
          </div>
    </div>
  );
}
