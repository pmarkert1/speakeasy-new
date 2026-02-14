"use client";
import Link from "next/link";
import Image from "next/image";

type CardType = {
  href: string;
  eventTitle: string;   
  imgSrc: string;
  imgAlt: string;
};

export default function Card({ href, eventTitle, imgSrc, imgAlt }: CardType) {
  return (
    <Link href={href ?? "/"} className="w-full border-b text-white z-100 block pl-3 pt-5 pr-3 transition-all ease-in-out hover:bg-white/20 cursor-cell">
      <span className="text-xl">{eventTitle}</span>
      {imgSrc && (
        <Image
          src={imgSrc}
          alt={imgAlt || eventTitle}
          width={1000}
          height={1000}
          className="mt-2"
          unoptimized
        />
      )}
    </Link>
  );
}