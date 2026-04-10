"use client";
import Link from "next/link";
import Image from "next/image";

type CardType = {
  href: string;
  eventTitle: string;   
  imgSrc: string;
  imgAlt: string;
  eventDate: string;
};

export default function Card({ href, eventTitle, eventDate, imgSrc, imgAlt }: CardType) {
  return (
    <div className="grid grid-cols-2">
    <Link href={href ?? "/"} className="z-100 pl-2 pt-5 pr-3 transition-all ease-in-out
                                        hover:bg-white/20 cursor-cell">
      <span className="border-b">{eventTitle}</span><br/>
      <span className="">{eventDate}</span>
      </Link>
      {imgSrc && (
        <Image
          src={imgSrc}
          alt={imgAlt || eventTitle}
          width={1000}
          height={1000}
          unoptimized
        />
      )}
    </div>
  );
}